import Not_Found from "../assets/undraw_server_down_s-4-lk.svg";

export const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full w-full my-12">
                <img src={Not_Found} width={450} alt="" />
                <h1 className="font-semibold py-4">OOPS! Not Found</h1>
            </div>
        </>
    )
}
