// src/pages/404.tsx

import Link from 'next/link';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl text-gray mb-8">Bao is always here but he has never seen the page you are looking for</p>
      <Image
        src="https://cdn.baoopn.com/data/img/Baoo-404.png"
        alt="404 Image"
        width={300}
        height={300}
        className="rounded-full dark:border-4 dark:border-amber-50 bg-[#de7e85] mb-8"
      />
      <Link href="/" className="text-lg bg-[#de7e85] text-white py-2 px-4 rounded hover:bg-[#DF646F]">
        Back to Home
      </Link>
    </div>
  );
};

export default Custom404;