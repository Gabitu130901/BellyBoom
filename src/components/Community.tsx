import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Award, Users, TrendingUp, Camera, Star } from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const tabs = [
    { id: 'feed', label: 'Feed Comunitate', icon: MessageCircle },
    { id: 'challenges', label: 'Provocări de Stil', icon: Award },
    { id: 'groups', label: 'Grupuri de Mame', icon: Users }
  ];

  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah M.',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        week: 28,
        level: 'Style Maven'
      },
      content: "Tocmai am primit superba rochie Aurora Wrap de la BellyBoom! Mărimea propusă de AI a fost perfectă – se potrivește impecabil la 28 de săptămâni! 💕",
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 234,
      comments: 45,
      shares: 12,
      timestamp: '2 hours ago',
      tags: ['#BellyBoom', '#28weeks', '#StyleInspo']
    },
    {
      id: 2,
      user: {
        name: 'Maria K.',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        week: 35,
        level: 'Fashion Pro'
      },
      content: "Trimestrul trei și mă simt fabulos! Iată ținuta mea preferată pentru muncă, de la ședințe la pregătiri de mămică 👗✨",
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 189,
      comments: 32,
      shares: 8,
      timestamp: '5 hours ago',
      tags: ['#WorkWear', '#ThirdTrimester', '#Confidence']
    },
    {
      id: 3,
      user: {
        name: 'Emma R.',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        week: 20,
        level: 'Style Explorer'
      },
      content: "Suntem la jumătate! Funcția de probare AR m-a ajutat să găsesc rochia perfectă pentru petrecerea de gender reveal. Tehnologia e uimitoare! 🎉",
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 156,
      comments: 28,
      shares: 15,
      timestamp: '1 day ago',
      tags: ['#GenderReveal', '#ARTryOn', '#Halfway']
    }
  ];

  const challenges = [
    {
      id: 1,
      title: 'Glow Up Challenge',
      description: 'Show us your most confident maternity look!',
      participants: 1240,
      prize: '500 BellyCoins',
      endDate: '7 days left',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Sustainable Style',
      description: 'Create amazing looks with eco-friendly pieces',
      participants: 856,
      prize: '300 BellyCoins + Eco Bundle',
      endDate: '12 days left',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Date Night Ready',
      description: 'Romantic outfits for expecting couples',
      participants: 692,
      prize: '400 BellyCoins',
      endDate: '5 days left',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const groups = [
    {
      id: 1,
      name: 'First Time Mamas',
      members: 12400,
      description: 'Support and style tips for first-time expecting mothers',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      name: 'Working Mama Style',
      members: 8900,
      description: 'Professional maternity fashion for career women',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 3,
      name: 'Budget-Friendly Bump',
      members: 15600,
      description: 'Affordable maternity fashion tips and finds',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Fitness & Fashion',
      members: 6800,
      description: 'Activewear and healthy lifestyle during pregnancy',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-white to-sand relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-coral/10 rounded-full text-coral text-sm font-medium border border-coral/20 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Comunitatea Mama
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-charcoal">Conectează-te & Inspiră</h2>
          
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Alătură-te comunității noastre de viitoare mămici. Împărtășește călătoria ta, inspiră-te în stil 
            și conectează-te cu mame care îți înțeleg experiența.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-coral to-emerald text-white border-coral'
                    : 'bg-white/80 text-charcoal border-sand hover:bg-sand/50 hover:border-coral/30'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'feed' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white/90 backdrop-blur-lg border border-sand rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-coral/50"
                    />
                    <div className="ml-4">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-charcoal font-semibold">{post.user.name}</h4>
                        <span className="px-2 py-1 bg-coral/20 text-coral text-xs rounded-full">
                          Săpt. {post.user.week}
                        </span>
                        <span className="px-2 py-1 bg-emerald/20 text-emerald text-xs rounded-full">
                          {post.user.level}
                        </span>
                      </div>
                      <p className="text-charcoal/60 text-sm">{post.timestamp}</p>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-charcoal/80 mb-4 leading-relaxed">{post.content}</p>

                {/* Post Image */}
                {post.image && (
                  <div className="mb-4">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-emerald/20 text-emerald text-sm rounded-full border border-emerald/30 cursor-pointer hover:bg-emerald/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-sand">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-charcoal/60 hover:text-coral transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-charcoal/60 hover:text-emerald transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-charcoal/60 hover:text-coral transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{challenge.title}</h3>
                  <p className="text-gray-400 mb-4">{challenge.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-purple-300">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">{challenge.participants} înscriși</span>
                    </div>
                    <span className="text-pink-400 text-sm font-medium">{challenge.endDate}</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-yellow-400 mb-2">
                      <Award className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">Prize: {challenge.prize}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-coral to-emerald hover:from-coral/90 hover:to-emerald/90 text-white py-3 rounded-2xl font-semibold transition-all duration-300">
                    Înscrie-te la Provocare
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-white/90 backdrop-blur-lg border border-sand rounded-3xl p-6 hover:border-coral/30 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-4`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-charcoal mb-2">{group.name}</h3>
                <p className="text-charcoal/70 mb-4">{group.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-charcoal/80">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{group.members.toLocaleString()} membri</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-coral/20 to-emerald/20 border border-coral/30 text-coral rounded-xl text-sm font-medium hover:bg-gradient-to-r hover:from-coral/30 hover:to-emerald/30 transition-all duration-300">
                    Intră în Grup
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Community;