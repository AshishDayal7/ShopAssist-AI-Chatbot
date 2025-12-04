import React, { useRef, useState, useEffect } from 'react';
import { Message, Sender, Product, SearchFilters } from '../types';
import { ProductCard } from './ProductCard';
import { Bot, User, Sparkles, ChevronLeft, ChevronRight, BookmarkPlus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
  selectedProductIds: string[];
  onToggleProduct: (product: Product) => void;
  onSaveSearch?: (filters: SearchFilters) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, selectedProductIds, onToggleProduct, onSaveSearch }) => {
  const isBot = message.role === Sender.BOT;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check scroll position to manage arrow visibility
  const checkScroll = () => {
    if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 5);
        // Tolerance of 5px for floating point issues
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    if (message.relatedProducts && message.relatedProducts.length > 0) {
        checkScroll();
        // Check again after a short delay for layout shifts
        const timer = setTimeout(checkScroll, 200);
        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
            clearTimeout(timer);
        };
    }
  }, [message.relatedProducts]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const scrollAmount = 300; // Approx card width + margin
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
        // Wait for smooth scroll to finish to update arrows
        setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className={`flex w-full mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[90%] md:max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center shadow-sm ${isBot ? 'bg-indigo-100 mr-3 text-indigo-600' : 'bg-gray-200 ml-3 text-gray-600'}`}>
          {isBot ? <Bot size={20} /> : <User size={20} />}
        </div>

        <div className="flex flex-col overflow-hidden w-full relative">
            {/* Bubble */}
            <div className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed relative ${
                isBot 
                ? 'bg-white text-gray-800 border border-gray-100 rounded-tl-none' 
                : 'bg-indigo-600 text-white rounded-tr-none shadow-md'
            }`}>
               
               {/* Save Search Button for Bot messages with filters */}
               {isBot && message.usedFilters && onSaveSearch && (
                 <div className="absolute top-2 right-2">
                   <button 
                    onClick={() => onSaveSearch(message.usedFilters!)}
                    title="Save this search"
                    className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
                   >
                     <BookmarkPlus size={16} />
                   </button>
                 </div>
               )}

               {message.isThinking ? (
                   <div className="flex space-x-2 items-center text-gray-500 animate-pulse py-1">
                       <Sparkles size={16} className="text-indigo-400" />
                       <span className="font-medium">Analyzing market data...</span>
                   </div>
               ) : (
                 <div className="markdown-body pr-6">
                   <ReactMarkdown 
                    components={{
                        ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
                        li: ({node, ...props}) => <li className="mb-1" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold text-inherit" {...props} />,
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                        a: ({node, ...props}) => <a className="underline hover:text-indigo-200" {...props} />
                    }}
                   >
                       {message.text}
                    </ReactMarkdown>
                 </div>
               )}
            </div>

            {/* Product Carousel (Only for Bot) */}
            {isBot && message.relatedProducts && message.relatedProducts.length > 0 && (
                <div className="group mt-4 -ml-4 w-[calc(100%+2rem)] relative">
                     
                     {/* Left Scroll Button */}
                     <button 
                        onClick={() => scroll('left')}
                        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg border border-gray-100 transition-all duration-200 ${
                            showLeftArrow ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-4'
                        }`}
                        aria-label="Scroll left"
                     >
                        <ChevronLeft size={20} />
                     </button>

                     <div 
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex space-x-4 px-4 overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
                     >
                        {message.relatedProducts.map((product, idx) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                index={idx}
                                isSelected={selectedProductIds.includes(product.id)}
                                onToggleSelect={onToggleProduct}
                                highlightTags={message.usedFilters?.features || []}
                            />
                        ))}
                     </div>

                     {/* Right Scroll Button */}
                     <button 
                        onClick={() => scroll('right')}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg border border-gray-100 transition-all duration-200 ${
                            showRightArrow ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'
                        }`}
                        aria-label="Scroll right"
                     >
                        <ChevronRight size={20} />
                     </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};