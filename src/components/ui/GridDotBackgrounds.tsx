
interface MyComponentProps {
  children: React.ReactNode;
}export default function GridDotBackgrounds({ children }: MyComponentProps) {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b dark:from-slate-200 from-slate-700 dark:to-slate-500 to-slate-800 py-8">
        {children}
      </div>
    </div>
  );
}
