import { CalendarDays, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';

export default function FriendCard({ friend }) {
  return (
    <Link
      to={`/friends/${friend.id}`}
      className="group rounded-[32px] bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={friend.picture} alt={friend.name} className="h-16 w-16 rounded-2xl object-cover" />
          <div>
            <h3 className="text-lg font-bold text-ink">{friend.name}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-mutedText">
              <Mail size={14} />
              <span className="truncate">{friend.email}</span>
            </div>
          </div>
        </div>
        <StatusBadge status={friend.status} />
      </div>

      <div className="mt-5 rounded-[24px] bg-page p-4">
        <div className="flex items-center gap-2 text-sm text-mutedText">
          <CalendarDays size={16} className="text-brand" />
          <span>Days Since Contact</span>
        </div>
        <p className="mt-2 text-3xl font-bold text-ink">{friend.days_since_contact}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {friend.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
