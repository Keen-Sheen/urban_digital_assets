/* This example requires Tailwind CSS v2.0+ */
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function CTA({ copy }) {
  //console.log(copy.data)
  return (
    <div className="relative bg-gray-800">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={copy.data.cta_image.url}
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Connect with us</h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">{copy.data.cta_title}</p>
          <p className="mt-3 text-lg text-gray-300">
            {copy.data.cta_description}
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link href="https://www.facebook.com/groups/3321176637915418">
                <a
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Join our Group
                  {/* <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
