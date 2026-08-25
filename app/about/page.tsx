import Journey from "@/components/pages/about/journey";
import SobreNavbar from "@/components/pages/about/nav";
import Values from "@/components/pages/about/Values";
import Why from "@/components/pages/about/why";

export default function About() {
  return (
    <>
      <SobreNavbar />
      {/* about */}
      <Journey/>
      <Why/>
      <Values/>
      {/* founder */}
    </>
  );
}
