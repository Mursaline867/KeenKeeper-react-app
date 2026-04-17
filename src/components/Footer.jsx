import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-16 bg-brandDark text-white">
      <Container className="py-10 text-center">
        <img src="/assets/logo-xl.png" alt="KeenKeeper" className="mx-auto mb-4 h-10 w-auto" />
        <p className="mx-auto max-w-2xl text-sm text-white/75">
          Keep your important friendships warm with thoughtful reminders, quick check-ins, and a simple timeline of care.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          {['facebook', 'instagram', 'twitter'].map((item) => (
            <button
              key={item}
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <img src={`/assets/${item}.png`} alt={item} className="h-10 w-10" />
            </button>
          ))}
        </div>
      </Container>
    </footer>
  );
}
