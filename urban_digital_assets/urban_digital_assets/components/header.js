import Link from 'next/link'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  //{ name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 bg-gradient-to-r from-black-500 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link key={link.name} href={link.href} >
                  <span className="text-base cursor-pointer font-medium text-white hover:text-red-50">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {/* <Link href="https://www.facebook.com/groups/3321176637915418">
              <a target="_blank" className="inline-block bg-blue-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                Join our group
              </a>
            </Link>
            <Link href="https://urbandigitalassets.gumroad.com/">
              <a target="_blank" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
                Start Investing
              </a>
            </Link> */}
            <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

