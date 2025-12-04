import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart, ExternalLink, Square, CheckSquare } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  onToggleSelect?: (product: Product) => void;
  highlightTags?: string[];
  index?: number;
}

const BRAND_LOGOS: Record<string, string> = {
  Samsung: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Samsung_Orig_Wordmark_BLACK_RGB.png/640px-Samsung_Orig_Wordmark_BLACK_RGB.png",
  Apple: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  Google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  OnePlus: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/OP_LU_Reg_1L_RGB_red_copy-01.svg/640px-OP_LU_Reg_1L_RGB_red_copy-01.svg.png",
  Xiaomi: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
  Realme: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Realme_logo.png/640px-Realme_logo.png",
  Motorola: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Motorola_new_logo.svg/960px-Motorola_new_logo.svg.png?20250526033918",
  Vivo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_mobile_logo.png",
  Poco: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Poco_Smartphone_Company_logo.png/640px-Poco_Smartphone_Company_logo.png",
  Nothing: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Nothing_OS_wordmark.svg/640px-Nothing_OS_wordmark.svg.png",
  iQOO: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/IQOO_logo.svg/640px-IQOO_logo.svg.png",
  Honor: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Huawei_Honor_Logo.svg/640px-Huawei_Honor_Logo.svg.png"
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected = false, onToggleSelect, highlightTags = [], index = 0 }) => {
  
  const handleToggle = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onToggleSelect) onToggleSelect(product);
  };

  // Helper to check if a spec row should be highlighted based on user query
  const isHighlighted = (key: string): boolean => {
      if (!highlightTags.length) return false;
      const lowerKey = key.toLowerCase();
      
      // Map common user intents to spec keys
      const intentMap: Record<string, string[]> = {
          'camera': ['camera', 'photo', 'video', 'portrait'],
          'battery': ['battery', 'charge', 'mah'],
          'processor': ['processor', 'performance', 'gaming', 'speed', 'fast'],
          'screen': ['screen', 'display', 'hz', 'amoled']
      };

      return highlightTags.some(tag => {
          const lowerTag = tag.toLowerCase();
          // Check direct key match (e.g. tag "good camera" matches key "camera")
          if (lowerKey === 'camera' && (lowerTag.includes('camera') || lowerTag.includes('photo'))) return true;
          if (lowerKey === 'battery' && lowerTag.includes('battery')) return true;
          if (lowerKey === 'processor' && (lowerTag.includes('performance') || lowerTag.includes('gaming') || lowerTag.includes('fast'))) return true;
          if (lowerKey === 'screen' && (lowerTag.includes('display') || lowerTag.includes('screen'))) return true;
          return false;
      });
  };

  // Explicitly defined specs to show in order
  const specsToShow = ['screen', 'processor', 'camera', 'battery'];
  const brandLogo = BRAND_LOGOS[product.brand];

  return (
    <div 
      className={`flex-none w-72 bg-white rounded-xl shadow-md border overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group animate-slide-up ${isSelected ? 'ring-2 ring-indigo-500 border-indigo-500' : 'border-gray-100'}`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      <div className="relative h-48 w-full bg-gray-100 group-hover:bg-gray-50 transition-colors">
        
        {/* Comparison Checkbox */}
        {onToggleSelect && (
            <div className="absolute top-3 left-3 z-10">
                <button 
                    onClick={handleToggle}
                    className={`flex items-center space-x-1 px-2 py-1.5 rounded-lg shadow-sm backdrop-blur-md border transition-all ${
                        isSelected 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white/80 text-gray-600 border-gray-200 hover:bg-white hover:text-indigo-600'
                    }`}
                >
                    {isSelected ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span className="text-xs font-semibold">{isSelected ? 'Selected' : 'Compare'}</span>
                </button>
            </div>
        )}

        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply p-4 transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
              // Fallback if image fails. Using white background to match mix-blend-multiply better.
              (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/ffffff/a3a3a3?text=No+Image';
          }}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-gray-800 border border-gray-200 shadow-sm">
          ₹{product.price.toLocaleString('en-IN')}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-2">
            <div>
                <div className="flex items-center gap-1.5 mb-1 h-4">
                    {brandLogo ? (
                        <img src={brandLogo} alt={product.brand} className="h-full w-auto object-contain max-w-[60px]" />
                    ) : (
                         <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">{product.brand}</p>
                    )}
                </div>
                <h3 className="font-bold text-gray-900 leading-tight text-lg mt-1">{product.name}</h3>
            </div>
            <div className="flex items-center space-x-1 bg-yellow-50 px-1.5 py-0.5 rounded text-yellow-700 border border-yellow-100 shrink-0 ml-2">
                <Star size={12} fill="currentColor" />
                <span className="text-xs font-bold">{product.rating}</span>
            </div>
        </div>

        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="space-y-1.5 mb-5 flex-grow bg-gray-50 rounded-lg p-2.5 border border-gray-100/50">
            {specsToShow.map((key) => {
                // @ts-ignore
                const value = product.specs[key];
                const highlight = isHighlighted(key);
                
                return (
                    <div key={key} className={`flex justify-between text-xs items-center ${highlight ? 'bg-indigo-50/80 -mx-1 px-1 rounded py-0.5' : ''}`}>
                        <span className={`capitalize font-medium ${highlight ? 'text-indigo-700' : 'text-gray-400'}`}>{key}</span>
                        <span className={`font-semibold truncate ml-2 max-w-[130px] ${highlight ? 'text-indigo-900' : 'text-gray-700'}`}>{value || '-'}</span>
                    </div>
                );
            })}
        </div>

        <a 
          href={product.affiliateLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full mt-auto bg-gray-900 hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md"
        >
            <ShoppingCart size={16} />
            <span>Buy on Amazon</span>
            <ExternalLink size={14} className="ml-1 opacity-70" />
        </a>
      </div>
    </div>
  );
};