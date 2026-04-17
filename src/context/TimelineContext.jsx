import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const TimelineContext = createContext(null);

const starterEntries = [
  { id: 1, friendId: 3, type: 'call', title: 'Call with Sofia Rahman', date: '2026-04-15' },
  { id: 2, friendId: 6, type: 'text', title: 'Text with Ethan Roy', date: '2026-04-14' },
  { id: 3, friendId: 2, type: 'video', title: 'Video with Liam Parker', date: '2026-04-13' },
  { id: 4, friendId: 8, type: 'text', title: 'Text with Daniel Brooks', date: '2026-04-12' },
];

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem('keenkeeper-timeline');
    return stored ? JSON.parse(stored) : starterEntries;
  });

  useEffect(() => {
    localStorage.setItem('keenkeeper-timeline', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (friend, type) => {
    const title = `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`;
    const entry = {
      id: Date.now(),
      friendId: friend.id,
      type,
      title,
      date: new Date().toISOString().split('T')[0],
    };
    setEntries((prev) => [entry, ...prev]);
    return entry;
  };

  const value = useMemo(() => ({ entries, addEntry }), [entries]);
  return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>;
}

export function useTimeline() {
  const context = useContext(TimelineContext);
  if (!context) throw new Error('useTimeline must be used within TimelineProvider');
  return context;
}
