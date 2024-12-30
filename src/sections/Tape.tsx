import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Responsive",
  "Scalable",
  "Secure",
  "Maintainable",
  "Search Engine Optimized",
  "User-Friendly",
  "Reliable",
  "Cost-Effective",
  "Interactive",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-2 items-center animate-moveLeft [animation-duration:30s]">
            {[...new Array(2)].map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div className="inline-flex py-2 gap-4" key={word}>
                    <span className="text-gray-900 font-extrabold text-sm lg:text-lg">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-9" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
