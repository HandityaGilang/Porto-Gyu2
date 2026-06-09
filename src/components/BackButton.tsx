import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  fallbackTo?: string;
  label?: string;
}

export default function BackButton({ fallbackTo = "/portfolio", label = "Back to Portfolio" }: BackButtonProps) {
  return (
    <Link
      to={fallbackTo}
      className="inline-flex items-center gap-3 rounded-full border border-border-soft bg-white/70 px-5 py-3 text-sm font-medium text-text-main shadow-sm backdrop-blur-sm transition hover:border-accent-gold/45 hover:bg-white/90"
    >
      <ArrowLeft className="h-4 w-4 text-accent-red" />
      <span>{label}</span>
    </Link>
  );
}
