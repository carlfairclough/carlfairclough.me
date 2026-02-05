import { BackBar } from "../components/BackBar";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen leading-relaxed selection:bg-black selection:text-white text-slate-700">
      <BackBar />
      {children}
    </div>
  );
}
