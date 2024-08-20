import Button from '../Elements/Button'
import InputForm from '../Elements/Input'

const FormRegister = () => {
    return (
        <form action="">
        <InputForm label="Fullname" type="text" placeholder="Masukin Nama Kamu Disini..." name="fullname"/>
        <InputForm label="Email" type="email" placeholder="Example@gmail.com" name="email"/>
        <InputForm label="Password" type="password" placeholder="******" name="password"/>
        <InputForm label="Confirm Password" type="password" placeholder="******" name="confirmPassword"/>

        <Button classname='bg-blue-600 w-full'>Register</Button>
      </form>
    )
}

export default FormRegister