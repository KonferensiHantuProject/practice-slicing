const Footer = () => {
    return (
        <div className="min-h-full bg-green-700 text-center text-white mt-10">
            <div className="flex justify-around">
                <div className="p-10 text-justify">
                    <h1 className="text-2xl">Bonevian</h1>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, dolore. Ea suscipit facilis corporis et, sed aliquid velit cum, fugit nihil aperiam, itaque molestias. Nam, ad aut tempore quae eveniet deserunt distinctio voluptatibus ipsa sequi sunt. Cumque ipsa incidunt culpa!</p>
                </div>
                <div className="p-10 w-full">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="...">
                            <div>Learn</div>
                            <div className="text-slate-200 mt-2">Learn</div>
                            <div className="text-slate-200 mt-2">Learn</div>
                        </div>
                        <div class="...">
                            <div>Explore</div>
                            <div className="text-slate-200 mt-2">Explore</div>
                            <div className="text-slate-200 mt-2">Explore</div>
                            <div className="text-slate-200 mt-2">Explore</div>
                            <div className="text-slate-200 mt-2">Explore</div>
                        </div>
                        <div class="...">
                            <div>Connect</div>
                            <div className="text-slate-200 mt-2">Connect</div>
                            <div className="text-slate-200 mt-2">Connect</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 font-bold text-sm mb-10">© 2023 Copyright: Bonevian</div>
        </div>
    );
}
 
export default Footer;