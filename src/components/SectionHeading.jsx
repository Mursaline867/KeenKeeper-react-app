export default function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : ''}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-3 text-base text-mutedText">{text}</p> : null}
    </div>
  );
}
