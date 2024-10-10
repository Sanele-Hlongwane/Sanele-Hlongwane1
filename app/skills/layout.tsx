export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section >
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
