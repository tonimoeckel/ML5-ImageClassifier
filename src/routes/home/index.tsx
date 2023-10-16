import panda from "./../../assets/IMG_2634.jpg";
import tiki from "./../../assets/DSC00358.jpg"
import bird from "./../../assets/IMG_0004.jpg";
import schneeleo from "./../../assets/IMG_2681.jpg";
import arabica from "./../../assets/216602-00-GPIE.jpg"
import faultier from "./../../assets/IMG_2644.jpg"
import tiki2 from "./../../assets/IMG001.jpg"
import pizza from "./../../assets/Pizza_salami_slices.jpg"
import {MLImageGrid} from "../../components/MLImageGrid";


export const HomeRoute: React.FC<{  }> = props => {
    return (
        <div>
            <MLImageGrid initImages={[
                panda,
                tiki,
                bird,
                schneeleo,
                arabica,
                faultier,
                tiki2,
                pizza
            ]}/>
        </div>

);
};
