import { ReactNode } from "react"

const Button = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
    return (
        <button onClick={onClick} className="hover:scale-105 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-xs lg:text-sm p-2 lg:px-4 lg:py-2.5 text-center leading-5 rounded-md">
            {children}
        </button>
    )
}
export default Button