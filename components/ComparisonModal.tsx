import React from 'react';
import { Product } from '../types';
import { X, ExternalLink, Star } from 'lucide-react';

interface ComparisonModalProps {
  products: Product[];
  onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ products, onClose }) => {
  if (!products.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-200">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Compare Products</h2>
            <p className="text-sm text-gray-500">Comparing {products.length} items</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="overflow-auto flex-1 custom-scrollbar bg-gray-50/50">
          <table className="w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="p-4 text-left min-w-[150px] bg-white sticky left-0 z-20 border-b border-gray-200 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)]">
                  <span className="font-semibold text-gray-400 uppercase tracking-wider text-xs">Product Details</span>
                </th>
                {products.map(p => (
                  <th key={p.id} className="p-4 min-w-[280px] w-[280px] bg-white border-b border-gray-200 align-top group hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col items-center text-center">
                       <div className="relative h-32 w-32 mb-3">
                         <img 
                            src={p.imageUrl} 
                            className="w-full h-full object-contain mix-blend-multiply" 
                            alt={p.name} 
                         />
                       </div>
                       <div className="mb-2">
                           <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{p.brand}</span>
                           <h3 className="font-bold text-lg text-gray-900 leading-tight">{p.name}</h3>
                       </div>
                       <div className="flex items-center space-x-1 text-yellow-600 mb-2 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-100">
                            <Star size={12} fill="currentColor" />
                            <span className="font-bold text-xs">{p.rating}</span>
                            <span className="text-gray-400 text-xs">({p.reviews})</span>
                       </div>
                       <p className="text-xl font-bold text-gray-900 mb-3">₹{p.price.toLocaleString('en-IN')}</p>
                        <a 
                          href={p.affiliateLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full bg-gray-900 hover:bg-[#FF9900] hover:text-white text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md"
                        >
                            <span>Buy on Amazon</span>
                            <ExternalLink size={14} className="opacity-80"/>
                        </a>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
               {/* Specs */}
              {['screen', 'processor', 'battery', 'camera', 'storage'].map((specKey, idx) => (
                 <tr key={specKey} className={idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                    <td className="p-4 font-medium text-gray-500 capitalize bg-white sticky left-0 z-10 border-r border-gray-100 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)]">
                        {specKey}
                    </td>
                    {products.map(p => (
                        <td key={p.id} className="p-4 text-center text-gray-700 font-medium border-r border-gray-100 last:border-0">
                            {/* @ts-ignore */}
                            {p.specs[specKey] || '-'}
                        </td>
                    ))}
                 </tr>
              ))}
               {/* Key Features */}
               <tr>
                <td className="p-4 font-medium text-gray-500 bg-white sticky left-0 z-10 border-r border-gray-100 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)] align-top">
                    Key Features
                </td>
                {products.map(p => (
                    <td key={p.id} className="p-4 border-r border-gray-100 last:border-0 align-top">
                        <ul className="space-y-1.5">
                            {p.features.map((f, i) => (
                                <li key={i} className="text-xs text-gray-600 flex items-start text-left bg-gray-100/50 p-1.5 rounded">
                                    <span className="mr-1.5 mt-0.5 block w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0"></span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};