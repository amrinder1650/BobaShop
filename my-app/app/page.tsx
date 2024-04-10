'use client';
import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();

  const goToMaps = () => {
    router.push('https://www.google.com/maps/dir//Toco+Tea,+4801+Valley+View+Rd,+Richmond,+CA+94803/@37.9715656,-122.3061616,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80857783a2087461:0xed6d747da3bccc62!2m2!1d-122.2877655!2d37.9715132!3e0?entry=ttu');
  };

  return (
    <div>
      <br></br>
      <h1>TOCO TEA</h1>
      <br></br>
      <div>Toca Tea is your local boba tea shop. What sets it apart from other boba shops is the
        quality of the ingredients and the service of the committed workers.
      </div>
      <br></br>
      <div>
        ADDRESS: 4801 Valley View Rd, Richmond, CA 94803
        <svg onClick={goToMaps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
        </svg>
      </div>
      <br></br>
      <div>
        PHONE NUMBER: (510) 417-2788
      </div>
      <br></br>
      <div>
        HOURS:
        <br></br>
        Mon 8:00 AM - 9:00 PM
        <br></br>
        Tue 8:00 AM - 9:00 PM
        <br></br>
        Wed 8:00 AM - 9:00 PM
        <br></br>
        Thu 8:00 AM - 9:00 PM
        <br></br>
        Fri 8:00 AM - 9:00 PM
        <br></br>
        Sat 8:00 AM - 9:00 PM
        <br></br>
        Sun 8:00 AM - 9:00 PM
      </div>

    </div>
  );
}
