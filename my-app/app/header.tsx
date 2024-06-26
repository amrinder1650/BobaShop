import Link from "next/link";

export default function Header() {

  return (
    <nav className="bg-gray-800 flex justify-between items-center h-20 p-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
      <p className="text-white-50 ml-4 font-semibold mr-auto">Toco Tea</p>
      <ul className="flex gap-6 list-none">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="https://food.google.com/chooseprovider?restaurantId=/g/11qgjrtm0j&g2lbs=AIQllVy8sSJha1eKy1D2BNEfE8NH_q9HMLaNGrD2s28lOZ-3iXmtVuDmoyCGT90lWVdHdT0o-ipf9-v6ieHv2ylMOxVX3tRdG_lz2RxfGI1lVwj8EFps36X9_tp-0v1yvjje-Pm-80gN&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=CDAWZtvxIM2Twt0PlfuWQA&ei=CDAWZtvxIM2Twt0PlfuWQA&fo_s=OA&opi=89978449&foub=mcpp&orderType=2&sei=CcvpGENHfyq7EekjSY7uG639&utm_campaign&utm_source=search">ORDER</Link>
      </ul>
    </nav>
  );
}
