import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from "../../assets/lotties/registerAnimation.json";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router";
const Signin = () => {
        const {signinUser} = use(AuthContext)
        const location = useLocation();
        const from = location.state || '/';
        const navigate = useNavigate();

        const handleSignin = e =>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email,password);

        //signIn  user
        signinUser(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(from);
        })
        .catch(error=>{
            console.log(error);
        })
    }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-row ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In now!</h1>

            <form onSubmit={handleSignin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="text-center lg:text-right">
          <Lottie animationData={registerLottie} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Signin;
