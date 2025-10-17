import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
}

export const ProfileImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = '',
  loading = 'lazy'
}: ProfileImageProps) => {
  return (
    <div className={containerClassName}>
      <Image
        src={src}
        alt={alt}
        width={typeof width === 'string' ? parseInt(width) : width}
        height={typeof height === 'string' ? parseInt(height) : height}
        className={className}
        loading={loading}
        decoding="async"
      />
    </div>
  );
};
