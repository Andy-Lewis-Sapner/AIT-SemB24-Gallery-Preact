import { GalleryContext } from "../utils/context"
import { useContext, useState } from "preact/hooks"

export default function Header() {
    const { state, dispatch } = useContext(GalleryContext)

    const html = document.getElementsByTagName("html")[0]
    const [mode, setMode] = useState(html.classList.contains("dark") ? true : false)

    const toggleMode = () => {
        setMode(!mode)
        html.classList.toggle("dark")
    }

    return (
        <header class="bg-orange-500 text-green-300 dark:bg-gray-900 dark:text-blue-200 p-4">
            <nav class="max-w-[1000px] w-full mx-auto flex justify-between">
                <ul class="flex justify-start gap-5">
                    <li
                        class="cursor-pointer hover:text-green-500 dark:hover:text-blue-400"
                        onClick={() => {
                            dispatch({ type: "SET_PAGE", payload: "Home" })
                        }}
                    >
                        Home
                    </li>
                    <li
                        class="cursor-pointer hover:text-green-500 dark:hover:text-blue-400"
                        onClick={() => dispatch({ type: "SET_PAGE", payload: "About" })}
                    >
                        About
                    </li>
                    <li
                        class="cursor-pointer hover:text-green-500 dark:hover:text-blue-400"
                        onClick={() => dispatch({ type: "SET_PAGE", payload: "Contact" })}
                    >
                        Contact
                    </li>
                </ul>
                <label class="relative inline-flex cursor-pointer items-center">
                    <input id="switch" type="checkbox" checked={mode} class="peer sr-only" onChange={toggleMode} />
                    <label for="switch" class="hidden"></label>
                    <div class="peer h-6 w-11 rounded-full border bg-slate-800 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-gray-500 after:transition-all after:content-[''] peer-checked:bg-orange-100 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                </label>
            </nav>
        </header>
    )
}
