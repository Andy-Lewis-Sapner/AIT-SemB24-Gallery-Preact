import { useContext } from "preact/hooks"
import { GalleryContext } from "../utils/context"

export default function ImagesCell({ image }) {
    const { state, dispatch } = useContext(GalleryContext)
    let src = `https://picsum.photos/id/${image}/50`

    const handleClick = () => {
        dispatch({ type: "SET_IMAGE", payload: image })
    }

    return (
        <td>
            <div class="border-2 border-orange-300 dark:border-slate-700 h-[50px] w-[50px] cursor-pointer hover:border-4 mx-1 shadow-xl rounded-xl">
                <img src={src} alt="" class="rounded-lg" onClick={handleClick} />
            </div>
        </td>
    )
}
