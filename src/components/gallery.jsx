import Header from "./header"
import Footer from "./footer"
import ImagesRow from "./imagesRow"
import MainImage from "./mainImage"

export default function Gallery({ data }) {
    return (
        <div class="grow flex flex-col max-w-[1000px] w-full mx-auto p-4">
            <div class="max-w-[600px] w-full mx-auto text-center">
                <h1 class=" text-4xl font-bold mb-4 shadow-inner shadow-orange-300 dark:shadow-slate-600 rounded-lg text-green-900 dark:text-slate-400 py-2 px-10">
                    Gallery
                </h1>
            </div>

            <MainImage />
            <table class="mx-auto">
                <tbody>
                    {data.map((row) => (
                        <ImagesRow images={row} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
