import in_love_img from "../../assets/in_love.jpg"
import yes_img from "../../assets/yes.jpg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const carouselImages = [
  {
    src: in_love_img,
    style: "object-[42%_58%]"
  },
  {
    src: yes_img,
    style: "object-[42%_58%]"
  },
  {
    src: in_love_img,
    style: "object-[42%_58%]"
  },
  {
    src: yes_img,
    style: "object-[42%_58%]"
  },
  {
    src: in_love_img,
    style: "object-[42%_58%]"
  },
]

export default function ScrollingImage() {  
  return (
    <>
      <Carousel className="w-[90%] ml-[5%] mt-[10%]">
        <CarouselContent>
          {carouselImages.map((element, index) => (
            <CarouselItem key={index}>
                <Card>
                  <CardContent className="h-150"> {/* TODO: Figure out height issues! */}
                    <img
                      src={element.src}
                      alt="A picture of the couple"
                      className="object-none object-[25%_115%] rounded-xl"
                    />
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
      
  );
}
