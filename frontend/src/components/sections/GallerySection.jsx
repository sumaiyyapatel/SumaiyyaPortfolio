import React, { useState } from 'react';
import ScrollSection from '../ScrollSection';
import { portfolioData } from '../../data/mock';
import { X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredGallery = filter === 'all' 
    ? portfolioData.gallery 
    : portfolioData.gallery.filter(item => item.type === filter);

  return (
    <ScrollSection id="gallery" className="min-h-screen bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div data-parallax>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Digital <span className="text-[#00d4ff]">Gallery</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] mb-4"></div>
          <p className="text-gray-400 text-lg mb-12">
            Exploring creativity through 3D modeling and digital art
          </p>
        </div>

        {/* Filter buttons */}
        <div data-parallax className="flex flex-wrap gap-4 mb-12">
          {['all', '3d', 'art'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === filterType
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] text-black'
                  : 'bg-[#1a1a1a] text-gray-400 border border-[#00d4ff] border-opacity-20 hover:border-opacity-50'
              }`}
            >
              {filterType === 'all' ? 'All' : filterType === '3d' ? '3D Models' : 'Digital Art'}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              data-parallax
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-[#00d4ff] border-opacity-20 hover:border-opacity-60 transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-[#00d4ff] bg-opacity-20 text-[#00d4ff] rounded-full text-sm mb-2 w-fit border border-[#00d4ff] border-opacity-40">
                  {item.type === '3d' ? '3D Model' : 'Digital Art'}
                </span>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#00d4ff] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl border-2 border-[#00d4ff] shadow-[0_0_50px_rgba(0,212,255,0.3)]"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </ScrollSection>
  );
};

export default GallerySection;
