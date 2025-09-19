import React, { useState } from 'react';
import { X, Mail, Eye, EyeOff, Loader, Heart, Baby } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const AuthModalNew: React.FC = () => {
  const { isAuthOpen, closeAuth, signInWithGoogle, signInWithFacebook, signInWithEmail, signUpWithEmail, isLoading, user } = useShop();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  if (!isAuthOpen) return null;

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      if (mode === 'signup') {
        await signUpWithEmail(formData.name, formData.email, formData.password);
      } else {
        await signInWithEmail(formData.email, formData.password);
      }
    } catch (err: any) {
      setError(err.message || 'A apărut o eroare');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4 relative border border-sand">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={closeAuth}
            className="absolute top-4 right-4 p-2 rounded-full bg-sand hover:bg-sand/70 transition-colors text-charcoal"
            aria-label="Închide"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-coral to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
              <Baby className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-charcoal">
              {mode === 'signin' ? 'Bună, frumoaso!' : 'Alătură-te familiei!'}
            </h2>
            <p className="text-charcoal/70 mt-2">
              {mode === 'signin' 
                ? 'Conectează-te pentru o experiență personalizată' 
                : 'Începe călătoria ta stylish cu BellyBoom'
              }
            </p>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3 mb-6">
          <button 
            onClick={signInWithGoogle}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white border-2 border-sand text-charcoal font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" 
              alt="Google" 
              className="h-5 w-5" 
            />
            <span>Continuă cu Google</span>
            {isLoading && <Loader className="w-4 h-4 animate-spin" />}
          </button>

          <button 
            onClick={signInWithFacebook}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
              alt="Facebook" 
              className="h-5 w-5" 
            />
            <span>Continuă cu Facebook</span>
            {isLoading && <Loader className="w-4 h-4 animate-spin" />}
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-sand"></div>
          <span className="flex-shrink mx-4 text-charcoal/60 text-sm bg-white px-2">sau</span>
          <div className="flex-grow border-t border-sand"></div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Numele tău</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white border border-sand rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:border-coral transition-colors"
                placeholder="ex: Maria Popescu"
                required
              />
            </div>
          )}

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

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Parola</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-white border border-sand rounded-2xl px-4 py-3 pr-12 text-charcoal focus:outline-none focus:border-coral transition-colors"
                placeholder="Minim 6 caractere"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-charcoal/60 hover:text-charcoal"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-3">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-coral to-emerald text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Mail className="w-5 h-5" />
                <span>{mode === 'signin' ? 'Conectează-te' : 'Creează cont'}</span>
              </>
            )}
          </button>
        </form>

        {/* Mode Toggle */}
        <div className="text-center mt-6 pt-4 border-t border-sand">
          <p className="text-charcoal/70 text-sm">
            {mode === 'signin' ? 'Nu ai cont încă?' : 'Ai deja cont?'}
            <button
              onClick={() => {
                setMode(mode === 'signin' ? 'signup' : 'signin');
                setError('');
                setFormData({ name: '', email: '', password: '' });
              }}
              className="text-coral hover:text-coral/80 font-semibold ml-2"
            >
              {mode === 'signin' ? 'Creează unul acum' : 'Conectează-te'}
            </button>
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-6 bg-gradient-to-r from-coral/5 to-emerald/5 rounded-2xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="w-4 h-4 text-coral" />
            <span className="text-charcoal font-medium text-sm">De ce să te conectezi?</span>
          </div>
          <ul className="text-charcoal/70 text-xs space-y-1">
            <li>• Recomandări personalizate pe măsura sarcinii tale</li>
            <li>• Salvează produsele favorite pentru mai târziu</li>
            <li>• Urmărește comenzile și primește notificări</li>
            <li>• Acces la oferte exclusive pentru membri</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthModalNew;
