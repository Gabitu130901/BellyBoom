import React, { useState } from 'react';
import { 
  User, Phone, MessageCircle, Camera, Edit3, Save, X, Star, 
  Gift, Tag, Trophy, Heart, Baby, Calendar, MapPin, Link,
  Crown, Award, Zap, TrendingUp, Users
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import RewardsSystem from './RewardsSystem';

const ProfilePage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { user } = useShop();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [showRewards, setShowRewards] = useState(false);
  
  const [profileData, setProfileData] = useState({
    phone: user?.phone || '',
    whatsapp: user?.whatsapp || '',
    bio: user?.bio || 'Mamică fericită în căutarea stilului perfect! 💕',
    city: user?.city || '',
    dueDate: user?.dueDate || '',
    instagramHandle: user?.instagramHandle || '',
    favoriteStyles: user?.favoriteStyles || ['Casual', 'Elegant'],
  });

  // Mock stats data
  const userStats = {
    posts: 12,
    followers: 186,
    following: 234,
    points: 850,
    level: 'Style Maven',
    badges: ['Early Adopter', 'Community Helper', 'Trendsetter'],
    recentActivity: [
      { type: 'post', content: 'Iubesc noua rochie Aurora! Perfect pentru săptămâna 24! 💕', likes: 15, time: '2h' },
      { type: 'comment', content: 'Unde ați găsit cea mai bună bandă pentru burtica?', likes: 8, time: '5h' },
      { type: 'share', content: 'Partajat: "Ghidul de mărimi BellyBoom"', likes: 12, time: '1d' }
    ]
  };

  const handleSave = () => {
    // In a real app, this would update the user profile via API
    setIsEditing(false);
    // You could also update the user context here
  };

  const tabs = [
    { id: 'profile', label: 'Profilul Meu', icon: User },
    { id: 'bellycoins', label: 'BellyCoins', icon: Star },
    { id: 'community', label: 'Comunitate', icon: Users },
    { id: 'rewards', label: 'Recompense', icon: Gift },
    { id: 'activity', label: 'Activitate', icon: TrendingUp }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-coral to-emerald p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src={user?.avatar || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'} 
                alt={user?.name}
                className="w-20 h-20 rounded-full border-4 border-white/20 object-cover"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white text-coral rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{user?.name}</h1>
              <p className="opacity-90">{user?.email}</p>
              {user?.pregnancyWeek && (
                <div className="flex items-center space-x-2 mt-2">
                  <Baby className="w-4 h-4" />
                  <span>Săptămâna {user.pregnancyWeek}</span>
                  <Crown className="w-4 h-4 text-yellow-300" />
                  <span>{userStats.level}</span>
                </div>
              )}
            </div>
            
            <div className="text-right">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{userStats.posts}</div>
                  <div className="text-sm opacity-80">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{userStats.followers}</div>
                  <div className="text-sm opacity-80">Urmăritori</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{userStats.points}</div>
                  <div className="text-sm opacity-80">Puncte</div>
                </div>
              </div>
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
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-charcoal">Informații Personale</h2>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-coral text-white rounded-xl hover:bg-coral/90 transition-colors"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  <span>{isEditing ? 'Salvează' : 'Editează'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-charcoal flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-coral" />
                    Contact
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal/70 mb-2">Număr telefon</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-coral"
                        placeholder="ex: +40 721 123 456"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-sand/30 rounded-xl">
                        {profileData.phone || 'Nu este setat'}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal/70 mb-2">WhatsApp</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.whatsapp}
                        onChange={(e) => setProfileData({...profileData, whatsapp: e.target.value})}
                        className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-coral"
                        placeholder="ex: +40 721 123 456"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <div className="px-4 py-3 bg-sand/30 rounded-xl flex-1">
                          {profileData.whatsapp || 'Nu este setat'}
                        </div>
                        {profileData.whatsapp && (
                          <button className="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-charcoal flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-emerald" />
                    Detalii Personale
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal/70 mb-2">Orașul</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.city}
                        onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                        className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-coral"
                        placeholder="ex: București"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-sand/30 rounded-xl">
                        {profileData.city || 'Nu este setat'}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal/70 mb-2">Data nașterii</label>
                    {isEditing ? (
                      <input
                        type="date"
                        value={profileData.dueDate}
                        onChange={(e) => setProfileData({...profileData, dueDate: e.target.value})}
                        className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-coral"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-sand/30 rounded-xl">
                        {profileData.dueDate || 'Nu este setată'}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-2">Bio</label>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-coral resize-none"
                    placeholder="Spune-ne puțin despre tine..."
                  />
                ) : (
                  <div className="px-4 py-3 bg-sand/30 rounded-xl">
                    {profileData.bio}
                  </div>
                )}
              </div>

              {/* Badges */}
              <div>
                <h3 className="font-semibold text-charcoal mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-coral" />
                  Badge-uri Câștigate
                </h3>
                <div className="flex flex-wrap gap-2">
                  {userStats.badges.map((badge, index) => (
                    <div key={index} className="px-3 py-1 bg-gradient-to-r from-coral/20 to-emerald/20 border border-coral/30 rounded-full text-sm font-medium text-charcoal">
                      🏆 {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Community Tab */}
          {activeTab === 'community' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-charcoal mb-2">Community Features</h2>
                <p className="text-charcoal/70">Conectează-te cu alte mamici și împărtășește experiența ta!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-coral/10 to-coral/5 rounded-2xl p-6 border border-coral/20">
                  <h3 className="font-bold text-charcoal mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-coral" />
                    Mamici din Orașul Tău
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">Găsește mamici din {profileData.city || 'orașul tău'} și organizați întâlniri!</p>
                  <button className="w-full bg-coral text-white py-2 rounded-xl font-semibold hover:bg-coral/90">
                    Explorează
                  </button>
                </div>

                <div className="bg-gradient-to-br from-emerald/10 to-emerald/5 rounded-2xl p-6 border border-emerald/20">
                  <h3 className="font-bold text-charcoal mb-3 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-emerald" />
                    WhatsApp Groups
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">Alătură-te grupurilor pe săptămâni de sarcină!</p>
                  <button className="w-full bg-emerald text-white py-2 rounded-xl font-semibold hover:bg-emerald/90">
                    Grupuri
                  </button>
                </div>
              </div>

              <div className="bg-sand/30 rounded-2xl p-6">
                <h3 className="font-bold text-charcoal mb-4">📝 Coming Soon: Community Blog</h3>
                <p className="text-charcoal/70 mb-4">În curând vei putea:</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li>• Scrie articole despre experiența ta</li>
                  <li>• Împărtășește sfaturi și trucuri</li>
                  <li>• Comentează și interacționează cu alte mamici</li>
                  <li>• Câștigă puncte pentru activitate</li>
                </ul>
              </div>
            </div>
          )}

          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-charcoal mb-2">Sistem de Recompense</h2>
                <p className="text-charcoal/70">Câștigă puncte și primește reduceri exclusive!</p>
              </div>

              {/* Current Level */}
              <div className="bg-gradient-to-r from-coral/10 to-emerald/10 rounded-2xl p-6 border border-coral/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Crown className="w-8 h-8 text-coral" />
                    <div>
                      <h3 className="font-bold text-charcoal">{userStats.level}</h3>
                      <p className="text-charcoal/70 text-sm">{userStats.points} puncte</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald">Level 3</div>
                    <div className="text-sm text-charcoal/70">150 puncte până la Level 4</div>
                  </div>
                </div>
                <div className="w-full bg-sand rounded-full h-3">
                  <div className="bg-gradient-to-r from-coral to-emerald h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              {/* Ways to Earn */}
              <div>
                <h3 className="font-bold text-charcoal mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-coral" />
                  Cum Câștigi Puncte
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-sand rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <Tag className="w-6 h-6 text-coral" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Tag 3 Prietene</h4>
                        <p className="text-sm text-charcoal/70">+50 puncte per tag</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-sand rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <Star className="w-6 h-6 text-emerald" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Review Produs</h4>
                        <p className="text-sm text-charcoal/70">+25 puncte</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-sand rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-6 h-6 text-coral" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Share pe Social</h4>
                        <p className="text-sm text-charcoal/70">+30 puncte</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-sand rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <Gift className="w-6 h-6 text-emerald" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Comandă Finalizată</h4>
                        <p className="text-sm text-charcoal/70">+100 puncte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Available Rewards */}
              <div>
                <h3 className="font-bold text-charcoal mb-4">🎁 Recompense Disponibile</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white border border-sand rounded-xl">
                    <div>
                      <h4 className="font-semibold text-charcoal">Reducere 10%</h4>
                      <p className="text-sm text-charcoal/70">Pentru următoarea comandă</p>
                    </div>
                    <div className="text-right">
                      <div className="text-coral font-bold">500 puncte</div>
                      <button className="px-4 py-1 bg-coral text-white text-sm rounded-lg hover:bg-coral/90">
                        Revendică
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-sand rounded-xl">
                    <div>
                      <h4 className="font-semibold text-charcoal">Produs Gratuit</h4>
                      <p className="text-sm text-charcoal/70">La alegere din colecția Basic</p>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald font-bold">1000 puncte</div>
                      <button 
                        onClick={() => setShowRewards(true)}
                        className="px-4 py-1 bg-emerald text-white text-sm rounded-lg hover:bg-emerald/90"
                      >
                        Vezi toate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BellyCoins Tab */}
          {activeTab === 'bellycoins' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-coral to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-charcoal mb-2">BellyCoins Dashboard</h2>
                <p className="text-charcoal/70">Urmărește-ți progresul și câștigă recompense incredibile!</p>
              </div>

              {/* Current Points */}
              <div className="bg-gradient-to-r from-coral/10 to-emerald/10 rounded-3xl p-8 border-2 border-coral/20">
                <div className="text-center">
                  <div className="text-6xl font-bold text-charcoal mb-2">2,847</div>
                  <div className="text-xl text-charcoal/70 mb-4">BellyCoins Total</div>
                  
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <div className="bg-white/60 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-coral">Level 3</div>
                      <div className="text-sm text-charcoal/70">Style Maven</div>
                    </div>
                    <div className="bg-white/60 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-emerald">1,153</div>
                      <div className="text-sm text-charcoal/70">Până la Level 4</div>
                    </div>
                    <div className="bg-white/60 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-purple-500">85%</div>
                      <div className="text-sm text-charcoal/70">Progres</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-sand rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-coral mr-2" />
                    Acțiuni Rapide
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 bg-coral/10 rounded-xl hover:bg-coral/20 transition-colors">
                      <div>
                        <span className="font-medium text-charcoal">Instagram Feed</span>
                        <div className="text-xs text-charcoal/60">Max 2 postări/zi</div>
                      </div>
                      <span className="text-coral font-bold">+15 puncte</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-purple/10 rounded-xl hover:bg-purple/20 transition-colors">
                      <div>
                        <span className="font-medium text-charcoal">Instagram Story</span>
                        <div className="text-xs text-charcoal/60">Max 5 story-uri/zi</div>
                      </div>
                      <span className="text-purple font-bold">+8 puncte</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-emerald/10 rounded-xl hover:bg-emerald/20 transition-colors">
                      <div>
                        <span className="font-medium text-charcoal">Tag 3 prietene</span>
                        <div className="text-xs text-charcoal/60">Max 3 tag-uri/zi</div>
                      </div>
                      <span className="text-emerald font-bold">+10 puncte</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-blue/10 rounded-xl hover:bg-blue/20 transition-colors">
                      <div>
                        <span className="font-medium text-charcoal">#BellyBoom Hashtag</span>
                        <div className="text-xs text-charcoal/60">Fără limită</div>
                      </div>
                      <span className="text-blue-600 font-bold">+5 puncte</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-yellow/10 rounded-xl hover:bg-yellow/20 transition-colors">
                      <div>
                        <span className="font-medium text-charcoal">TikTok cu #BellyBoom</span>
                        <div className="text-xs text-charcoal/60">Fără limită</div>
                      </div>
                      <span className="text-yellow-600 font-bold">+25 puncte</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white border border-sand rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                    <Gift className="w-6 h-6 text-emerald mr-2" />
                    Recompense Disponibile
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-sand/30 rounded-xl">
                      <div>
                        <div className="font-medium text-charcoal">Reducere 30%</div>
                        <div className="text-sm text-charcoal/70">500 puncte</div>
                      </div>
                      <button className="px-4 py-2 bg-coral text-white rounded-lg text-sm font-bold hover:bg-coral/90">
                        Revendică
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-sand/30 rounded-xl">
                      <div>
                        <div className="font-medium text-charcoal">Produs Gratuit</div>
                        <div className="text-sm text-charcoal/70">1,500 puncte</div>
                      </div>
                      <button className="px-4 py-2 bg-emerald text-white rounded-lg text-sm font-bold hover:bg-emerald/90">
                        Revendică
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-sand/30 rounded-xl opacity-50">
                      <div>
                        <div className="font-medium text-charcoal">Ieșire în Oraș</div>
                        <div className="text-sm text-charcoal/70">3,000 puncte</div>
                      </div>
                      <span className="text-xs text-charcoal/50">153 puncte lipsă</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Tracking */}
              <div className="bg-gradient-to-r from-purple/10 to-pink/10 rounded-2xl p-6 border border-purple/20">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <Trophy className="w-6 h-6 text-purple-500 mr-2" />
                  Progres Către Următoarea Recompensă
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-charcoal">Ieșire în Oraș (SPA + Restaurant)</span>
                    <span className="text-coral font-bold">3,000 puncte</span>
                  </div>
                  
                  <div className="w-full bg-sand rounded-full h-4">
                    <div className="bg-gradient-to-r from-coral to-emerald h-4 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>2,847 / 3,000 puncte</span>
                    <span>153 puncte rămase</span>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>💡 Sfat:</strong> Fă 10 postări cu #BellyBoom + 1 TikTok pentru a ajunge la 3,000 puncte!
                    </p>
                  </div>
                </div>
              </div>

              {/* Coming Soon Section */}
              <div className="bg-gradient-to-r from-blue/10 to-cyan/10 rounded-2xl p-6 border border-blue/20">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <Baby className="w-6 h-6 text-blue-500 mr-2" />
                  Coming Soon: Bebeluși & Mamici
                </h3>
                <p className="text-charcoal/70 mb-4">
                  În curând vei putea câștiga puncte și pentru conținut despre bebeluși! 
                  Articole, sfaturi, poze cu bebelușul tău - totul va fi răsplătit!
                </p>
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Baby className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">Bebeluși & Mamici</div>
                      <div className="text-sm text-charcoal/70">Secțiunea dedicată pentru mamici cu bebeluși</div>
                    </div>
                    <div className="ml-auto">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-bold">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-charcoal">Activitatea Ta Recentă</h2>
              
              <div className="space-y-4">
                {userStats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-sand/30 rounded-xl">
                    <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-bold">
                      {activity.type === 'post' ? '📝' : activity.type === 'comment' ? '💬' : '📤'}
                    </div>
                    <div className="flex-1">
                      <p className="text-charcoal">{activity.content}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-charcoal/70">
                        <span className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{activity.likes}</span>
                        </span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rewards System Modal */}
        {showRewards && (
          <RewardsSystem onClose={() => setShowRewards(false)} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
