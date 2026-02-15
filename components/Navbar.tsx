export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-bold">NOMTCH</a>
        <div className="flex gap-4">
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/portfolio" className="hover:underline">Portfolio</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}