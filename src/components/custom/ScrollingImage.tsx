import in_love_img from "../../assets/in_love.jpg"
import yes_img from "../../assets/yes.jpg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const carouselImages = [
  {
    src: in_love_img,
  },
  {
    src: yes_img,
  },
  {
    src: in_love_img,
  },
  {
    src: yes_img,
  },
  {
    src: in_love_img,
  },
]

export default function ScrollingImage() {  
  return (
    <div className="h-screen w-screen">
      <Carousel className="max-w-[50%] ml-[25%] mt-[13%]" opts={{ dragFree: true, loop: true}} >
        <CarouselContent>
          {carouselImages.map((element, index) => (
            <CarouselItem key={index}>
                <Card>
                  <CardContent>
                    <img
                      src={element.src}
                      alt="A picture of the couple"
                      className={`w-300 h-140 object-contain rounded-xl`}
                    />
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
      
  );
}
