interface HeroSectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const HeroSection = ({ title, subtitle, className = '' }: HeroSectionProps) => {
  return (
    <div
      className={`h-64 flex justify-center items-center sm:justify-end sm:items-end flex-col pb-7 sm:pr-10 ${className}`}
    >
      <div className="relative">
        <h1 className="text-6xl md:text-8xl leading-tight">
          <span className="tracking-tight font-fleur-de-leah">{title.charAt(0)}</span>
          <span className="tracking-tight italic">{title.slice(1)}</span>
        </h1>
        <p className="font-medium">
          <span className="green-signature">__</span>
          {subtitle}
          <span className="green-signature">__</span>
        </p>
      </div>
    </div>
  );
};
