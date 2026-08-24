import { ComingSoon } from "@/components/pages/book/coming_soon";
import { Share } from "@/components/pages/book/share";
import { About } from "@/components/pages/book/About";
import { Reviews } from "@/components/pages/book/reviews";


export default function Book() {
  return (
    <>
        <About/>
        <Reviews/>
        {/* starts */}
        <Share/>
        <ComingSoon/>
    </>
  );
}