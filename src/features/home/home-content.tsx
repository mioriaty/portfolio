import { HeroSection } from '@/libs/components/hero-section';
import { ProfileImage } from '@/libs/components/profile-image';
import { SocialNavigation } from '@/libs/components/social-navigation';
import { TextBlock } from '@/libs/components/text-block';

export const HomeContent = () => {
  return (
    <div className="w-full flex h-screen flex-col sm:flex-row">
      <div className="fixed left-0 sm:hidden col-span-2 row-span-1 flex justify-end items-start z-30 w-full">
        <SocialNavigation variant="mobile" className="bg-beige-100" />
      </div>
      <div className="flex flex-col w-full sm:w-1/2">
        <HeroSection title="Duong" subtitle="Lost in though, but finding peace" />
        <div className="hidden sm:grid grid-rows-[100px_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr_80px] flex-1">
          <div className="bd bd-top col-start-1 col-span-4 uppercase flex justify-center items-center text-xl">
            <p className="font-semibold">You know nothing, Jon Snow</p>
          </div>
          <div className="bd bd-top bd-right col-start-1 col-span-1 row-start-2 row-span-3"></div>
          <div className="bd bd-top bd-right row-start-2 col-start-2 col-span-2 row-span-3 px-8">
            <div>
              <ProfileImage
                src="https://res.cloudinary.com/dmdjzkm7s/image/upload/v1759225691/__yrv8x9.jpg"
                alt="sample"
                width="1000"
                height="500"
                className="absolute top-0 left-0 w-full h-full object-cover"
                containerClassName="relative pt-[70%] mt-8 mb-4 -ml-24 max-w-[100%]"
                loading="lazy"
              />
              <TextBlock title="I am" subtitle="__a lazy perfectionist, if that makes sense__" />
            </div>
          </div>
          <div className="bd bd-top row-start-2 col-start-4 row-span-3 uppercase text-vert flex justify-center items-center font-semibold">
            I'm too old to care
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="bd bd-top w-full py-8 flex items-center justify-center">
          <p className="text-xl uppercase font-semibold">You know nothing, Jon Snow</p>
        </div>
        <ProfileImage
          src="https://res.cloudinary.com/dmdjzkm7s/image/upload/v1759225691/__yrv8x9.jpg"
          alt="grass-img"
          width="600"
          height="400"
          containerClassName="bd bd-top"
        />
        <div className="p-8 bd bd-top">
          <TextBlock title="I am" subtitle="__a lazy perfectionist, if that makes sense__" />
        </div>
        <div className="bd bd-top w-full py-8 flex items-center justify-center">
          <p className="text-xl uppercase font-semibold">I'm too old to care</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 sm:grid grid-rows-[100px_1fr_1fr] grid-cols-2">
        <div className="hidden bd bd-left col-span-2 row-span-1 sm:flex justify-end items-start">
          <SocialNavigation variant="desktop" />
        </div>
        <ProfileImage
          src="https://res.cloudinary.com/dmdjzkm7s/image/upload/v1759218817/123_z1m3ba.jpg"
          alt="hero image"
          width="800"
          height="1200"
          className="h-full object-cover"
          containerClassName="border-b-0 border-t border-black sm:border-t sm:border-r sm:border-l col-start-1 col-span-1 row-span-2 flex items-center overflow-hidden"
        />
        <div className="bd bd-top py-10 flex text-right flex-col sm:hidden pr-8">
          <p className="text-2xl font-medium">
            <span className="tracking-tighter">E</span>njoying
          </p>
          <span className="font-medium">__being enough__</span>
        </div>
        <div className="border-t sm:border-b col-start-2 col-span-1 row-span-1 border-black">
          <TextBlock
            title="I'm not lazy"
            subtitle="__Just saving my energy for sunsets__"
            variant="uppercase"
            containerClassName="p-6 sm:px-8 flex-row sm:flex-col sm:py-10 m-auto sm:mt-8 sm:p-0 w-fit text-center h-full"
          />
        </div>
        <div className="hidden col-start-2 col-span-1 row-span-1 sm:flex items-center">
          <div className="ml-4">
            <p className="text-2xl font-medium">
              <span className="tracking-tighter">E</span>njoying
            </p>
            <span className="font-medium">__being enough__</span>
          </div>
        </div>
      </div>
    </div>
  );
};
