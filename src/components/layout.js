import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <header className="flex justify-center md:justify-start py-12 px-16 bg-primary">
        <h1 className="font-bold text-xl text-black uppercase tracking-widest">fructus studio</h1>
      </header>
      <main className="bg-primary flex flex-col justify-center items-center w-full py-2 md:py-8" style={{
        minHeight: 'calc(100vh - 124px)',
      }}>{children}</main>
    </div>
  )
}