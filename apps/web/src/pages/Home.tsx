import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 rounded-full mb-6">
            Join Sligo's Next Gen of Developers
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Build, Learn, and Ship.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Welcome to the ATU Sligo Programming Society. We are a community of creators, 
            problem solvers, and builders. Open to all courses and skill levels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/events" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-all shadow-lg shadow-emerald-950/40">
              Explore Events
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-all border border-slate-700">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 border-t border-slate-800">
        <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-800/80 hover:border-slate-700 transition-all">
          <div className="w-12 h-12 bg-emerald-950/50 border border-emerald-800 rounded-xl flex items-center justify-center text-emerald-400 font-bold mb-6">
            &lt;/&gt;
          </div>
          <h3 className="text-xl font-bold mb-3 text-emerald-400">Weekly Workshops</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Hands-on sessions covering Web Dev, Python, cloud architectures, and Git setups.</p>
        </div>
        <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-800/80 hover:border-slate-700 transition-all">
          <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-800 rounded-xl flex items-center justify-center text-cyan-400 font-bold mb-6">
            []
          </div>
          <h3 className="text-xl font-bold mb-3 text-cyan-400">Collaborative Projects</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Form project teams, build real portfolios, and gain collaborative Git workspace experience.</p>
        </div>
        <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-800/80 hover:border-slate-700 transition-all">
          <div className="w-12 h-12 bg-purple-950/50 border border-purple-800 rounded-xl flex items-center justify-center text-purple-400 font-bold mb-6">
            #
          </div>
          <h3 className="text-xl font-bold mb-3 text-purple-400">Social Hangouts</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Connect with tech enthusiasts, grab some pizza at our meetups, and talk code.</p>
        </div>
      </section>
    </div>
  );
}