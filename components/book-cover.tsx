import Image from "next/image";

type BookCoverProps = { className?: string; priority?: boolean };

export default function BookCover({ className = "", priority = false }: BookCoverProps) {
  return (
    <div className={`relative aspect-[0.706] overflow-hidden bg-[#11100f] shadow-[0_28px_70px_rgba(0,0,0,0.38)] ${className}`}>
      <Image
        src="/images/jessica-cover-wrap.jpg"
        alt="Front cover of The Crown Doesn’t F@$%!@% Fit Anymore by Jessica Moren"
        fill
        priority={priority}
        sizes="(max-width: 768px) 74vw, 440px"
        className="object-cover object-right"
      />
    </div>
  );
}
