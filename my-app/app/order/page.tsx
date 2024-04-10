'use client';
import router, { useRouter } from 'next/navigation';

export default function Ahout() {
  const router = useRouter();

  const goToOrder = () => {
    router.push('https://food.google.com/chooseprovider?restaurantId=/g/11qgjrtm0j&g2lbs=AIQllVy8sSJha1eKy1D2BNEfE8NH_q9HMLaNGrD2s28lOZ-3iXmtVuDmoyCGT90lWVdHdT0o-ipf9-v6ieHv2ylMOxVX3tRdG_lz2RxfGI1lVwj8EFps36X9_tp-0v1yvjje-Pm-80gN&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=CDAWZtvxIM2Twt0PlfuWQA&ei=CDAWZtvxIM2Twt0PlfuWQA&fo_s=OA&opi=89978449&foub=mcpp&orderType=2&sei=CcvpGENHfyq7EekjSY7uG639&utm_campaign&utm_source=search');
  };

  const goToDoordash = () => {
    router.push('https://www.doordash.com/store/toco-tea-richmond-2431826/');
  };

  const goToSeamless = () => {
    router.push('https://www.seamless.com/menu/tocotea-4801-valley-view-rd-richmond/3004463');
  };

  return(
    <div>
      <br></br>
      <div onClick={goToOrder}>Click here to order</div>
      <br></br>
      <div onClick={goToDoordash}>Click here to order through Doordash</div>
      <br></br>
      <div onClick={goToSeamless}>Click here to order through Seamless (Grubhub)</div>
    </div>
  )
}