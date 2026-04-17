import { ChartPie, HeartHandshake, House, TimerReset } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Container from './Container';

const links = [
  { to: '/', label: 'Home', icon: House },
  { to: '/timeline', label: 'Timeline', icon: TimerReset },
  { to: '/stats', label: 'Stats', icon: ChartPie },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-page/85 backdrop-blur-lg">
      <Container className="py-4">
        <nav className="flex flex-col gap-4 rounded-[28px] bg-card px-4 py-4 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white">
              <HeartHandshake size={20} />
            </div>
            <img src="/assets/logo.png" alt="KeenKeeper" className="h-7 w-auto" />
          </NavLink>

          <div className="flex flex-wrap items-center gap-2">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive ? 'bg-brand text-white shadow-soft' : 'text-mutedText hover:bg-brand/10 hover:text-brand'
                  }`
                }
              >
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
