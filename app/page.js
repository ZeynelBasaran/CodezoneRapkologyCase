import HeroSection from "../components/home/HeroSection";
import Trendler from "../components/home/Trendler";
import Kesfet from "../components/home/Kesfet";
import Favoriler from "../components/home/Favoriler";
import HeroUnder from "../components/home/HeroUnder";

const Page = () => {
  return (
    <main className="bg-black flex flex-col justify-center items-center h-full w-full text-white font-normal font-saira">
      <HeroSection />
      <HeroUnder />
      <Trendler />
      <Favoriler />
      <Kesfet />
    </main>
  );
};

export default Page;
