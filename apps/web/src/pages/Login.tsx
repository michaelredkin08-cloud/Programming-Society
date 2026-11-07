import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  updateProfile 
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { checkIsAtuEmail } from '../context/AuthContext';
import { Lock, Mail, User, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      if (isSignUp) {
        // Enforce ATU email domain rule upon registration
        if (!checkIsAtuEmail(email)) {
          throw new Error('Please use your official ATU student or staff email address (e.g., @atu.ie, @mail.atu.ie).');
        }

        // Create Firebase Auth user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Update display name
        if (name) {
          await updateProfile(userCredential.user, { displayName: name });
        }

        // Send verification email
        await sendEmailVerification(userCredential.user);

        setMessage('Account created successfully! Please check your ATU inbox to verify your email address before logging in.');
        setIsSignUp(false);
        setEmail('');
        setPassword('');
        setName('');
      } else {
        // Log in existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        // Check if verified
        if (!userCredential.user.emailVerified) {
          setError('Please verify your email address. Check your ATU inbox for the verification link.');
          setLoading(false);
          return;
        }
        
        navigate('/');
      }
    } catch (err: any) {
      if (err.code === 'auth/weak-password') {
        setError('Password must be at least 6 characters long.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email is already associated with an account.');
      } else if (err.code === 'auth/invalid-credential') {
        setError('Incorrect email or password.');
      } else {
        setError(err.message || 'An error occurred during authentication.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
            {isSignUp ? 'Create Society Account' : 'Member Login'}
          </h1>
          <p className="text-slate-400 text-xs">
            {isSignUp 
              ? 'Use your official ATU email to unlock member features and RSVPs.' 
              : 'Sign in to access your member dashboard and event RSVPs.'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-950/50 border border-red-800/80 rounded-xl flex items-start gap-2.5 text-red-300 text-xs">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="mb-6 p-3 bg-emerald-950/50 border border-emerald-800/80 rounded-xl flex items-start gap-2.5 text-emerald-300 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Murphy"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">ATU Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="s1234567@mail.atu.ie"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
              />
            </div>
            {isSignUp && (
              <p className="text-[10px] text-slate-500 mt-1">Must be an active @atu.ie, @mail.atu.ie, or @itsligo.ie address.</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/30 text-sm"
          >
            {loading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <button onClick={() => { setIsSignUp(false); setError(''); setMessage(''); }} className="text-emerald-400 font-semibold hover:underline">
                Sign In
              </button>
            </p>
          ) : (
            <p>
              New student?{' '}
              <button onClick={() => { setIsSignUp(true); setError(''); setMessage(''); }} className="text-emerald-400 font-semibold hover:underline">
                Create an account
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}