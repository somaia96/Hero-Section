import MainLeftText from "./MainLeftText"
import ImageRightPart from "./ImageRightPart"

const HeroSection = () => {
    return (
        <div className="flex py-10 flex-col rounded-2xl shadow-lg h-full lg:flex-row bg-blue-50">
            <MainLeftText />
            <ImageRightPart />
        </div>
    )
}
export default HeroSection