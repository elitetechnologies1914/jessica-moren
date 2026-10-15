import { Crown } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-[#11100f] text-[#f7f1e8]">
      <div className="text-center">
        <Crown className="mx-auto h-8 w-8 text-[#d8b76a]" strokeWidth={1.4} />
        <p className="font-display mt-5 text-4xl tracking-[0.08em]">JESSICA MOREN</p>
      </div>
    </div>
  );
}
