import { Heading } from "../components/Heading"
import { Input } from "../components/Input/input"

export const LoginPage = () =>{
  return(
    <>
      <Heading text="Login"/>
    <form action=''>
      <Input inputPlaceholder={"Login"} InputType={"text"}/>
      <br />
      <Input inputPlaceholder={"Password"} InputType={"password"}/>
      <br />
      <button>submit</button>
    </form>
    </>
  )
}