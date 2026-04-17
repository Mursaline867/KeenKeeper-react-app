import { Link } from 'react-router-dom';
import Container from '../components/Container';

export default function NotFoundPage() {
  return (
    <Container className="pt-14">
      <section className="rounded-[36px] bg-card px-6 py-16 text-center shadow-soft sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">404</p>
        <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-mutedText">
          The page you requested does not exist. Head back home and continue checking in with the people who matter.
        </p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">
          Return Home
        </Link>
      </section>
    </Container>
  );
}
