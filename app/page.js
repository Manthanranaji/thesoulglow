"use client";

import Link from "next/link";
import NavBar from "./navbar";
import { useEffect , useRef, useState } from "react";
import useReveal from "./hooks/Reveal";

const card = [
  {
    num: "— 01",
    head: "Hand Poured",
    desc: "Every candle is poured by hand slowly and with intention.",
  },
  {
    num: "— 02",
    head: "Natural Wax",
    desc: "Clean ingredients, no harsh chemicals — just pure, slow burning warmth",
  },
  {
    num: "— 03",
    head: "Made for Gifting",
    desc: "Beautifully packaged and ready to give — for every moment worth celebrating."
  }
]

function CandleCard({ head, desc, num }) {
  const ref = useRef(null)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFlipped(true)
      },
      { threshold: 1.0 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <div ref={ref} className="card-flip">
        <div className={`card-inner ${flipped ? 'flipped' : ''}`}>

          <div className="card-back">
            <span className="font-equinox text-white/20 tracking-widest text-sm">
              The Soul Glow
            </span>
          </div>

          <div className="card-front bg-transparent md:mx-auto backdrop-blur-md border border-[#E8D5D0] px-4 py-4 rounded-sm">
            <span className="font-dm text-[#B07060] md:text-lg text-sm">{num}</span>

            <h1 className="font-cormorant text-[#3D2C2C] text-xl md:text-3xl tracking-wider">
              {head}
            </h1>

            <p className="font-montserrat tracking-widest text-xs md:text-sm mt-4 text-[#7A5C58]">
              {desc}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Home(){

  const ref = useReveal()
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()
  const ref4 = useReveal()
  const ref5 = useReveal()
  const ref6 = useReveal()

  return(
    <div className="min-h-screen w-full bg-[#F5E6E2]">
      <NavBar/>
      <div className="min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <img
        src="./candle.png"
        height={100}
        width={150}
        className="h-[300px] md:h-[400px] md:w-[300px] mx-auto mt-32 z-20"
      />
      <h1 className="z-0 uppercase -mt-48 md:-mt-64 font-medium">
        <span className="opacity-0 animate-fade-up [animation-delay:0.3s] md:text-xl font-montserrat md:-ml-44 -ml-24 text-[#C9A99A]">The </span>
        <span className="opacity-0 animate-fade-right font-cormorant block text-6xl -ml-24 md:-ml-44 md:text-8xl text-[#FFFFFF]">Soul </span>
        <span className="opacity-0 animate-fade-left font-cormorant block text-[3rem] md:text-[4.8rem] ml-[65%] -mt-4 text-[#FFFFFF]">Glow </span>
      </h1>
      <p className="opacity-0 animate-fade-right md:text-[1rem] [animation-delay:0.7s] mt-8 font-montserrat text-[#3d2c2c]/60 text-xs tracking-wider">
        We craft moments you'll want to return to.
      </p>
      
      <Link
        href={"/contact"}
        className="opacity-0 animate-fade-up [animation-delay:1.5s] md:text-xl py-2 px-4 bg-[#b07060] mt-8 rounded-full tracking-wider font-montserrat text-sm text-[#FAFAFA] uppercase shadow-md"
      >
        Explore
      </Link>

      <div className="flex items-center gap-4 mt-20 px-4">
        <div className="flex-1 h-px w-40 bg-gradient-to-r from-transparent to-[#e8d5d0]" />

        <h2 className="opacity-0 animate-fade-up [animation-delay:2s] md:text-xl text-[#3d2c2c]/60 tracking-wider font-montserrat tracking-wide text-sm whitespace-nowrap">
          Why choose us?
        </h2>

        <div className="flex-1 h-px w-40 bg-gradient-to-l from-transparent to-[#e8d5d0]" />
      </div>

      </div>
      
      <section className="w-full min-h-screen flex px-4 md:mt-16 -mt-16 flex">
      <div className="flex flex-col gap-4 md:w-[90%] md:mx-auto">
        {card.map((cards) => (
          <CandleCard key={cards.head} {...cards} />
        ))}
      </div>
      </section>
      
      <section className="px-6 min-h-screen w-full flex flex-col gap-4 md:px-16 md:gap-8 -mt-16">
          <span ref={ref} className="opacity-0 font-dm text-xs text-[#FFFFFF] md:text-lg tracking-widest">&mdash; About us</span>
          <h4 ref={ref1} className="opacity-0 font-cormorant text-4xl md:text-6xl text-[#3d2c2c]/70">Our Story</h4>
          <p ref={ref2} className="opacity-0 font-montserrat text-[#7a5c58] tracking-wide leading-24">
            The soul glow was born from a simple belief &mdash; that a single flame can change the feeling of a room.
            We craft each candle by hand, using only natural wax and carefully chosen scents, because we believe what you bring into your
            space should be as intentional as how you live in it.
          </p>
        
      </section>

      <section className="px-6 min-h-screen w-full flex flex-col gap-4 md:px-16 md:gap-8 -mt-80">
          <span ref={ref3} className="opacity-0 font-dm text-xs text-[#FFFFFF] md:text-lg tracking-widest">&mdash; Contact</span>
          <h5 ref={ref4} className="opacity-0 font-cormorant text-4xl text-[#3d2c2c]/70 md:text-6xl">Get in Touch</h5>
          <p ref={ref5} className="opacity-0 font-montserrat text-[#7a5c58] tracking-widest leading-16">
            Have a question or want to place a custom order? We'd love to hear from you.            
          </p>

          <div ref={ref6} className="opacity-0 flex gap-8 mt-4">
            <Link
              href={"https://wa.me/+919289750040"}
              rel="noopener noreferrer"
              target={"_blank"}
              className="bg-[#b07060] text-white w-fit md:text-2xl rounded-lg px-2 py-2 shadow-sm font-dm tracking-widest"
            >
              WhatsApp →
            </Link>  

            <Link
              href={"https://instagram.com/soulglowwicks"}
              rel="noopener noreferrer"
              target={"_blank"}
              className="bg-[#b07060] text-white w-fit md:text-2xl rounded-lg px-2 py-2 shadow-sm font-dm tracking-widest"
            >
              Instagram →
            </Link>  

          </div>        
      </section>

    </div>
  )
}