import in_love from "../../assets/in_love.jpg"

document.addEventListener("scroll", (event) => {
  console.log("scrolling")
})

export default function ScrollingImage() {

  return (
      <div className="relative w-full h-screen overflow-hidden">
          <img 
              src={in_love} 
              alt="A picture of the couple" 
              className="ml-[5%] mt-[15%] w-[90%] h-3/5 object-cover absolute object-[23%77%]"
          />
      </div>
  );
}
