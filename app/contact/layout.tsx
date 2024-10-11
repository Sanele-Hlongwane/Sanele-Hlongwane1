export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-5">
        {children}
    </section>
  );
}
