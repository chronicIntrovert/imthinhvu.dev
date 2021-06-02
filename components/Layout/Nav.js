import { CollectionIcon, BookOpenIcon, UserCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Nav({ children }) {
  return (
    <ul className="flex">
      <li className="flex flex-col items-center hover:text-green-300">
        <UserCircleIcon className="h-6" />
        <Link href="/about">
          <a className="font-bold hidden sm:inline">about</a>
        </Link>
      </li>
      <li aria-label="works" className="flex flex-col items-center ml-4 hover:text-green-300">
        <CollectionIcon className="h-6" />
        <Link href="/works">
          <a className="font-bold hidden sm:inline">works</a>
        </Link>
      </li>
      <li aria-label="musings" className="flex flex-col items-center ml-4 hover:text-green-300">
        <BookOpenIcon className="h-6" />
        <Link href="/musings">
          <a className="font-bold hidden sm:inline">musings</a>
        </Link>
      </li>
    </ul>
  );
}
