import { info } from "data/info";
import { createLogo } from "utils/index";
import Link from 'next/link'

function Navbar() {
  return (
    <header className="container flex items-center justify-between h-[80px] sm:h-[123px]">
      <Link
        className="text-2xl dark:text-white font-semibold dark:font-semibold font-outfit no-underline"
        href="/"
      >{createLogo(info.name)}.</Link>
      <nav>
        <ul className="flex items-center">
          <li className="flex flex-row">
            <Link className="p-4 dark:text-light block text-lg no-underline" href="/"
            >Home
            </Link>
            <Link className="p-4 dark:text-light block text-lg no-underline" href="/projects"
            >Projects
            </Link>
            
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;