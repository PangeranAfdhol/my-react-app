import { useSelector } from "react-redux"
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useEffect, useState } from "react"
import { DarkMode } from "../../context/DarkMoode"
import { useContext } from "react"
import { useTotalPrice } from "../../context/TotalPriceContext"

const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href="/login"
}

const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)
    const {total} = useTotalPrice()

    useEffect (() => {
        const sum = cart.reduce (( acc, item ) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])
    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">{username}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
        
        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
            Item: {totalCart} | price : $ {total}
        </div>
        <Button className="bg-black px-10 m-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}> {isDarkMode ? "Light" : "Dark"}</Button>
        </div>
    )
}
export default Navbar