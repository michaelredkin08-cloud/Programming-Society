import { Terminal, BookOpen, Users, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full mb-3">
          <BookOpen className="w-3.5 h-3.5" /> Our Mission
        </span>
        <h1 className="text-4xl font-extrabold text-white mb-4">About the Society</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Empowering software developers at Atlantic Technological University Sligo to build real-world skills, collaborate on open-source software, and connect with the tech industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <div className="w-10 h-10 bg-emerald-950 border border-emerald-800 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
            <Terminal className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white mb-3">What We Do</h2>
          <p className="text-slate-400 leading-relaxed text-sm">
            We host weekly coding workshops, hands-on hackathons, technical interview prep sessions, and casual social meetups. Whether you want to master Python, dive into cloud architecture, or build web apps, this is your community.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <div className="w-10 h-10 bg-emerald-950 border border-emerald-800 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white mb-3">Who Can Join?</h2>
          <p className="text-slate-400 leading-relaxed text-sm">
            Every student at ATU Sligo! From first-year Software Development undergraduates to experienced computing students and hobbyists from other courses. No prior programming experience is required for our beginner-friendly events.
          </p>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center max-w-3xl mx-auto">
        <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
        <h2 className="text-2xl font-bold text-white mb-3">Code of Conduct</h2>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Our society is dedicated to providing a safe, inclusive, and harassment-free experience for everyone, regardless of background or experience level.
        </p>
        <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-800 px-4 py-2 rounded-full">
          Respect • Collaboration • Curiosity
        </span>
      </div>
    </div>
  );
}