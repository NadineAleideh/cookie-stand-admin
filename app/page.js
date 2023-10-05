import CookieStandForm from "./Components/CookieStandForm";
import LastCookie from "./Components/LastCookie";

export default function Home() {
  return (
    <main className="h-full p-4 bg-orange-200 ">
     <CookieStandForm/>
     <LastCookie/>
    </main>
  )
}

