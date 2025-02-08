import { Button } from './components/ui/button'
import { Carousel, CarouselItem, CarouselContent } from './components/ui/carousel'
import './index.css'

function App() {
  return (
    <>
      <h1>Hello!</h1>
      <Button onClick={() => alert('button pressed')}>Click me</Button>
      <Carousel
      opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default App
