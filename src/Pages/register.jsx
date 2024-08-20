import AuthLayouts from "../components/Layout/AuthLayouts"
import FormRegister from '../components/Fragments/FormRegister'
import { Link } from 'react-router-dom'

const RegisterPage =() => {
    return(
        <AuthLayouts title="Register">
            <FormRegister />
            <p className="text-sm text-center mt-4">Sudah mempunyai akun ?{" "} <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
        </AuthLayouts>
    )
}

export default RegisterPage