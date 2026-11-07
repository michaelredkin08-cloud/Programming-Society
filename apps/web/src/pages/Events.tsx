import { Calendar as CalendarIcon, MapPin, Clock, Video, Tag } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  type: 'Workshop' | 'Social' | 'Hackathon';
  tags: string[];
}

const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Welcome & Intro to Web Development',
    description: 'Kickoff meeting for the semester! Learn how modern web applications work, set up your development environment, and meet fellow society members.',
    date: 'Wednesday, 12 Nov 2026',
    time: '18:00 - 19:30',
    location: 'Room C1004 / IT Block',
    isOnline: false,
    type: 'Workshop',
    tags: ['HTML/CSS', 'TypeScript', 'Beginner Friendly'],
  },
  {
    id: '2',
    title: 'Git & GitHub Masterclass',
    description: 'Master branch management, pull requests, merge conflict resolution, and open-source contribution workflows essential for developers.',
    date: 'Wednesday, 19 Nov 2026',
    time: '18:00 - 19:30',
    location: 'Room C1004 & Discord Stream',
    isOnline: true,
    type: 'Workshop',
    tags: ['Git', 'GitHub', 'Tooling'],
  },
  {
    id: '3',
    title: 'Society Pizza & Gaming Night',
    description: 'Unwind before assignments kick in! Join us for casual multiplayer gaming, pizza, and relaxed chats with senior software engineering students.',
    date: 'Friday, 28 Nov 2026',
    time: '17:00 - 20:00',
    location: 'Student Union Lounge',
    isOnline: false,
    type: 'Social',
    tags: ['Social', 'Gaming', 'Networking'],
  },
];

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full mb-3">
          <CalendarIcon className="w-3.5 h-3.5" /> Schedule
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Upcoming Events & Workshops
        </h1>
        <p className="text-slate-400 text-base max-w-2xl">
          Join our regular weekly meetups, hands-on coding labs, guest speaker talks, and social hangouts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {UPCOMING_EVENTS.map((event) => (
          <div key={event.id} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
                  event.type === 'Workshop' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                  'bg-purple-950 text-purple-400 border border-purple-800'
                }`}>
                  {event.type}
                </span>
                {event.isOnline && (
                  <span className="inline-flex items-center gap-1 text-xs text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900">
                    <Video className="w-3 h-3" /> Online Stream
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-white mb-2 leading-snug">{event.title}</h2>
              <p className="text-slate-400 text-sm mb-6">{event.description}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {event.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] text-slate-400 bg-slate-800/60 rounded">
                    <Tag className="w-2.5 h-2.5" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}