// Mock authentication service - în production ar fi conectat la Firebase, Supabase, etc.

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider: 'google' | 'facebook' | 'email';
  pregnancyWeek?: number;
  dueDate?: string;
  phone?: string;
  whatsapp?: string;
  bio?: string;
  city?: string;
  instagramHandle?: string;
  favoriteStyles?: string[];
  points?: number;
  level?: string;
  badges?: string[];
}

class AuthService {
  private currentUser: User | null = null;
  private listeners: ((user: User | null) => void)[] = [];

  constructor() {
    // Check for stored user on init
    const storedUser = localStorage.getItem('bellyboom_user');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  // Add listener for auth state changes
  onAuthStateChange(callback: (user: User | null) => void) {
    this.listeners.push(callback);
    // Call immediately with current state
    callback(this.currentUser);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  // Notify all listeners of auth state change
  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentUser));
  }

  // Google Sign In (Mock)
  async signInWithGoogle(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user: User = {
          id: 'google_' + Date.now(),
          name: 'Maria Popescu',
          email: 'maria.popescu@gmail.com',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
          provider: 'google',
          pregnancyWeek: 24,
          dueDate: '2024-06-15',
          bio: 'Mamică fericită în căutarea stilului perfect! 💕',
          city: 'București',
          points: 850,
          level: 'Style Maven',
          badges: ['Early Adopter', 'Community Helper', 'Trendsetter'],
          favoriteStyles: ['Casual', 'Elegant']
        };
        
        this.currentUser = user;
        localStorage.setItem('bellyboom_user', JSON.stringify(user));
        this.notifyListeners();
        resolve(user);
      }, 1000);
    });
  }

  // Facebook Sign In (Mock)
  async signInWithFacebook(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user: User = {
          id: 'facebook_' + Date.now(),
          name: 'Ana Ionescu',
          email: 'ana.ionescu@yahoo.com',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
          provider: 'facebook',
          pregnancyWeek: 18,
          dueDate: '2024-07-20'
        };
        
        this.currentUser = user;
        localStorage.setItem('bellyboom_user', JSON.stringify(user));
        this.notifyListeners();
        resolve(user);
      }, 1000);
    });
  }

  // Email Sign In (Mock)
  async signInWithEmail(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password.length >= 6) {
          const user: User = {
            id: 'email_' + Date.now(),
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email: email,
            provider: 'email'
          };
          
          this.currentUser = user;
          localStorage.setItem('bellyboom_user', JSON.stringify(user));
          this.notifyListeners();
          resolve(user);
        } else {
          reject(new Error('Email sau parolă invalidă'));
        }
      }, 1000);
    });
  }

  // Email Sign Up (Mock)
  async signUpWithEmail(name: string, email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password.length >= 6) {
          const user: User = {
            id: 'email_' + Date.now(),
            name: name,
            email: email,
            provider: 'email'
          };
          
          this.currentUser = user;
          localStorage.setItem('bellyboom_user', JSON.stringify(user));
          this.notifyListeners();
          resolve(user);
        } else {
          reject(new Error('Toate câmpurile sunt obligatorii și parola trebuie să aibă minim 6 caractere'));
        }
      }, 1000);
    });
  }

  // Sign Out
  async signOut(): Promise<void> {
    this.currentUser = null;
    localStorage.removeItem('bellyboom_user');
    this.notifyListeners();
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Update user profile
  async updateProfile(updates: Partial<User>): Promise<User> {
    if (!this.currentUser) {
      throw new Error('Nu ești autentificat');
    }

    const updatedUser = { ...this.currentUser, ...updates };
    this.currentUser = updatedUser;
    localStorage.setItem('bellyboom_user', JSON.stringify(updatedUser));
    this.notifyListeners();
    
    return updatedUser;
  }

  // Check if user is signed in
  isSignedIn(): boolean {
    return this.currentUser !== null;
  }
}

// Export singleton instance
export const authService = new AuthService();
