import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from '../../assets/lotties/registerAnimation.json';
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import SocialLogin from "../SocialLogin/socialLogin";

const Register = () => {
    const {registerUser} = use(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        //create user
        registerUser(email,password)
        .then(result =>{
          console.log(result.user);
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
            <h1 className="text-5xl font-bold">Register now!</h1>
            
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name='password' type="password" className="input" placeholder="Password" />
             
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            </form>
            <div className="text-center">
                 < SocialLogin/>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-right">
          <Lottie animationData={registerLottie} loop={true}>
          </Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
