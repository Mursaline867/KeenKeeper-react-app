const statusStyles = {
  overdue: 'bg-overdue text-[#6c2d2a]',
  'almost due': 'bg-almost text-[#6b5113]',
  'on-track': 'bg-track text-[#2d5e32]',
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
