import "../assets/css/register.css";
import { React } from "react";

function Register() {
  return (
    <section class="principal">
      <h1>REGISTER</h1>

      <form class="register-form" action="/users/register" method="POST">
        <div class="register">
          <label for="">EMAIL</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="register">
          <label for="">PASSWORD</label>
          <input type="password" name="password" id="password" />
        </div>

        <div class="boton">
          <button type="submit">REGISTER</button>
          <button type="reset">RESET</button>
        </div>
      </form>
    </section>
  );
}

export default Register;