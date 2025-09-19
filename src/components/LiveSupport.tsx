import React, { useState } from 'react';
import { 
  MessageCircle, Phone, Mail, Send, X, Clock, Users, 
  Heart, Baby, Sparkles, CheckCircle, AlertCircle, 
  User, MapPin, Calendar, Zap, Headphones
} from 'lucide-react';

const LiveSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('whatsapp');
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    phone: '',
    pregnancyWeek: '',
    subject: 'Întrebare generală',
    message: '',
    urgency: 'normal'
  });

  const supportTeam = [
    {
      name: 'Alexandra',
      role: 'Expert Maternitate & Styling',
      whatsapp: '+40722123456', // Înlocuiește cu numărul tău real
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      specialization: 'Sizing, mărimi, sfaturi de styling',
      available: true,
      responseTime: '< 5 min'
    },
    {
      name: 'Maria',
      role: 'Business Partner & Customer Care',
      whatsapp: '+40723987654', // Înlocuiește cu numărul partenerului
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      specialization: 'Comenzi, livrări, probleme tehnice',
      available: true,
      responseTime: '< 10 min'
    }
  ];

  const quickQuestions = [
    'Ce mărime să comand pentru săptămâna mea?',
    'Când ajunge comanda mea?',
    'Cum pot schimba mărimea?',
    'Ce material recomandați pentru sezonul cald?',
    'Avem reduceri pentru mame cu mai multe copii?',
    'Pot returna produsul după naștere?'
  ];

  const subjectOptions = [
    'Întrebare generală',
    'Sizing & Mărimi',
    'Comanda mea',
    'Retur / Schimb',
    'Problemă tehnică',
    'Sfaturi styling',
    'Colaborare / Partnership'
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Creează conținutul emailului
    const emailBody = `
Nume: ${emailForm.name}
Email: ${emailForm.email}
Telefon: ${emailForm.phone}
Săptămâna sarcinii: ${emailForm.pregnancyWeek || 'Nu este specificată'}
Subiect: ${emailForm.subject}
Urgența: ${emailForm.urgency}

Mesaj:
${emailForm.message}

---
Trimis de pe BellyBoom.ro - Live Support Form
Data: ${new Date().toLocaleString('ro-RO')}
    `;

    // Construiește link-ul mailto cu CC
    const mailtoLink = `mailto:bellyboom@yahoo.com?cc=alexandra.support@bellyboom.ro,maria.support@bellyboom.ro&subject=${encodeURIComponent(
      `[BellyBoom Support] ${emailForm.subject} - ${emailForm.name}`
    )}&body=${encodeURIComponent(emailBody)}`;

    // Deschide clientul de email
    window.location.href = mailtoLink;
    
    // Reset form
    setEmailForm({
      name: '',
      email: '',
      phone: '',
      pregnancyWeek: '',
      subject: 'Întrebare generală',
      message: '',
      urgency: 'normal'
    });

    // Show success message
    alert('Clientul de email s-a deschis! Verifică și trimite emailul. 📧');
  };

  const openWhatsApp = (member: typeof supportTeam[0], quickMessage?: string) => {
    const defaultMessage = quickMessage || 
      `Bună! Am o întrebare despre produsele BellyBoom. Poți să mă ajuți? 😊`;
    
    const whatsappUrl = `https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-coral to-emerald text-white p-4 rounded-full shadow-2xl hover:shadow-coral/25 transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        
        {/* Indicator notification */}
        <div className="absolute -top-2 -left-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
          Live
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-sand overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-coral to-emerald text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Headphones className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Asistență Live BellyBoom</h3>
              <p className="text-sm opacity-90">Experți în maternitate online acum! 💕</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-sand">
        <button
          onClick={() => setActiveTab('whatsapp')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'whatsapp'
              ? 'text-emerald-600 bg-emerald-50 border-b-2 border-emerald-500'
              : 'text-charcoal/70 hover:text-emerald-600'
          }`}
        >
          <MessageCircle className="w-4 h-4 inline mr-2" />
          WhatsApp
        </button>
        <button
          onClick={() => setActiveTab('email')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'email'
              ? 'text-coral bg-coral/10 border-b-2 border-coral'
              : 'text-charcoal/70 hover:text-coral'
          }`}
        >
          <Mail className="w-4 h-4 inline mr-2" />
          Email
        </button>
      </div>

      <div className="p-4 max-h-96 overflow-y-auto">
        {/* WhatsApp Tab */}
        {activeTab === 'whatsapp' && (
          <div className="space-y-4">
            <div className="text-center bg-emerald/5 rounded-2xl p-4 border border-emerald/20">
              <MessageCircle className="w-12 h-12 text-emerald mx-auto mb-3" />
              <h4 className="font-bold text-charcoal mb-2">Chat Direct cu Expertele Noastre!</h4>
              <p className="text-sm text-charcoal/70 mb-3">
                Răspuns <strong>în maxim 5-10 minute</strong> - de la experți în maternitate! 🤱
              </p>
            </div>

            {/* Support Team */}
            <div className="space-y-3">
              {supportTeam.map((member, index) => (
                <div key={index} className="bg-sand/30 rounded-2xl p-4 border border-sand">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-emerald/30"
                      />
                      {member.available && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-charcoal">{member.name}</h5>
                      <p className="text-xs text-charcoal/70">{member.role}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-3 h-3 text-emerald" />
                        <span className="text-xs text-emerald font-medium">{member.responseTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-charcoal/80 mb-3">{member.specialization}</p>
                  
                  <button
                    onClick={() => openWhatsApp(member)}
                    className="w-full bg-emerald hover:bg-emerald/90 text-white py-2 px-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Scrie pe WhatsApp</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="mt-6">
              <h5 className="font-semibold text-charcoal mb-3 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-coral" />
                Întrebări Frecvente - Click Rapid:
              </h5>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => openWhatsApp(supportTeam[0], question)}
                    className="w-full text-left p-3 bg-white rounded-xl border border-sand hover:border-emerald/30 hover:bg-emerald/5 transition-all text-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Email Tab */}
        {activeTab === 'email' && (
          <div className="space-y-4">
            <div className="text-center bg-coral/5 rounded-2xl p-4 border border-coral/20">
              <Mail className="w-12 h-12 text-coral mx-auto mb-3" />
              <h4 className="font-bold text-charcoal mb-2">Trimite Email Detaliat</h4>
              <p className="text-sm text-charcoal/70">
                Pentru întrebări complexe sau documentație. 
                <br />Email trimis automat către <strong>bellyboom@yahoo.com</strong>
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Numele tău *"
                  value={emailForm.name}
                  onChange={(e) => setEmailForm({...emailForm, name: e.target.value})}
                  className="w-full px-3 py-2 border border-sand rounded-xl focus:outline-none focus:border-coral text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({...emailForm, email: e.target.value})}
                  className="w-full px-3 py-2 border border-sand rounded-xl focus:outline-none focus:border-coral text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Telefon (opțional)"
                  value={emailForm.phone}
                  onChange={(e) => setEmailForm({...emailForm, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-sand rounded-xl focus:outline-none focus:border-coral text-sm"
                />
                <input
                  type="number"
                  placeholder="Săptămâna sarcinii"
                  min="1"
                  max="42"
                  value={emailForm.pregnancyWeek}
                  onChange={(e) => setEmailForm({...emailForm, pregnancyWeek: e.target.value})}
                  className="w-full px-3 py-2 border border-sand rounded-xl focus:outline-none focus:border-coral text-sm"
                />
              </div>

              <select
                value={emailForm.subject}
                onChange={(e) => setEmailForm({...emailForm, subject: e.target.value})}
                className="w-full px-3 py-2 border border-sand rounded-xl focus:outline-none focus:border-coral text-sm"
              >
                {subjectOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>

              <div className="flex items-center space-x-4 text-sm">
                <span className="text-charcoal/70">Urgență:</span>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="normal"
                    checked={emailForm.urgency === 'normal'}
                    onChange={(e) => setEmailForm({...emailForm, urgency: e.target.value})}
                    className="mr-1"
                  />
                  Normal
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="urgent"
                    checked={emailForm.urgency === 'urgent'}
                    onChange={(e) => setEmailForm({...emailForm, urgency: e.target.value})}
                    className="mr-1"
                  />
                  <span className="text-coral">Urgent</span>
                </label>
              </div>

              <textarea
                placeholder="Descrie-ne întrebarea ta în detaliu... Cu cât mai multe informații, cu atât mai bine te putem ajuta! 💕"
                value={emailForm.message}
                onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 border border-sand rounded-xl focus:outline-none focus:border-coral text-sm resize-none"
                required
              />

              <button
                type="submit"
                disabled={!emailForm.name || !emailForm.email || !emailForm.message}
                className="w-full bg-gradient-to-r from-coral to-emerald text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Trimite Email</span>
              </button>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div className="text-xs text-blue-700">
                    <strong>Info:</strong> Emailul se va deschide în aplicația ta de email cu toate detaliile completate.
                    Verifică și apasă Send pentru a trimite.
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-sand/30 px-4 py-3 border-t border-sand">
        <div className="flex items-center justify-center space-x-2 text-xs text-charcoal/70">
          <Heart className="w-3 h-3 text-coral" />
          <span>Support cu dragoste pentru mamici</span>
          <Baby className="w-3 h-3 text-emerald" />
        </div>
      </div>
    </div>
  );
};

export default LiveSupport;
