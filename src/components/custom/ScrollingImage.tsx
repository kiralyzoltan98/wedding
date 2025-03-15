import in_love_img from "../../assets/in_love.jpg"
import yes_img from "../../assets/yes.jpg"
import toth_arpad_setany from "../../assets/toth_arpad_setany.jpg"
import lepcso from "../../assets/lepcso.jpg"
import kanape from "../../assets/kanape.jpg"
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./carousel/EmblaCarousel";

const carouselImages = [ in_love_img, toth_arpad_setany, lepcso, kanape, yes_img, ]

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

export default function ScrollingImage() {  
  return (
    <div className="mt-[20%] sm:mt-[2%]">
      <EmblaCarousel slides={carouselImages} options={OPTIONS} />
    </div>
      
  );
}
