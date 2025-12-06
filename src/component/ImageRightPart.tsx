import fish from "../assets/fish.png";

const ImageRightPart = () => {
  return (
      <div className="flex-1 flex justify-center items-center">
            <img className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-2/3 animate-bounce"  src={fish} alt="fish" />
        </div>
  )
}

export default ImageRightPart