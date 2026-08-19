import { cn } from "@/lib/utils";

type TextLoopProps = {
  text: string;
  repeat?: number;
  duration?: number;
  className?: string;
  tilt?: boolean;
};

/**
 * TextLoop — continuous horizontal ribbon of looping text.
 * Purple ribbon, white typography, pauses on hover, respects reduced motion.
 */
export function TextLoop({
  text,
  repeat = 6,
  duration = 40,
  className,
  tilt = false,
}: TextLoopProps) {
  const items = Array.from({ length: repeat * 2 });

  return (
    <div
      aria-hidden="true"
      className={cn("textloop py-4 select-none", tilt && "-rotate-1 scale-[1.04]", className)}
      style={{ ["--loop-duration" as string]: `${duration}s` }}
    >
      <div className="textloop__track">
        {items.map((_, i) => (
          <span
            key={i}
            className="px-6 font-display text-sm font-semibold tracking-[0.35em] whitespace-nowrap uppercase sm:text-base"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
