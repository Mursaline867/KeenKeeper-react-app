import { Phone, MessageCircleMore, Video } from 'lucide-react';

const typeMap = {
  call: { icon: Phone, label: 'Call' },
  text: { icon: MessageCircleMore, label: 'Text' },
  video: { icon: Video, label: 'Video' },
};

export default function TimelineRow({ entry }) {
  const { icon: Icon, label } = typeMap[entry.type];
  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col gap-4 rounded-[28px] bg-card p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
          <Icon size={22} />
        </div>
        <div>
          <p className="text-lg font-semibold text-ink">{entry.title}</p>
          <p className="text-sm text-mutedText">{label} interaction recorded</p>
        </div>
      </div>
      <div className="text-sm font-medium text-mutedText">{formattedDate}</div>
    </div>
  );
}
