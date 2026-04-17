export default function LoadingState() {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-[32px] border border-dashed border-brand/20 bg-white/70 px-6 py-10 text-center shadow-soft">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand/20 border-t-brand" />
      <div>
        <p className="text-lg font-semibold text-ink">Loading your friendships...</p>
        <p className="text-sm text-mutedText">Fetching friend cards and preparing the dashboard.</p>
      </div>
    </div>
  );
}
