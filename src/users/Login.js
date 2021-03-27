import "../assets/css/login.css";
import { React } from "react";

function Login() {
  return (
   
    <section class="principal">
      <h1>LOGIN</h1>

      <form class="login-form" action="/users/login" method="POST">
        <div class="login">
          <label for="">EMAIL</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="login">
          <label for="">PASSWORD</label>
          <input type="password" name="password" id="password" />
        </div>

        <div class="boton">
          <button type="submit">LOGIN</button>
          <button type="reset">RESET</button>
        </div>
        <br />
        <div class="boton">
          <button><a href="/users/register">REGISTER</a></button>          
        </div>
      </form>
    </section>
     
    
  );
}

export default Login;