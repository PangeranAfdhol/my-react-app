import { useContext } from "react";
import { DarkMode } from "../../context/DarkMoode";
// import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const { children, type, title } = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
 return (
  <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
    <div className="w-full max-w-xs">
      <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}> {isDarkMode ? "Light" : "Dark"}</button>
    <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
    <p className="font-medium text-slate-500 mb-8">
      Wellcome, Please enter your details</p>
    {children}
    {/* <p className="text-sm mt-5 text-center">
      {type === "login" ? "Tidak Mempunyai Akun ?" : "Sudah Mempunyai Akun?"}

      {type === "login" ? (
        <Link to="/register" className="font-bold text-blue-600"> Register </Link>
      ) : (
      <Link to="/login" className="font-bold text-blue-600"> Login </Link>
    )}
    </p> */}
  </div>
  </div>
 )
}

export default AuthLayouts