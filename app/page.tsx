import { Hero } from "@/components/pages/home/hero";
import { Book } from "@/components/pages/home/book";
import { Videos } from "@/components/pages/home/videos";
import Simulators from "@/components/pages/home/simulators";
import RetirementSimulator from "@/components/pages/simulators/retirement";
import Simulator from "@/components/pages/simulators/retirement/test";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Book></Book>
      {/* about */}
      {/* simone */}
      {/* <Simulators></Simulators> */}
      <RetirementSimulator />
      <Simulator />
      <Videos></Videos>
    </>
  );
}
