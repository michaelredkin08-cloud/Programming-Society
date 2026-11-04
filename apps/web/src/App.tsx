import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md text-center border border-slate-700 bg-slate-800 p-8 rounded-xl shadow-lg">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full mb-4">
          Phase 0 — Setup Complete
        </span>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          ATU Sligo Programming Society
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Official website & web app project built by Michael.
        </p>
        <div className="text-xs text-slate-500 border-t border-slate-700 pt-4">
          Environment: Local Vite + React + TypeScript + Tailwind CSS
        </div>
      </div>
    </div>
  );
}