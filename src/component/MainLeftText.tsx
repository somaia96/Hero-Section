import Button from "./Button"

const MainLeftText = () => {
    const handleGetStarted = () => {
        console.log("Get Started");
        window.location.href = "/#scroll"
    }
    const handleWatchDemo = () => {
        console.log("Watch Demo");
        // window.location.href = "https://hero-section-1-dusky.vercel.app"
    }
    return (
        <div className='flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-28 text-start space-y-5'>
            <h1 className="text-3xl lg:text-5xl font-bold text-light-blue-900">Your Cute Fish</h1>
            <h2 className="lg:text-xl text-center lg:text-left text-gray-600 w-3/4">Buy A Cute Fish And Have A Free Care Program With The Right Tools And Food. Buy A Cute Fish And Have A Free Care Program With The Right Tools And Food. Visit Our Site To See Your Favourate Fish on Your Eyes .</h2>
            <div className="space-x-3 flex">
                <Button
                    onClick={handleGetStarted}>
                    Get Started
                </Button>
                <Button
                    onClick={handleWatchDemo}>
                    Watch Demo
                </Button>
            </div>
        </div>
    )
}
export default MainLeftText