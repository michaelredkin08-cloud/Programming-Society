import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Code2, Calendar, Users, Mail, Info, Home, MessageSquare, LogOut, UserCheck } from 'lucide-react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { user, signOut, isAtuEmail } = useAuth();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/committee', label: 'Committee', icon: Users },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-900">
      <nav className="sticky top-0 z-50 bg-slate-900/85 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white group-hover:bg-emerald-500 transition-all shadow-md shadow-emerald-950/40">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold tracking-tight text-lg text-white group-hover:text-emerald-400 transition-colors block leading-none">
                  ATU Programming
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Sligo Society</span>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                      isActive 
                        ? 'text-emerald-400 bg-slate-800/80 font-semibold border border-slate-700/50' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 text-emerald-400" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
            
            {/* Dynamic Auth Status */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl animate-fade-in">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="max-w-[150px] truncate">{user.displayName || user.email}</span>
                    {isAtuEmail && (
                      <span className="ml-1 px-1.5 py-0.5 bg-emerald-950 text-emerald-400 text-[10px] rounded border border-emerald-800 font-bold">
                        Member
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold px-3.5 py-2 rounded-xl text-sm transition-all flex items-center gap-1.5"
                    title="Sign Out"
                  >
                    <LogOut className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-sm transition-all shadow-md shadow-emerald-950/30"
                >
                  Join Us
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-slate-950 border-t border-slate-900 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ATU Sligo Programming Society.
          </p>
          <div className="flex gap-6 text-sm font-semibold text-slate-400">
            <a href="https://discord.gg/YOUR_INVITE_LINK" target="_blank" rel="noreferrer" className="hover:text-[#5865F2] transition-colors flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" /> Discord
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}