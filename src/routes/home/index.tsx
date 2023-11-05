import panda from "./../../assets/IMG_2634.jpg";
import tiki from "./../../assets/DSC00358.jpg"
import bird from "./../../assets/IMG_0004.jpg";
import schneeleo from "./../../assets/IMG_2681.jpg";
import arabica from "./../../assets/216602-00-GPIE.jpg"
import faultier from "./../../assets/IMG_2644.jpg"
import tiki2 from "./../../assets/IMG001.jpg"
import pizza from "./../../assets/Pizza_salami_slices.jpg"

import shark from "../../assets/imagenet/n01491361_tiger_shark.jpg";
import snake from "../../assets/imagenet/n01734418_king_snake.jpg";
import toucan from "../../assets/imagenet/n01843383_toucan.jpg";
import tigercat from "../../assets/imagenet/n02123159_tiger_cat.jpg";
import cat from "../../assets/imagenet/n02123394_Persian_cat.jpg";
import spacebar from "../../assets/imagenet/n04264628_space_bar.jpg";
import beeeater from "../../assets/imagenet/n01828970_bee_eater.jpg";
import steel from "../../assets/imagenet/n04311004_steel_arch_bridge.jpg";
import football from "../../assets/imagenet/n03379051_football_helmet.jpg";
import pizza2 from "../../assets/imagenet/n07873807_pizza.jpg";

import {MLImageGrid} from "../../components/MLImageGrid";
import {Divider, Typography} from "antd";


const HomeRoute: React.FC<{  }> = props => {
    return (
        <div>
            <MLImageGrid uploadEnabled initImages={[

            ]}/>
            <Divider >
                <h3>Imagenet Images</h3>
            </Divider>
            <Typography.Paragraph>Dabei handelt es sich um Bilder die zum trainieren des ML5 Models verwendet wurden. Quelle: <a href={"https://github.com/EliSchwartz/imagenet-sample-images/tree/master"}>https://github.com/EliSchwartz/imagenet-sample-images/tree/master</a></Typography.Paragraph>

            <MLImageGrid initImages={[
                shark,
                beeeater,
                steel,
                cat,
                snake,
                toucan,
                tigercat,
                spacebar,
                football,
                pizza2
            ]}/>
            <Divider >
                <h3>Richtig</h3>
            </Divider>
            <MLImageGrid initImages={[
                panda,
                tiki,
                bird,

            ]}/>
            <Divider >
                <h3>Falsch</h3>
            </Divider>
            <MLImageGrid initImages={[
                schneeleo,
                arabica,
                faultier,
                tiki2,
                pizza
            ]}/>
        </div>

);
};

export default HomeRoute;