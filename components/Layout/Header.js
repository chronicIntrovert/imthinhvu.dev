import Nav from './Nav';
import Link from 'next/link';

export default function Header({ children }) {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <a className="hover:text-green-300">
          <h1 className="text-xl inline font-bold">imthinhvu.dev</h1>
        </a>
      </Link>
      <Nav />
    </header>
  );
}
