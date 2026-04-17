import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { useTimeline } from '../context/TimelineContext';

const COLORS = ['#1f5c4a', '#7c3aed', '#7bc67b'];

export default function StatsPage() {
  const { entries } = useTimeline();

  const data = [
    { name: 'Call', value: entries.filter((entry) => entry.type === 'call').length },
    { name: 'Text', value: entries.filter((entry) => entry.type === 'text').length },
    { name: 'Video', value: entries.filter((entry) => entry.type === 'video').length },
  ];

  return (
    <Container className="pt-10">
      <SectionHeading
        eyebrow="Analytics"
        title="Friendship Analytics"
        text="A quick look at the ways you have been checking in so far across calls, texts, and video catch-ups."
      />

      <section className="mt-8 rounded-[36px] bg-card p-6 shadow-soft sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={5}>
                  {data.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={item.name} className="rounded-[26px] bg-page p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-4 w-4 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                    <span className="text-sm font-semibold text-mutedText">{item.name}</span>
                  </div>
                  <span className="text-2xl font-bold text-ink">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
