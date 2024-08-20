import { useEffect, useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import { getProducts } from "../services/product.service"
import { useLogin } from "../hooks/useLogin"
import TableCart from "../components/Fragments/TableCart"
import Navbar from "../components/Layout/Navbar"
import { DarkMode } from "../context/DarkMoode"
import { useContext } from "react"

// const products = [
//     {
//         id: 1,
//         name: "Sepatu Baru",
//         price: 1000000,
//         images: "/images/shoes-1.jpg",
//         description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fuga unde cupiditate non, ab ducimus fugit doloribus aliquid, consectetur illo officiis eos necessitatibus sint cumque voluptatum? Natus recusandae facilis mollitia!`
//     },
//     {
//         id: 2,
//         name: "Sepatu Lama",
//         price: 4000000,
//         images: "/images/shoes-2.jpg",
//         description:`Lorem ipsum dolor sit, consectetur illo officiis eos necessitatibus sint cumque voluptatum? Natus recusandae facilis mollitia!`
//     },
//     {
//         id: 3,
//         name: "Sepatu Keren",
//         price: 2000000,
//         images: "/images/shoes-3.jpg",
//         description:`Lorem ipsum dolor sit, amet consectetur adipiitia!`
//     }
// ]


const ProductsPages = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    const [products, setProducts] = useState([])
    useLogin()


    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, [])

    return (
        <>
        <Navbar />
        <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
                <div className="w-4/6 flex flex-wrap">
                {products.length > 0 && products.map((product) => (
                    <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} id={product.id} />
                    <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
                ))}</div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5">Cart</h1>
                <TableCart products={products}/>
                </div>
        </div>
        {/* <div className="mt-5 flex justify-center mb-5">
            <Counter></Counter>
        </div> */}
        </>
    )
}

export default ProductsPages