import React, { useState, useEffect, useRef } from 'react';
import { Send, ShoppingBag, ArrowRightLeft, X } from 'lucide-react';
import { Message, Sender, Product } from '../types';
import { ChatMessage } from './ChatMessage';
import { initializeChat, sendMessageToGemini } from '../services/geminiService';
import { ComparisonModal } from './ComparisonModal';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: Sender.BOT,
      text: "Hi! I'm ShopAssist AI. I can help you find the best smartphone for your needs in India. \n\nWhat are you looking for today? (e.g., *'A 5G phone under ₹30,000 with a good camera'*)"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedProducts]);

  useEffect(() => {
      initializeChat();
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setIsLoading(true);

    const userMsg: Message = {
      id: Date.now().toString(),
      role: Sender.USER,
      text: userText
    };
    setMessages(prev => [...prev, userMsg]);

    const loadingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
        id: loadingId,
        role: Sender.BOT,
        text: '',
        isThinking: true
    }]);

    try {
      const response = await sendMessageToGemini(userText);
      
      setMessages(prev => prev.map(msg => {
          if (msg.id === loadingId) {
              return {
                  ...msg,
                  text: response.text,
                  isThinking: false,
                  relatedProducts: response.relatedProducts
              };
          }
          return msg;
      }));
    } catch (error) {
        setMessages(prev => prev.map(msg => {
            if (msg.id === loadingId) {
                return {
                    ...msg,
                    text: "Sorry, something went wrong. Please check your connection or API key.",
                    isThinking: false
                };
            }
            return msg;
        }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleProductSelection = (product: Product) => {
    setSelectedProducts(prev => {
        const exists = prev.find(p => p.id === product.id);
        if (exists) {
            return prev.filter(p => p.id !== product.id);
        }
        if (prev.length >= 4) {
            // Ideally use a toast here, using alert for simplicity
            alert("You can compare up to 4 products at a time.");
            return prev;
        }
        return [...prev, product];
    });
  };

  const clearSelection = () => {
      setSelectedProducts([]);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-gray-50 shadow-2xl overflow-hidden md:rounded-xl md:my-4 md:h-[95vh] border border-gray-200 relative">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 p-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2.5 rounded-xl text-white shadow-md">
                <ShoppingBag size={22} />
            </div>
            <div>
                <h1 className="font-bold text-xl text-gray-900 tracking-tight leading-none">ShopAssist</h1>
                <p className="text-xs text-green-600 font-semibold flex items-center mt-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                    India's AI Shopping Expert
                </p>
            </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-4 custom-scrollbar bg-gray-50/50">
        <div className="space-y-2 pb-20"> {/* Added padding bottom for floating bar */}
            {messages.map((msg) => (
                <ChatMessage 
                    key={msg.id} 
                    message={msg} 
                    selectedProductIds={selectedProducts.map(p => p.id)}
                    onToggleProduct={toggleProductSelection}
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Floating Comparison Bar */}
      {selectedProducts.length > 0 && (
          <div className="absolute bottom-[90px] left-0 right-0 px-4 z-30 flex justify-center animate-in slide-in-from-bottom-5 fade-in duration-300">
              <div className="bg-gray-900 text-white rounded-full shadow-2xl px-6 py-3 flex items-center space-x-4 border border-gray-700">
                  <span className="font-medium text-sm flex items-center">
                      <span className="bg-indigo-500 text-white text-xs font-bold px-2 py-0.5 rounded-full mr-2">
                        {selectedProducts.length}
                      </span>
                      Selected
                  </span>
                  <div className="h-4 w-px bg-gray-600"></div>
                  <button 
                    onClick={() => setShowCompareModal(true)}
                    className="flex items-center space-x-2 hover:text-indigo-300 transition-colors font-semibold text-sm"
                  >
                      <ArrowRightLeft size={16} />
                      <span>Compare</span>
                  </button>
                  <button 
                    onClick={clearSelection}
                    className="p-1 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
                  >
                      <X size={16} />
                  </button>
              </div>
          </div>
      )}

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-100 relative z-20">
        <div className="relative flex items-center bg-gray-100 rounded-2xl border border-transparent focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all shadow-inner">
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about phones..."
                className="w-full bg-transparent border-none focus:ring-0 resize-none py-3.5 pl-4 pr-12 max-h-32 text-gray-800 placeholder-gray-500 text-sm md:text-base"
                rows={1}
                style={{ minHeight: '52px' }}
            />
            <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className={`absolute right-2 p-2 rounded-xl transition-all duration-200 ${
                    inputValue.trim() && !isLoading 
                    ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 active:scale-95' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
                <Send size={20} />
            </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-2 font-medium">
            ShopAssist can make mistakes. Please verify specs on Amazon.
        </p>
      </div>

      {/* Comparison Modal */}
      {showCompareModal && (
          <ComparisonModal 
            products={selectedProducts} 
            onClose={() => setShowCompareModal(false)} 
          />
      )}
    </div>
  );
};