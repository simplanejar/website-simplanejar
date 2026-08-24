import { Hero } from "@/components/pages/home/hero";
import { Book } from "@/components/pages/home/book";
import { Videos } from "@/components/pages/home/videos";
import Simulators from "@/components/pages/home/simulators";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Book></Book>
      {/* about */}
      {/* simone */}
      <Simulators></Simulators>
      <Videos></Videos>
    </>
  );
}