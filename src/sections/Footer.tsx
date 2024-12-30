import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const year = new Date().getFullYear();

const links = [
  {
    href: "https://www.linkedin.com/in/vedant-bhor-39287828b/",
    label: "LinkedIn",
  },
  { href: "https://x.com/arsenic_dev", label: "Twitter" },
  { href: "https://github.com/Arsenic-01", label: "GitHub" },
  { href: "https://discordapp.com/users/862682607162359819", label: "Discord" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip z-10">
      <div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white/40">
            &copy; {year}. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {links.map((link) => (
              <a
                target="_blank"
                className="inline-flex items-center gap-1.5 hover:underline hover:underline-offset-2 active:underline active:underline-offset-2 z-0"
                href={link.href}
                key={link.label}
              >
                <span className="font-semibold">{link.label}</span>
                <ArrowUpRight className="size-4 " />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
