import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Star, Heart, Share2 } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-20 bg-pink-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium border border-pink-200 mb-6">
            <Play className="w-4 h-4 mr-2" />
            Experiența BellyBoom
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Descoperă Magia Modei de Maternitate
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Urmărește cum tehnologia AI și realitatea augmentată transformă experiența de shopping 
            pentru viitoarele mămici într-o călătorie magică și personalizată.
          </p>
        </div>

        {/* Main Video */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative group">
            <div className="relative bg-white/70 rounded-3xl p-4 backdrop-blur-lg border border-pink-200 overflow-hidden">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                {/* Placeholder for video - in real implementation, this would be a video element */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 to-purple-900/50 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="BellyBoom Experience"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="group/play bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-8 transition-all duration-300 transform hover:scale-110"
                    >
                      {isPlaying ? (
                        <Pause className="w-12 h-12 text-white group-hover/play:scale-110 transition-transform" />
                      ) : (
                        <Play className="w-12 h-12 text-white ml-1 group-hover/play:scale-110 transition-transform" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white" />
                      )}
                    </button>
                    
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>

                    <div className="text-slate-800 text-sm">2:34 / 5:42</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full bg-gradient-to-r from-pink-400 to-purple-500 w-2/5 transition-all duration-300"></div>
                </div>
              </div>

              {/* Video Stats */}
              <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-md rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-4 text-white text-sm">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-pink-400" />
                    <span>2.4K</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className="w-4 h-4 mr-1 text-blue-400" />
                    <span>856</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-pink-500/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl animate-bounce">
              <div className="text-sm font-semibold text-white mb-1">Putere AI</div>
              <div className="text-pink-100 text-xs">Mărimi Inteligente</div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-pink-500/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
              <div className="text-sm font-semibold text-white mb-1">Probare AR</div>
              <div className="text-purple-100 text-xs">Probare Virtuală</div>
            </div>
          </div>
        </div>

        {/* Video Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: 'Evoluție Mărimi cu AI',
              description: 'Urmărește cum algoritmul nostru învață și se adaptează la schimbările corpului tău',
              icon: '🤖',
              duration: '1:20'
            },
            {
              title: 'Probare Virtuală AR',
              description: 'Experimentează tehnologia de realitate augmentată pentru încercarea hainelor',
              icon: '📱',
              duration: '2:15'
            },
            {
              title: 'Povești din Comunitate',
              description: 'Ascultă poveștile inspiraționale ale mamicilor din comunitatea noastră',
              icon: '💕',
              duration: '3:30'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 text-sm font-medium">{feature.duration}</span>
                <button className="p-2 bg-pink-500/20 rounded-full group-hover:bg-pink-500/30 transition-colors">
                  <Play className="w-4 h-4 text-pink-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;