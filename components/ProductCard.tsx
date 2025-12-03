import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart, ExternalLink, Square, CheckSquare } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  onToggleSelect?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected = false, onToggleSelect }) => {
  
  const handleToggle = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onToggleSelect) onToggleSelect(product);
  };

  return (
    <div className={`flex-none w-72 bg-white rounded-xl shadow-md border overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group ${isSelected ? 'ring-2 ring-indigo-500 border-indigo-500' : 'border-gray-100'}`}>
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
          className="w-full h-full object-cover mix-blend-multiply p-4 transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-gray-800 border border-gray-200 shadow-sm">
          ₹{product.price.toLocaleString('en-IN')}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-2">
            <div>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-0.5">{product.brand}</p>
                <h3 className="font-bold text-gray-900 leading-tight text-lg">{product.name}</h3>
            </div>
            <div className="flex items-center space-x-1 bg-yellow-50 px-1.5 py-0.5 rounded text-yellow-700 border border-yellow-100 shrink-0 ml-2">
                <Star size={12} fill="currentColor" />
                <span className="text-xs font-bold">{product.rating}</span>
            </div>
        </div>

        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="space-y-1.5 mb-5 flex-grow bg-gray-50 rounded-lg p-2.5 border border-gray-100/50">
            {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                <div key={key} className="flex justify-between text-xs items-center">
                    <span className="text-gray-400 capitalize font-medium">{key}</span>
                    <span className="text-gray-700 font-semibold truncate ml-2 max-w-[130px]">{value}</span>
                </div>
            ))}
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