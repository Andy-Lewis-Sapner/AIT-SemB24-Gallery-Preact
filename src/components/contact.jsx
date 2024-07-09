export default function Contact() {
    return (
        <div class="grow max-w-[600px] w-full mx-auto justify-center items-center dark:bg-slate-800">
            <form class="flex flex-col">
                <div class="w-full mx-auto text-center mt-4">
                    <h1 class="text-4xl font-bold mb-4 shadow-inner shadow-orange-300 dark:shadow-slate-600 rounded-lg text-green-900 dark:text-slate-400 py-2 px-10">
                        Contact
                    </h1>
                </div>
                <input
                    type="text"
                    placeholder="Name"
                    class="border-2 border-orange-500 dark:border-gray-800 text-amber-800 dark:text-white bg-orange-100 dark:bg-gray-500 mb-2 pl-1 rounded-md"
                />
                <input
                    type="email"
                    placeholder="Email"
                    class="border-2 border-orange-500 dark:border-gray-800 text-amber-800 dark:text-white bg-orange-100 dark:bg-gray-500 mb-2 pl-1 rounded-md"
                />
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    class="border-2 border-orange-500 dark:border-gray-800 text-amber-800 dark:text-white bg-orange-100 dark:bg-gray-500 mb-2 pl-1 rounded-md"
                ></textarea>
                <button
                    type="button"
                    class="bg-orange-500 dark:bg-gray-500 text-green-300 dark:text-white rounded-xl max-w-[100px] w-full mx-auto hover:bg-orange-400 dark:hover:bg-gray-400"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
