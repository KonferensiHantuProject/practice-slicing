const Contact = () => {
    return (
        <div className="top-0 left-0 w-full px-20">
            <div className="flex bg-white p-4 mt-16">
                <div className="p-0 text-primary mb-3 mr-28">
                    <p className="font-bold text-4xl ml-2 md:ml-0">Let's Stay Connected</p>
                    <p className="mt-5 text-lg ml-2 md:ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet Ipsum</p>
                </div>
                <div className="px-3 text-primary flex items-center mb-3 justify-between">
                    <button className="text-white bg-green-500 p-2 rounded w-auto mr-5">Export Page</button>
                    <button className="bg-white p-2 rounded border-solid border-2 border-gray-100">About Us</button>
                </div>
            </div>
            <div className="flex bg-white p-4 mt-16">
                <div className="p-0 text-primary mb-3 mr-20">
                    <p className="font-bold text-4xl ml-2 md:ml-0">Let's Stay Connected</p>
                    <p className="mt-5 text-lg ml-2 md:ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet Ipsum</p>
                </div>
                <div className="px-3 text-primary mb-3">
                    <div className="block mb-6">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="username">Name</label>
                        <input className="mt-1 block w-80 rounded-md border-gray-300 shadow-sm" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="block mb-6">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Message</label>
                        <textarea className="mt-1 block w-80 rounded-md border-gray-300 shadow-sm focus:border-primary" name="message" id="message" cols="30" rows="5"></textarea>
                    </div>
                    <div className="block mb-6">
                        <button className="w-full text-white bg-green-500 p-2 rounded mr-5">Export Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;