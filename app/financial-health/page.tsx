import { AboutResult } from "@/components/pages/financial-health/about_result";
import { StepsResults } from "@/components/pages/financial-health/steps_result";

export default function financialHealth(){
    return(
        <>  
            {/* about */}
            <AboutResult/>
            <StepsResults/>
            {/* book */}
        </>
    );
}