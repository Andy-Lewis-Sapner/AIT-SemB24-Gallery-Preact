import { useState, useReducer } from "preact/hooks"
import Gallery from "./components/gallery"
import About from "./components/about"
import Contact from "./components/contact"
import { InitialState, reducer } from "./utils/reducer"
import { GalleryContext } from "./utils/context"
import Header from "./components/header"
import Footer from "./components/footer"

const generateImages = () => {
    const notExisting = [86, 97]
    let images = []
    for (let i = 0; i < 2; i++) {
        let imagesRow = new Set()
        while (imagesRow.size < 10) {
            let random = Math.floor(Math.random() * 100)
            if (notExisting.find((x) => x === random)) continue
            if (images.find((x) => x.includes(random))) continue
            imagesRow.add(random)
        }
        images.push(Array.from(imagesRow))
    }
    return images
}

export function App() {
    const [images, setImages] = useState(generateImages())
    const [state, dispatch] = useReducer(reducer, InitialState)

    const renderPage = () => {
        switch (state.page) {
            case "Home":
                return <Gallery data={images} />
            case "About":
                return <About />
            case "Contact":
                return <Contact />
            default:
                return (
                    <div class="w-full h-full flex justify-center items-center">
                        <h1 class="text-2xl">Loading...</h1>
                    </div>
                )
        }
    }

    return (
        <GalleryContext.Provider value={{ state, dispatch }}>
            <div class="flex flex-col min-h-[100vh] dark:bg-slate-800 bg-orange-100">
                <Header />
                {renderPage()}
                <Footer />
            </div>
        </GalleryContext.Provider>
    )
}
