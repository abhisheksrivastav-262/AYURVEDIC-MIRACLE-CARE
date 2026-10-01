"use client";
import { Star } from "lucide-react";

export function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5 justify-center">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={15} className="fill-gold-500 text-gold-500" />
      ))}
    </div>
  );
}
