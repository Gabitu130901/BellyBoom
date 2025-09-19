import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Heart, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ivory via-white to-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-coral/10 rounded-full text-coral text-sm font-medium border border-coral/20 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Suntem Aici Pentru Tine
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-charcoal">
            Hai să Vorbim!
          </h2>
          
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Echipa noastră de experți în maternitate este aici să te ajute cu orice întrebare. 
            De la sfaturi de stil la găsirea mărimii perfecte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur rounded-3xl p-8 border border-sand shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Informații de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Telefon</h4>
                    <p className="text-charcoal/70">+40 721 123 456</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Email</h4>
                    <p className="text-charcoal/70">hello@bellyboom.ro</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sand rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Adresă</h4>
                    <p className="text-charcoal/70">Str. Maternității 25, București</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Program</h4>
                    <p className="text-charcoal/70">Luni-Vineri: 9:00-18:00</p>
                    <p className="text-charcoal/70">Sâmbătă: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-gradient-to-br from-coral/10 to-emerald/10 rounded-3xl p-8 border border-coral/20">
              <h3 className="text-xl font-bold text-charcoal mb-4">Suport Rapid</h3>
              <p className="text-charcoal/70 mb-6">
                Ai nevoie de ajutor urgent? Folosește chat-ul nostru live pentru răspunsuri imediate!
              </p>
              <button className="flex items-center space-x-2 bg-coral text-white px-6 py-3 rounded-2xl font-semibold hover:bg-coral/90 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span>Chat Live</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 border border-sand shadow-lg">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Trimite-ne un Mesaj</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Nume</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-sand rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:border-coral transition-colors"
                    placeholder="Numele tău"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-sand rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:border-coral transition-colors"
                    placeholder="email@exemplu.ro"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Subiect</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-sand rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:border-coral transition-colors"
                  placeholder="Despre ce vrei să vorbești?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Mesaj</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-white border border-sand rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:border-coral transition-colors resize-none"
                  placeholder="Scrie-ne mesajul tău aici..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-coral to-emerald text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Trimite Mesajul</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-charcoal mb-8">Întrebări Frecvente</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 rounded-2xl p-6 border border-sand">
              <h4 className="font-semibold text-charcoal mb-2">Livrare & Retur</h4>
              <p className="text-charcoal/70 text-sm">Informații despre livrare și politica de retur</p>
            </div>
            <div className="bg-white/60 rounded-2xl p-6 border border-sand">
              <h4 className="font-semibold text-charcoal mb-2">Ghid Mărimi</h4>
              <p className="text-charcoal/70 text-sm">Cum să alegi mărimea potrivită pentru tine</p>
            </div>
            <div className="bg-white/60 rounded-2xl p-6 border border-sand">
              <h4 className="font-semibold text-charcoal mb-2">Îngrijire Produse</h4>
              <p className="text-charcoal/70 text-sm">Sfaturi pentru întreținerea hainelor tale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
