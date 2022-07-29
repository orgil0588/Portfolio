import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="flex justify-center py-3.5 border-b border-gray-200 bg-transparent fixed w-full backdrop-blur-lg">
    <Link href="/">
    Orgil.
    </Link>
    </div>
  );
};

export default Navbar;
