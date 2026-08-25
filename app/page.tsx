import { Hero } from "@/components/pages/home/hero";
import { Book } from "@/components/pages/home/book";
import { Videos } from "@/components/pages/home/videos";
import Simulators from "@/components/pages/home/simulators";
import Founder from "@/components/pages/home/founder";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Book></Book>
      {/* about */}
      <Founder/>
      <Simulators></Simulators>
      <Videos></Videos>
    </>
  );
}