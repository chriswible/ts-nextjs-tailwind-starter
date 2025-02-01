import { Metadata } from 'next';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Test',
};

export default function ExamplePage() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-900 text-white'>
      <section className='flex flex-col items-center gap-6 rounded-2xl bg-gray-800 p-8 shadow-lg'>
        <RiAlarmWarningFill
          size={80}
          className='text-red-500 drop-shadow-md animate-pulse'
        />
        <h1 className='text-4xl font-bold md:text-5xl'>Wow. Sexy example.</h1>
        <p className='text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <a
          href='/'
          className='mt-4 rounded-lg bg-red-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-red-600'
        >
          Back to Home
        </a>
      </section>
    </main>
  );
}
