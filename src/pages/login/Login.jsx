import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <form >
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input name="username" type="text" placeholder="Troudi27"/>
        <label htmlFor="">Password</label>
        <input name="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;