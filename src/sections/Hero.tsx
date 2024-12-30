import memojiImage from "@/assets/images/bitmoji-laptop.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

export const HeroSection = () => {
  return (
    <div className="py-36 md:py-48 lg:py-52 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask_image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit={true}
          orbitDuration="30s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit={true}
          orbitDuration="32s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit={true}
          orbitDuration="34s"
        >
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit={true}
          orbitDuration="36s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit={true}
          orbitDuration="38s"
          shouldSpin={true}
          spinDuration="10s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit={true}
          orbitDuration="40s"
          shouldSpin={true}
          spinDuration="10s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit={true}
          orbitDuration="42s"
        >
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit={true}
          orbitDuration="44s"
        >
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit={true}
          orbitDuration="46s"
          shouldSpin={true}
          spinDuration="10s"
        >
          <StarIcon className="size-24 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="person peeking from behind laptop"
            className="h-[100px] w-auto"
          />
          <div className="bg-black mt-1 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 md:gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 bg-green-500/80 rounded-full animate-pingLarge"></div>
            </div>
            <div className="text-sm font-medium">Available for Work</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional and
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="https://drive.google.com/file/d/1FPItuyKINjrcGJC7jNxfkdq5-wqPTaLL/view?usp=sharing"
            className="inline-flex items-center z-10 gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Check Resume</span>
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="mailto:vedantbhorofficial@gmail.com?subject=Hello%20I'm%20____%20from%20____%20company&body=I%20want%20to%20start%20a%20new%20project%20about%20____%20and%20time%20duration%20is%20___%20days."
            className="inline-flex items-center z-10 gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
