import { UserPlus } from 'lucide-react';
import Container from '../components/Container';
import FriendCard from '../components/FriendCard';
import LoadingState from '../components/LoadingState';
import SectionHeading from '../components/SectionHeading';
import SummaryCard from '../components/SummaryCard';
import { useFriends } from '../hooks/useFriends';
import { useTimeline } from '../context/TimelineContext';

export default function HomePage() {
  const { friends, loading, error } = useFriends();
  const { entries } = useTimeline();

  const interactionsThisMonth = entries.filter((entry) => {
    const entryDate = new Date(entry.date);
    const now = new Date();
    return entryDate.getFullYear() === now.getFullYear() && entryDate.getMonth() === now.getMonth();
  }).length;

  const summary = [
    { label: 'Total Friends', value: friends.length, hint: 'People you are currently tracking' },
    { label: 'On Track', value: friends.filter((f) => f.status === 'on-track').length, hint: 'Friendships that are in a healthy rhythm' },
    { label: 'Need Attention', value: friends.filter((f) => f.status !== 'on-track').length, hint: 'Friends who need attention first' },
    { label: 'Interactions This Month', value: interactionsThisMonth, hint: 'Recent check-ins recorded this month' },
  ];

  return (
    <>
      <Container className="pt-10 sm:pt-14">
        <section className="rounded-[36px] bg-card px-6 py-12 shadow-soft sm:px-10">
          <SectionHeading
            centered
            title="Friends to keep close in your life"
            text="Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most."
          />
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brandDark">
              <UserPlus size={18} />
              Add a Friend
            </button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summary.map((item) => (
              <SummaryCard key={item.label} {...item} />
            ))}
          </div>
        </section>
      </Container>

      <Container className="mt-12">
        <SectionHeading
          eyebrow="Your friends"
          title="Stay thoughtful without overthinking it"
          text="Open any friend card to view details, schedule a check-in, and keep the timeline moving."
        />

        <div className="mt-8">
          {loading ? (
            <LoadingState />
          ) : error ? (
            <div className="rounded-[32px] bg-red-50 p-8 text-red-600 shadow-soft">{error}</div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
