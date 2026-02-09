interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: Props) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-tighter ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg max-w-2xl mx-auto ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
