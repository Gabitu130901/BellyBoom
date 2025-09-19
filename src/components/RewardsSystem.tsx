import React, { useState } from 'react';
import { 
  Gift, Tag, Crown, Star, Zap, Trophy, Target, Users, 
  Heart, Share2, MessageCircle, TrendingUp, Award, 
  Sparkles, Copy, Check, X
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const RewardsSystem: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { user } = useShop();
  const [activeTab, setActiveTab] = useState('earn');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Mock rewards data
  const userLevel = {
    current: 3,
    name: 'Style Maven',
    points: 850,
    nextLevel: 1000,
    progress: 85
  };

  const availableRewards = [
    {
      id: 1,
      title: 'Reducere 10%',
      description: 'Pentru următoarea comandă',
      points: 500,
      type: 'discount',
      code: 'BELLA10',
      canClaim: true,
      icon: Gift
    },
    {
      id: 2,
      title: 'Transport Gratuit',
      description: 'Pentru comenzi peste 200 RON',
      points: 300,
      type: 'shipping',
      code: 'FREESHIP',
      canClaim: true,
      icon: Zap
    },
    {
      id: 3,
      title: 'Produs Gratuit',
      description: 'Alege din colecția Basic',
      points: 1000,
      type: 'product',
      canClaim: false,
      icon: Crown
    },
    {
      id: 4,
      title: 'Early Access',
      description: 'Noile colecții cu 24h înainte',
      points: 750,
      type: 'access',
      code: 'EARLY24',
      canClaim: true,
      icon: Star
    }
  ];

  const activities = [
    {
      action: 'Tag 3 prietene în story/post',
      points: 50,
      frequency: 'zilnic',
      icon: Tag,
      description: 'Menționează @bellyboom și 3 prietene într-un story sau post',
      color: 'coral'
    },
    {
      action: 'Review produs',
      points: 25,
      frequency: 'per review',
      icon: Star,
      description: 'Scrie un review detaliat pentru produsele cumpărate',
      color: 'emerald'
    },
    {
      action: 'Share pe social media',
      points: 30,
      frequency: 'zilnic',
      icon: Share2,
      description: 'Partajează produsele pe Instagram/Facebook cu #bellyboom',
      color: 'coral'
    },
    {
      action: 'Comentariu în blog',
      points: 15,
      frequency: 'per comentariu',
      icon: MessageCircle,
      description: 'Participă la discuțiile din community blog',
      color: 'emerald'
    },
    {
      action: 'Comandă finalizată',
      points: 100,
      frequency: 'per comandă',
      icon: Trophy,
      description: 'Primești puncte automat la fiecare comandă',
      color: 'coral'
    },
    {
      action: 'Invită o prietenă',
      points: 200,
      frequency: 'per invitație',
      icon: Users,
      description: 'Prietena ta trebuie să facă prima comandă',
      color: 'emerald'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Elena Georgescu', points: 2450, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', badges: ['Top Influencer'] },
    { rank: 2, name: 'Ana Popescu', points: 1890, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', badges: ['Community Helper'] },
    { rank: 3, name: 'Maria Ionescu', points: 1645, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', badges: ['Trendsetter'] },
    { rank: 4, name: 'Diana Vasilescu', points: 1420, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', badges: ['Style Maven'] },
    { rank: 5, name: user?.name || 'Tu', points: userLevel.points, avatar: user?.avatar, badges: ['Style Maven'], isCurrentUser: true }
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tabs = [
    { id: 'earn', label: 'Câștigă Puncte', icon: Zap },
    { id: 'rewards', label: 'Recompense', icon: Gift },
    { id: 'leaderboard', label: 'Clasament', icon: Trophy }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-coral to-emerald p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Sistem de Recompense</h1>
              <p className="opacity-90">Câștigă puncte, obține reduceri și produse gratuite!</p>
            </div>
            
            <div className="text-right">
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold">{userLevel.points}</div>
                <div className="text-sm opacity-80">Puncte totale</div>
              </div>
            </div>
          </div>
          
          {/* Level Progress */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{userLevel.name} - Level {userLevel.current}</span>
              <span className="text-sm opacity-80">{userLevel.nextLevel - userLevel.points} puncte până la Level {userLevel.current + 1}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500" 
                style={{width: `${userLevel.progress}%`}}
              ></div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-sand">
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 transition-colors ${
                    activeTab === tab.id 
                      ? 'text-coral border-b-2 border-coral bg-coral/5' 
                      : 'text-charcoal/70 hover:text-coral hover:bg-sand/30'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          
          {/* Earn Points Tab */}
          {activeTab === 'earn' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-charcoal mb-2">Cum câștigi puncte?</h2>
                <p className="text-charcoal/70">Participă activ în comunitate și primești recompense!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-white to-sand/30 border border-sand rounded-2xl p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          activity.color === 'coral' ? 'bg-coral/10 text-coral' : 'bg-emerald/10 text-emerald'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-charcoal mb-1">{activity.action}</h3>
                          <p className="text-sm text-charcoal/70 mb-3">{activity.description}</p>
                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              activity.color === 'coral' ? 'bg-coral/10 text-coral' : 'bg-emerald/10 text-emerald'
                            }`}>
                              +{activity.points} puncte
                            </span>
                            <span className="text-xs text-charcoal/60">{activity.frequency}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Special Challenge */}
              <div className="bg-gradient-to-r from-coral/10 to-emerald/10 border-2 border-coral/20 rounded-3xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-8 h-8 text-coral" />
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">Provocarea Săptămânii! 🔥</h3>
                    <p className="text-charcoal/70">Tag 3 prietene în story-uri cu #bellyboom și primești 150 puncte bonus!</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 bg-white/60 rounded-full h-4">
                    <div className="bg-gradient-to-r from-coral to-emerald h-4 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm font-semibold text-charcoal">75% completat</span>
                </div>
              </div>
            </div>
          )}

          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-charcoal mb-2">Recompense Disponibile</h2>
                <p className="text-charcoal/70">Folosește punctele pentru a obține reduceri și beneficii exclusive!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availableRewards.map((reward) => {
                  const Icon = reward.icon;
                  return (
                    <div key={reward.id} className={`border rounded-2xl p-6 transition-all hover:shadow-lg ${
                      reward.canClaim ? 'bg-white border-sand' : 'bg-gray-50 border-gray-200 opacity-75'
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          reward.canClaim ? 'bg-coral/10 text-coral' : 'bg-gray-200 text-gray-500'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-charcoal mb-1">{reward.title}</h3>
                          <p className="text-sm text-charcoal/70 mb-3">{reward.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              reward.canClaim ? 'bg-emerald/10 text-emerald' : 'bg-gray-200 text-gray-600'
                            }`}>
                              {reward.points} puncte
                            </span>
                            
                            {reward.canClaim ? (
                              <button className="px-4 py-2 bg-coral text-white rounded-xl font-semibold hover:bg-coral/90 transition-colors">
                                Revendică
                              </button>
                            ) : (
                              <span className="text-sm text-gray-500">Nu ai suficiente puncte</span>
                            )}
                          </div>

                          {reward.code && reward.canClaim && (
                            <div className="mt-3 flex items-center space-x-2">
                              <span className="text-xs text-charcoal/60">Cod:</span>
                              <code className="bg-sand px-2 py-1 rounded text-sm font-mono">{reward.code}</code>
                              <button
                                onClick={() => copyCode(reward.code!)}
                                className="p-1 hover:bg-sand rounded"
                              >
                                {copiedCode === reward.code ? (
                                  <Check className="w-4 h-4 text-emerald" />
                                ) : (
                                  <Copy className="w-4 h-4 text-charcoal/60" />
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Claim History */}
              <div className="bg-sand/30 rounded-2xl p-6">
                <h3 className="font-bold text-charcoal mb-4">Recompense Revendicate Recent</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Gift className="w-5 h-5 text-emerald" />
                      <div>
                        <div className="font-medium text-charcoal">Reducere 10%</div>
                        <div className="text-sm text-charcoal/70">Folosită în comanda #1234</div>
                      </div>
                    </div>
                    <span className="text-sm text-charcoal/60">Acum 2 zile</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-coral" />
                      <div>
                        <div className="font-medium text-charcoal">Transport Gratuit</div>
                        <div className="text-sm text-charcoal/70">Folosit în comanda #1230</div>
                      </div>
                    </div>
                    <span className="text-sm text-charcoal/60">Acum 1 săptămână</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Leaderboard Tab */}
          {activeTab === 'leaderboard' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-charcoal mb-2">Clasamentul Mamicilor</h2>
                <p className="text-charcoal/70">Vezi unde te poziționezi în comunitatea BellyBoom!</p>
              </div>

              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-2xl transition-all hover:shadow-md ${
                    user.isCurrentUser ? 'bg-gradient-to-r from-coral/10 to-emerald/10 border-2 border-coral/30' : 'bg-white border border-sand'
                  }`}>
                    {/* Rank */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      user.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                      user.rank === 2 ? 'bg-gray-100 text-gray-600' :
                      user.rank === 3 ? 'bg-orange-100 text-orange-600' :
                      'bg-sand text-charcoal'
                    }`}>
                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                    </div>

                    {/* Avatar */}
                    {user.avatar && (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-coral/30"
                      />
                    )}

                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-charcoal">{user.name}</h4>
                        {user.isCurrentUser && (
                          <span className="px-2 py-1 bg-coral text-white text-xs rounded-full">Tu</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        {user.badges.map((badge, badgeIndex) => (
                          <span key={badgeIndex} className="px-2 py-1 bg-emerald/10 text-emerald text-xs rounded-full">
                            🏆 {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-coral">{user.points}</div>
                      <div className="text-sm text-charcoal/70">puncte</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Monthly Challenge */}
              <div className="bg-gradient-to-r from-coral/10 to-emerald/10 border-2 border-emerald/20 rounded-3xl p-6">
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-emerald mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Provocarea Lunii</h3>
                  <p className="text-charcoal/70 mb-4">Primele 3 mamici cu cele mai multe puncte câștigate în noiembrie primesc:</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/60 rounded-xl p-3">
                      <div className="text-2xl mb-1">🥇</div>
                      <div className="text-sm font-semibold">Voucher 500 RON</div>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <div className="text-2xl mb-1">🥈</div>
                      <div className="text-sm font-semibold">Voucher 300 RON</div>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <div className="text-2xl mb-1">🥉</div>
                      <div className="text-sm font-semibold">Voucher 150 RON</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardsSystem;
