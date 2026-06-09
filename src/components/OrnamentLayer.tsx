import { cn } from "@/lib/utils";

interface OrnamentLayerProps {
  className?: string;
  intensity?: "soft" | "rich";
}

export default function OrnamentLayer({ className, intensity = "soft" }: OrnamentLayerProps) {
  const showExtra = intensity === "rich";

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="ornament-ring absolute -left-20 top-[-8rem] h-72 w-72 rounded-full opacity-60" />
      <div className="ornament-ring absolute right-[-5rem] top-16 h-44 w-44 rounded-full opacity-50" />
      <div className="ornament-ring absolute -bottom-14 left-[20%] h-36 w-36 rounded-full opacity-40" />
      <div className="absolute left-[8%] top-[42%] h-40 w-px bg-gradient-to-b from-transparent via-accent-gold/50 to-transparent" />
      <div className="absolute right-[12%] top-[26%] h-56 w-px bg-gradient-to-b from-transparent via-accent-gold/45 to-transparent" />

      <span className="ornament-star left-[6%] top-24 h-3.5 w-3.5 animate-[sparkle_4s_ease-in-out_infinite]" />
      <span className="ornament-star left-[24%] top-[32%] h-2.5 w-2.5 animate-[sparkle_4.4s_ease-in-out_0.2s_infinite]" />
      <span className="ornament-star right-[18%] top-16 h-3.5 w-3.5 animate-[sparkle_4.8s_ease-in-out_0.4s_infinite]" />
      <span className="ornament-star right-[10%] top-[44%] h-2.5 w-2.5 animate-[sparkle_5.2s_ease-in-out_0.6s_infinite]" />

      {showExtra ? (
        <>
          <div className="absolute left-6 top-[58%] h-40 w-40 rounded-full bg-white/25 blur-2xl" />
          <div className="absolute right-10 top-[66%] h-32 w-32 rounded-full bg-accent-red/10 blur-2xl" />
          <div className="absolute left-[32%] top-[18%] h-px w-32 bg-gold-line opacity-80" />
          <div className="absolute left-[38%] bottom-16 h-px w-28 bg-gold-line opacity-70" />
        </>
      ) : null}
    </div>
  );
}
