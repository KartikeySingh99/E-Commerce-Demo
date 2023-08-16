import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Actions/UserAction";
import { useNavigate } from "react-router-dom";
import login_svg from "../assets/login_svg.svg";
import { toast } from "react-toastify";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { success, error } = useSelector((state) => state.user);

    const [userName, setUSerName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: userName,
            password: password
        }
        JSON.stringify(data);
        dispatch(login(data));
    }

    useEffect(() => {
        if (error) {
            alert(error);
            setUSerName("")
            setPassword("")
        }
    }, [error])

    useEffect(() => {
        if (success) {
            toast.success("Logged In Successfully!", { autoClose: 1000 });
            setUSerName("")
            setPassword("")
            navigate('/');
        }
    }, [success])


    return (
        <>
            <div className="w-full h-full flex  items-center justify-center md:px-20">
                <div className="px-4 hidden md:block">
                    <img src={login_svg} className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem]" alt="" />
                </div>
                <div className="px-4 w-1/2 flex h-[80vh]  flex-col items-center justify-center">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                                <div className="mt-2">
                                    <input type="text" id="email" name="email" placeholder="Enter User Name" value={userName} onChange={(e) => setUSerName(e.target.value)} required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none" />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
