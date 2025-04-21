export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-background bg-cover bg-center px-[10%] py-20 relative">
      {children}
    </div>
  );
}
