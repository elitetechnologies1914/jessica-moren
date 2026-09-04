export default function Loading() {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#6e1714] text-[#fff8ed]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(214,163,90,0.28),transparent_31%),linear-gradient(180deg,#6e1714_0%,#262223_52%,#262223_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,246,235,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,246,235,0.16)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="relative flex w-full max-w-[520px] flex-col items-center px-6 text-center">
        <div className="relative flex w-full items-center justify-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f5d4ac]/24" />
          <p className="mx-5 font-serif text-3xl tracking-[0.1em] text-[#fff8ed] preloader-logo-fade sm:text-5xl">IRENA SAMANTHA</p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f5d4ac]/24" />
        </div>
        <div className="mt-7 h-px w-full max-w-[240px] overflow-hidden bg-[#f5d4ac]/18">
          <div className="h-full w-2/5 bg-gradient-to-r from-transparent via-[#d6a35a] to-transparent preloader-sweep" />
        </div>
      </div>
    </div>
  );
}
