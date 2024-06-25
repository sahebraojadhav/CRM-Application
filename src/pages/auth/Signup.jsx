import React from 'react'

function Signup() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
    <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body flex flex-col items-center">
            <div className="w-full flex justify-center">
                <h2 className="card-title text-4xl text-white">Login</h2>
            </div>

            <div className="w-full">
                <input 
                    name="user id"
                    autoComplete="one-time-code"  
                    type="text" 
                    placeholder="user id..." 
                    className="input text-white input-bordered input-primary w-full max-w-xs" 
                />
            </div>

            <div className="w-full">
                <input 
                    name="email"
                    autoComplete="one-time-code" 
                    type="email" 
                    placeholder="email ..."
                    className="input text-white input-bordered input-primary w-full max-w-xs" 
                />
            </div>
            <div className="w-full">
                <input 
                    name="password"
                    autoComplete="one-time-code"  
                    type="password" 
                    placeholder="password" 
                    className="input text-white input-bordered input-primary w-full max-w-xs" 
                />
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn ">USER TYPE</div>
                 <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mx-0">
                     <li><a>ENGINEER</a></li>
                    <li><a>CUSTOMER</a></li>
                 </ul>
            </div>

            <div className="w-full card-actions mt-4">
                <button className="btn btn-warning w-full font-bold text-xl hover:bg-yellow-400 transition-all ease-in-out duration-300">Submit</button>
            </div>
            <p className="text-l text-white">
                Donot have an account ? 
            </p>
        </div>
    </div>
</div>
  )
}

export default Signup
