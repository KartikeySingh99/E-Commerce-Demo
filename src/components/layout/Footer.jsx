
const Footer = () => {
    return (
        <>
            <div className="mt-10">
                <div className="grid  grid-cols-3 px-6 lg:px-20">
                    <div className="flex items-center">
                        <h1 className="text-xl lg:text-3xl font-bold text-violet-500">Sell It</h1>
                    </div>

                    <div className="w-full">
                        <h1 className="text-lg lg:text-3xl font-semibold py-4">Links</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h1 className="text-lg lg:text-3xl font-semibold py-4">Resources</h1>
                        <ul>
                            <li>Categories</li>
                            <li>Products</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center py-4">
                    <p className="font-semibold text-stone-400">&copy; 2021 Sell It. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer