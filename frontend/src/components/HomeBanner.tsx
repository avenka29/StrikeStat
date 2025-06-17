import { GiPunch } from "react-icons/gi";
import BlurText from "./BlurText";
const HomeBanner = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div className="grid grid-cols-1 bg-black text-center rounded-sm p-2">
            {/* <h1 className="text-6xl text-white font-mono">Strike Stat</h1> */}
            <BlurText
                text="Strike Stat"
                delay={300}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-6xl mb-8 text-center font-mono text-white mx-auto"
            />
            <hr className="border-t-[4px] border-white w-1/3 mx-auto" />
            <div className="flex justify-between items-center w-full max-w-md mx-auto text-white">
                <div className="grid grid-cols-2">
                <h1 className="text-2xl font-mono">MMA Analytics Done right</h1>
                <GiPunch size={150}/>
                </div>
            </div>
            <h1>Text</h1>
        </div>
    )
}

export default HomeBanner