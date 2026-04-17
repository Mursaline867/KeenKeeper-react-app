import { Archive, CalendarClock, Mail, Pencil, Phone, Trash2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Container from '../components/Container';
import LoadingState from '../components/LoadingState';
import StatusBadge from '../components/StatusBadge';
import { useTimeline } from '../context/TimelineContext';
import { useFriends } from '../hooks/useFriends';

const actions = [
  { key: 'call', label: 'Call', icon: '/assets/call.png' },
  { key: 'text', label: 'Text', icon: '/assets/text.png' },
  { key: 'video', label: 'Video', icon: '/assets/video.png' },
];

export default function FriendDetailsPage() {
  const { friendId } = useParams();
  const { friends, loading } = useFriends();
  const { addEntry } = useTimeline();
  const friend = friends.find((item) => String(item.id) === friendId);

  const handleCheckIn = (type) => {
    if (!friend) return;
    const entry = addEntry(friend, type);
    toast.success(`${entry.title} added to timeline`);
  };

  if (loading) {
    return (
      <Container className="pt-12">
        <LoadingState />
      </Container>
    );
  }

  if (!friend) {
    return (
      <Container className="pt-12">
        <div className="rounded-[32px] bg-card p-10 text-center shadow-soft">
          <h1 className="text-3xl font-bold">Friend not found</h1>
          <p className="mt-3 text-mutedText">The friend card you opened no longer exists.</p>
          <Link to="/" className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">
            Back to home
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="pt-10">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_1.4fr]">
        <section className="rounded-[34px] bg-card p-6 shadow-soft sm:p-8">
          <img src={friend.picture} alt={friend.name} className="h-28 w-28 rounded-[28px] object-cover" />
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold text-ink">{friend.name}</h1>
            <StatusBadge status={friend.status} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {friend.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-base leading-7 text-mutedText">{friend.bio}</p>
          <div className="mt-6 flex items-center gap-2 rounded-[24px] bg-page px-4 py-3 text-sm text-mutedText">
            <Mail size={16} className="text-brand" />
            {friend.email}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-black/5 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-page">
              <CalendarClock size={16} /> Snooze 2 Weeks
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-black/5 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-page">
              <Archive size={16} /> Archive
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-black/5 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-page">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </section>

        <section className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: 'Days Since Contact', value: friend.days_since_contact },
              { label: 'Goal', value: `${friend.goal} days` },
              { label: 'Next Due Date', value: friend.next_due_date },
            ].map((item) => (
              <div key={item.label} className="rounded-[30px] bg-card p-6 shadow-soft">
                <p className="text-sm text-mutedText">{item.label}</p>
                <p className="mt-3 text-2xl font-bold text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[34px] bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Relationship Goal</p>
                <h2 className="mt-2 text-2xl font-bold text-ink">Stay in touch every {friend.goal} days</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-black/5 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-page">
                <Pencil size={16} /> Edit
              </button>
            </div>
          </div>

          <div className="rounded-[34px] bg-card p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl font-bold text-ink">Quick Check-In</h2>
            <p className="mt-2 text-mutedText">Tap an action to instantly add a new timeline entry for {friend.name}.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {actions.map((action) => (
                <button
                  key={action.key}
                  onClick={() => handleCheckIn(action.key)}
                  className="flex items-center justify-center gap-3 rounded-[26px] bg-page px-4 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                >
                  <img src={action.icon} alt={action.label} className="h-10 w-10 rounded-full" />
                  {action.label}
                </button>
              ))}
            </div>
            <Link to="/timeline" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              <Phone size={16} /> View timeline history
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
