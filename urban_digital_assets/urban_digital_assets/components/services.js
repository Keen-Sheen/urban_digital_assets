/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LightningBoltIcon, ServerIcon, AcademicCapIcon } from '@heroicons/react/outline'
import parse from 'html-react-parser'

const icons = {
  "lightningbolticon": '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> </svg>',
  "servericon": '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /> </svg>',
  "academiccapicon": '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path d="M12 14l9-5-9-5-9 5 9 5z" /> <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /> s</svg>',
}

export default function Services({ copy }) {
  const [services, setServices] = useState([])

  function chooseIcon(selection) {
    const chosen = icons[selection]
    console.log(chosen)
    return parse(chosen)
  }
  
  useEffect(() => {
    setServices(copy.data.body[0].items)
  }, [services])

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {copy.data.service_title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {copy.data.service_description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="flex flex-wrap space-y-6">
            {services.map((service) => (
              <div key={service.service_name} className="relative min-w-[30%]">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {chooseIcon(service.service_icon)}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.service_name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{service.service_description}</dd>
              </div>
            ))}
          </dl>
          <div className="flex justify-center align-center">
            <Link href="https://urbandigitalassets.gumroad.com/">
              <a target="_blank" className="max-w-max flex items-center justify-center mt-10 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Check Out Our Services
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
