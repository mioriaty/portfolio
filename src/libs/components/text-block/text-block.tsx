interface TextBlockProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
  variant?: 'default' | 'uppercase';
}

export const TextBlock = ({
  title,
  subtitle,
  titleClassName = '',
  subtitleClassName = '',
  containerClassName = '',
  variant = 'default'
}: TextBlockProps) => {
  const titleClasses =
    variant === 'uppercase'
      ? `uppercase bg-green-signature text-2xl ${titleClassName}`
      : `text-xl bg-green-signature w-fit ${titleClassName}`;

  return (
    <div className={containerClassName}>
      <p className={titleClasses}>{title}</p>
      <p className={`font-medium ${subtitleClassName}`}>{subtitle}</p>
    </div>
  );
};
