import Button from "./Button"

const MainLeft = () => {
    const handleGetStarted = ()=>{
        console.log("Get Started");
        window.location.href = "/#scroll"
    }
    const handleWatchDemo = ()=>{
        console.log("Watch Demo");
        window.location.href = "https://hero-section-e0dkumy9b-somaia96s-projects.vercel.app/"

    }
    return (
        <div className='flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-28 text-start space-y-5'>
            <h1 className="text-3xl lg:text-5xl font-bold text-light-blue-900">MainHead Line</h1>
            <h2 className="lg:text-xl text-center lg:text-left text-gray-600 w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fugit perspiciatis provident consectetur architecto! Repudiandae nihil quasi quaerat dolores sed, inventore in hic nam unde, aliquam nesciunt, at ipsum? Neque.</h2>
            <div className="space-x-3 flex">
                <Button
                    onClick={handleGetStarted}>
                    Get Started</Button>
                <Button
                    onClick={handleWatchDemo}>
                    Watch Demo
                </Button>
            </div>
        </div>
    )
}
export default MainLeft