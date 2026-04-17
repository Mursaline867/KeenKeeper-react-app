export default function SummaryCard({ label, value, hint }) {
  return (
    <div className="rounded-[28px] bg-card p-5 shadow-soft">
      <p className="text-sm font-medium text-mutedText">{label}</p>
      <h3 className="mt-3 text-3xl font-bold text-ink">{value}</h3>
      <p className="mt-2 text-sm text-mutedText">{hint}</p>
    </div>
  );
}
