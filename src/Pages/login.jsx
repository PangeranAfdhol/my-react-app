import AuthLayouts from "../components/Layout/AuthLayouts"
import FormLogin from '../components/Fragments/FormLogin'
import { Link } from 'react-router-dom'

const LoginPage =() => {
    return(
        <AuthLayouts title="Login">
            <FormLogin />
            <p className="text-sm text-center mt-4">Tidak mempunyai akun ? <Link to="/register" className="font-bold text-blue-600">Register</Link></p>
        </AuthLayouts>
    )
}

export default LoginPage