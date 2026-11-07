import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { updateProfile, deleteUser } from 'firebase/auth';
import { UserCheck, ShieldAlert, Trash2, ArrowLeft, CheckCircle2, User, Mail, Shield } from 'lucide-react';

export default function Profile() {
  const { user, isAtuEmail } = useAuth();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setDisplayName(user.displayName || '');
    }
  }, [user, navigate]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setError('');
    setMessage('');
    setLoading(true);

    try {
      await updateProfile(user, { displayName });
      setMessage('Profile updated successfully!');
    } catch (err: any) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    const confirmDelete = window.confirm(
      'Are you absolutely sure you want to delete your society account? This action is permanent and complies with your GDPR right to be forgotten.'
    );

    if (confirmDelete) {
      try {
        await deleteUser(user);
        navigate('/');
      } catch (err: any) {
        setError('For security reasons, please sign out and sign back in immediately before deleting your account.');
      }
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <div className="space-y-6">
        {/* Profile Details */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <h1 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Your Member Profile</h1>
          <p className="text-slate-400 text-xs mb-6">Manage your society credentials and account choices.</p>

          {message && (
            <div className="mb-6 p-3 bg-emerald-950/50 border border-emerald-800/80 rounded-xl flex items-center gap-2 text-emerald-300 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {error && (
            <div className="mb-6 p-3 bg-red-950/50 border border-red-800/80 rounded-xl flex items-center gap-2 text-red-300 text-xs">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Registered Email
              </label>
              <input
                type="text"
                disabled
                value={user.email || ''}
                className="w-full bg-slate-950 border border-slate-800/60 rounded-xl px-4 py-2.5 text-sm text-slate-500 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Verification Status
              </label>
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-xl text-sm">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">
                  {isAtuEmail ? 'Verified ATU Member Account' : 'Standard Guest Account'}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> Your Full Name
              </label>
              <input
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-md text-sm"
            >
              {loading ? 'Updating...' : 'Save Settings'}
            </button>
          </form>
        </div>

        {/* Danger Zone / GDPR Erasure Policy */}
        <div className="bg-red-950/20 border border-red-900/40 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Danger Zone</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                In compliance with EU GDPR legislation, you can permanently erase all accounts, data, and access histories linked to our system at any time.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-red-900/30 flex justify-end">
            <button
              onClick={handleDeleteAccount}
              className="bg-red-900/20 hover:bg-red-900 border border-red-800 text-red-200 hover:text-white font-semibold px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" /> Delete My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}