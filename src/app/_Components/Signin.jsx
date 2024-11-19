import Button from "./Button/Button"

const Signin = ({changeState}) => {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className=" bg-white container p-6 flex flex-col justify-center items-start w-[400px] border shadow-sm rounded-md">
                <h2 className="text-xl text-purple-800 font-roboto font-medium mb-5">
                    Sign in to your account
                </h2>

                <form action="">
                    <div className="mb-4">
                        <label htmlFor="" className="font-roboto text-lg font-medium text-slate-800 mb-2">Email</label>
                        <input type="email" name="email" className="py-2 px-5 border border-slate-600 outline-none rounded-md w-full ring-0 focus:ring-1 ring-purple-600 placeholder:text-slate-500 placeholder:font-roboto placeholder:font-normal placeholder:text-sm" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="font-roboto text-lg text-slate-800 font-medium mb-2">Password</label>
                        <input type="password" className="py-2 px-5 border border-slate-600 outline-none rounded-md w-full ring-0 focus:ring-1 ring-purple-600 placeholder:text-slate-500 placeholder:font-roboto placeholder:font-normal placeholder:text-sm" placeholder="Enter your password" />
                    </div>

                    <div className="mb-4">
                        <Button text='Sign in' />
                    </div>
                    <div className="mb-4">
                        <p className="text-sm font-roboto font-medium ">Don't have an account? <span className="text-sm font-roboto text-purple-800 font-medium cursor-pointer" onClick={changeState}>Sign up for free now</span></p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signin
