
'use client';

import Image from "next/image";
import React from "react";

export default function StartupStudioPage() {
  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans space-y-16">
      <header className="flex justify-between items-center py-4">
        <div className="text-3xl font-bold text-yellow-400">Startup Studio</div>
        <button className="text-white text-sm border border-white px-4 py-1 rounded">Member Login</button>
      </header>

      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Events in Startup Studio</h1>
        <p className="max-w-2xl text-yellow-200">
          We organize exclusive and public events to support founders, connect with partners, and grow the ecosystem.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded">Host your Event</button>
      </section>

      <section>
        <Image 
          src="/colleagues.jpg" 
          alt="Startup Studio Teamwork" 
          width={1280} 
          height={500} 
          className="rounded-lg w-full h-auto object-cover"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Upcoming, 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Sign up for EU Incubator", "Connect for investor talk", "SHOWCASE: Newcomers"].map((title, i) => (
            <div key={i} className="bg-white text-black p-4 rounded shadow">
              <p className="font-bold text-yellow-600">{title}</p>
              <p className="text-xs">Location + Date</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Event Reels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Member only", img: "/colleagues.jpg" },
            { title: "Speech, CEO", img: "/working.jpg" },
            { title: "Open events", img: "/colleagues.jpg" }
          ].map((item, i) => (
            <div key={i} className="bg-neutral-900 text-white overflow-hidden rounded">
              <Image src={item.img} alt={item.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-sm text-yellow-400">Click to watch</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-black p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Let’s collaborate together!</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="First name" className="border p-2 rounded" />
          <input placeholder="Company name" className="border p-2 rounded" />
          <input placeholder="Email" className="col-span-2 border p-2 rounded" />
          <input placeholder="Project or need" className="col-span-2 border p-2 rounded" />
          <button className="bg-yellow-500 text-black w-full col-span-2 py-2 rounded">Submit</button>
        </form>
      </section>

      <footer className="text-center text-sm pt-10 border-t border-neutral-700">
        <p>© 2025 Startup Studio – Built with heart and purpose.</p>
        <p className="text-yellow-300 mt-2">hello@startupstudio.com</p>
      </footer>
    </div>
  );
}
