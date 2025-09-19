import React, { useState } from 'react';
import { 
  Heart, MessageCircle, Share2, Tag, TrendingUp, Clock, Users, 
  Crown, Award, Zap, Gift, Star, Baby, Plus, Filter, Search,
  ThumbsUp, Eye, BookOpen
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const CommunityBlog: React.FC = () => {
  const { user } = useShop();
  const [activeFilter, setActiveFilter] = useState('all');
  const [showNewPost, setShowNewPost] = useState(false);

  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      author: {
        name: 'Maria Ionescu',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Style Maven',
        pregnancyWeek: 28,
        badges: ['Trendsetter', 'Helper']
      },
      title: 'Cum să te îmbraci stylish în al doilea trimestru 💕',
      content: 'Dragi mamici, vreau să împart cu voi câteva trucuri despre cum să rămâi elegantă în al doilea trimestru! După ce am încercat zeci de combinații...',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['#secondtrimester', '#style', '#bellyboom'],
      likes: 156,
      comments: 23,
      shares: 12,
      views: 890,
      timeAgo: '2 ore',
      category: 'style',
      featured: true
    },
    {
      id: 2,
      author: {
        name: 'Ana Popescu',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'New Mama',
        pregnancyWeek: 16,
        badges: ['Early Adopter']
      },
      title: 'Primele mișcări ale bebelușului 👶',
      content: 'Ieri am simțit pentru prima dată bebelușul meu! Este o senzație atât de specială și vreau să o împart cu voi...',
      tags: ['#firstkicks', '#pregnancy', '#milestone'],
      likes: 234,
      comments: 45,
      shares: 28,
      views: 1240,
      timeAgo: '5 ore',
      category: 'experience'
    },
    {
      id: 3,
      author: {
        name: 'Elena Georgescu',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Fashion Pro',
        pregnancyWeek: 35,
        badges: ['Community Helper', 'Blogger']
      },
      title: 'Pregătiri pentru spital - Lista mea completă ✨',
      content: 'Fiind la săptămâna 35, am început să îmi pregătesc geanta pentru spital. Iată lista mea completă cu tot ce cred că e esențial...',
      tags: ['#hospitalbag', '#thirdtrimester', '#tips'],
      likes: 89,
      comments: 31,
      shares: 15,
      views: 567,
      timeAgo: '1 zi',
      category: 'tips'
    }
  ];

  const categories = [
    { id: 'all', label: 'Toate', icon: BookOpen, count: 156 },
    { id: 'style', label: 'Style & Fashion', icon: Crown, count: 45 },
    { id: 'experience', label: 'Experiențe', icon: Heart, count: 67 },
    { id: 'tips', label: 'Sfaturi', icon: Star, count: 34 },
    { id: 'health', label: 'Sănătate', icon: Baby, count: 28 }
  ];

  const trendingTags = [
    { tag: '#bellyboom', count: 234, trending: true },
    { tag: '#secondtrimester', count: 156 },
    { tag: '#style', count: 189 },
    { tag: '#tips', count: 98 },
    { tag: '#pregnancy', count: 145 }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <section id="community-blog" className="py-20 bg-gradient-to-br from-ivory via-white to-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-coral rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-coral/10 to-emerald/10 rounded-full text-coral text-sm font-medium border border-coral/20 mb-6">
            <Users className="w-5 h-5 mr-2" />
            Community Blog
          </span>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-charcoal">
            Povești de
            <span className="block bg-gradient-to-r from-coral to-emerald bg-clip-text text-transparent">
              Mamici
            </span>
          </h2>
          
          <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            Împărtășește experiența ta, învață de la alte mamici și câștigă recompense 
            pentru fiecare contribuție la comunitatea noastră! ✨
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* New Post Button */}
              {user && (
                <button
                  onClick={() => setShowNewPost(true)}
                  className="w-full bg-gradient-to-r from-coral to-emerald text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Scrie Articol</span>
                </button>
              )}

              {/* Categories */}
              <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-sand shadow-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-coral" />
                  Categorii
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                          activeFilter === category.id
                            ? 'bg-coral text-white'
                            : 'text-charcoal hover:bg-sand/50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4" />
                          <span className="font-medium">{category.label}</span>
                        </div>
                        <span className="text-sm">{category.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Trending Tags */}
              <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-sand shadow-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-emerald" />
                  Trending Tags
                </h3>
                <div className="space-y-2">
                  {trendingTags.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-sand/30 cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <span className="text-coral font-medium">{item.tag}</span>
                        {item.trending && <Zap className="w-3 h-3 text-amber-500" />}
                      </div>
                      <span className="text-sm text-charcoal/70">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Points System Info */}
              <div className="bg-gradient-to-br from-coral/10 to-emerald/10 rounded-3xl p-6 border border-coral/20">
                <h3 className="text-lg font-bold text-charcoal mb-3 flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-coral" />
                  Câștigă Puncte!
                </h3>
                <div className="space-y-2 text-sm text-charcoal/80">
                  <div className="flex justify-between">
                    <span>Articol nou</span>
                    <span className="font-bold text-coral">+100p</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comentariu</span>
                    <span className="font-bold text-emerald">+25p</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Like primit</span>
                    <span className="font-bold text-coral">+5p</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3 tag-uri</span>
                    <span className="font-bold text-emerald">+50p</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 rounded-2xl p-4 text-center border border-sand">
                  <div className="text-2xl font-bold text-coral">156</div>
                  <div className="text-sm text-charcoal/70">Articole</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-4 text-center border border-sand">
                  <div className="text-2xl font-bold text-emerald">2.3K</div>
                  <div className="text-sm text-charcoal/70">Comentarii</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-4 text-center border border-sand">
                  <div className="text-2xl font-bold text-charcoal">89</div>
                  <div className="text-sm text-charcoal/70">Autoare</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-4 text-center border border-sand">
                  <div className="text-2xl font-bold text-coral">12K</div>
                  <div className="text-sm text-charcoal/70">Vizite</div>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className={`bg-white/90 backdrop-blur rounded-3xl overflow-hidden border border-sand shadow-lg hover:shadow-xl transition-all duration-300 ${post.featured ? 'ring-2 ring-coral/20' : ''}`}>
                    {post.featured && (
                      <div className="bg-gradient-to-r from-coral to-emerald text-white px-4 py-2 text-sm font-semibold flex items-center">
                        <Crown className="w-4 h-4 mr-2" />
                        Featured Post
                      </div>
                    )}
                    
                    <div className="p-6">
                      {/* Author Info */}
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-coral/30"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-charcoal">{post.author.name}</h4>
                            <span className="px-2 py-1 bg-coral/10 text-coral text-xs rounded-full">
                              {post.author.level}
                            </span>
                            {post.author.pregnancyWeek && (
                              <span className="px-2 py-1 bg-emerald/10 text-emerald text-xs rounded-full">
                                Săpt. {post.author.pregnancyWeek}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="w-3 h-3 text-charcoal/60" />
                            <span className="text-xs text-charcoal/60">{post.timeAgo}</span>
                            {post.author.badges.map((badge, index) => (
                              <span key={index} className="text-xs text-charcoal/60">🏆 {badge}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-charcoal mb-3 hover:text-coral cursor-pointer transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-charcoal/80 leading-relaxed mb-4">{post.content}</p>
                        
                        {post.image && (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover rounded-2xl mb-4"
                          />
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-emerald/10 text-emerald text-sm rounded-full cursor-pointer hover:bg-emerald/20 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Post Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-sand">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-charcoal/70 hover:text-coral transition-colors">
                            <Heart className="w-5 h-5" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-charcoal/70 hover:text-emerald transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-charcoal/70 hover:text-coral transition-colors">
                            <Share2 className="w-5 h-5" />
                            <span>{post.shares}</span>
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-charcoal/60">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <button className="text-coral hover:text-coral/80 font-medium">
                            Citește mai mult
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <button className="px-8 py-3 bg-white border-2 border-coral text-coral rounded-2xl font-semibold hover:bg-coral hover:text-white transition-all">
                  Încarcă mai multe articole
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBlog;
