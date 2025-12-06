import MainLeft from "./MainLeft"
import SecondRight from "./SecondRight"

const HeroSection = () => {
    return (
        <div className="flex py-10 flex-col rounded-2xl shadow-lg h-full lg:flex-row bg-blue-50">
            <MainLeft />
            <SecondRight />
        </div>
    )
}
export default HeroSection