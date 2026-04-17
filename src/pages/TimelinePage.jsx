import { useMemo, useState } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import TimelineRow from '../components/TimelineRow';
import { useTimeline } from '../context/TimelineContext';

const filterOptions = ['all', 'call', 'text', 'video'];

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('all');

  const filteredEntries = useMemo(() => {
    const next = filter === 'all' ? entries : entries.filter((entry) => entry.type === filter);
    return [...next].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [entries, filter]);

  return (
    <Container className="pt-10">
      <SectionHeading
        eyebrow="Timeline"
        title="Timeline"
        text="Every call, text, and video check-in appears here so you can keep track of the little moments that keep friendships alive."
      />

      <div className="mt-6 flex flex-wrap gap-3">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === option ? 'bg-brand text-white' : 'bg-card text-mutedText shadow-soft hover:text-brand'
            }`}
          >
            {option === 'all' ? 'All' : option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {filteredEntries.length ? (
          filteredEntries.map((entry) => <TimelineRow key={entry.id} entry={entry} />)
        ) : (
          <div className="rounded-[30px] bg-card p-8 text-center text-mutedText shadow-soft">
            No timeline entries for this filter yet.
          </div>
        )}
      </div>
    </Container>
  );
}
