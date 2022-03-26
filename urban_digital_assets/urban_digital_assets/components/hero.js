/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'

const icons = [
  {name: "AAVE", url: "/crypto-icons/aave-icon.svg"},
  {name: "ALGO", url: "/crypto-icons/algo-icon.svg"},
  {name: "ETH", url: "/crypto-icons/eth-icon.svg"},
  {name: "UDSC", url: "/crypto-icons/usdc-icon.svg"},
  {name: "LTC", url: "/crypto-icons/ltc-icon.svg"},
  {name: "ADA", url: "/crypto-icons/ada-icon.svg"},
  {name: "MIOTA", url: "/crypto-icons/miota-icon.svg"},
  {name: "XLM", url: "/crypto-icons/xlm-icon.svg"},
  {name: "XRP", url: "/crypto-icons/xrp-icon.svg"},
  {name: "XTZ", url: "/crypto-icons/xtz-icon.svg"},
  {name: "BTC", url: "/crypto-icons/btc-icon.svg"},
]


export default function Hero({ copy }) {
  const coins = useRef([])
  const circle = useRef()
  let angle = 0
  
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin)
    
    coins.current.forEach((coin, index) => {
      gsap.set(coin, {
        // x: 250 * Math.cos(angle),
        // y: 250 * Math.sin(angle),
        x: 400,
        y: gsap.utils.random(-300, 150),
        
      })
      if( circle.current != undefined) {
        // gsap.to(coin, {
        //   duration: 10,
        //   repeat: -1,
        //   ease: "sine.inOut",
        //   delay: index * 0.7,   
        //   motionPath: {
        //     path: circle.current,
        //     align: circle.current,
        //     alignOrigin: [0.5, 0.5],
        //     start: 0.5,
        //     end: 1.5
        //   },
        // })
        gsap.to(coin, {
          x: () => gsap.utils.random(-300, -50),
          duration: 5,
          delay: index * 1.5,
          yoyo: true,
          repeat: -1
        })
      }
      
    })

    
  }, [])

  return (
    <div className="relative bg-white overflow-hidden">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-10 pb-20 text-center lg:py-20 lg:text-left">
          <div className="px-2 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-6xl leading-tight tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl">
              {copy.data.hero_title}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {copy.data.hero_description}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="https://urbandigitalassets.gumroad.com/">
                  <a target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Start Investing
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="https://www.facebook.com/groups/3321176637915418">
                  <a
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Join our Group
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-0 rotate-90 sm:h-72 md:h-96 md:rotate-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <div className="flex align-items justify-center z-0 min-w-full min-h-full">
            <div className="">
              <svg width="886" height="886" fill="none" xmlns="http://www.w3.org/2000/svg">  
                <path 
                  ref={el => circle.current = el}
                  d="
                  M 450, 200
                  m -75, 0
                  a 75,75 0 1,0 600,0
                  a 75,75 0 1,0 -600,0
                  "
                />
              </svg>
            </div>
            <div className="min-w-max hidden sm:block">
              {icons.map((icon, index) => (
                <div key={index} ref={el => coins.current[index] = el} className="icons absolute top-1/2 left-1/2 p-7 mx-4 min-w-max bg-white drop-shadow-md rounded-full flex">
                  <Image 
                    src={icon.url}
                    width={50}
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
