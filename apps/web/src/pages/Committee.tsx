import { Users, Mail } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  course: string;
  year: string;
  bio: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const COMMITTEE_MEMBERS: Member[] = [
  {
    name: 'Michael',
    role: 'Society Holder & Tech Officer',
    course: 'BSc in Software Development',
    year: 'Year 1',
    bio: 'Building the society web platform and organizing technical workshops. Passionate about full-stack software development.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'society@atu.ie',
  },
  {
    name: 'Position Open',
    role: 'Vice President / Events Officer',
    course: 'ATU Computing',
    year: '2026 / 2027 Academic Year',
    bio: 'Role open for upcoming election during the society AGM. Get involved to gain leadership experience!',
  },
  {
    name: 'Position Open',
    role: 'Public Relations & Socials',
    course: 'ATU Computing',
    year: '2026 / 2027 Academic Year',
    bio: 'Responsible for Discord community moderation, event promotion, and keeping members informed.',
  },
];

export default function Committee() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full mb-3">
          <Users className="w-3.5 h-3.5" /> Leadership
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Meet the Committee
        </h1>
        <p className="text-slate-400 text-base max-w-2xl">
          The student team responsible for organizing events, maintaining society infrastructure, and representing programming students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMMITTEE_MEMBERS.map((member, index) => (
          <div key={index} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-lg mb-4">
                {member.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-white mb-0.5">{member.name}</h2>
              <p className="text-emerald-400 font-medium text-sm mb-2">{member.role}</p>
              <p className="text-slate-500 text-xs mb-4">{member.course} • {member.year}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.bio}</p>
            </div>

             <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              {member.github && (
                <a href={member.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              )}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}