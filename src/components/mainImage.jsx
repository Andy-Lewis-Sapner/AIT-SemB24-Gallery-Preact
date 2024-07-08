import { useContext } from "preact/hooks"
import { GalleryContext } from "../utils/context"
export default function MainImage() {
    const { state, dispatch } = useContext(GalleryContext)

    return (
        <div class="h-[300px] w-[600px] mx-auto mb-3">
            <img
                id="imageToShow"
                src={state.image ? `https://picsum.photos/id/${state.image}/600/300` : "https://picsum.photos/600/300"}
                class="rounded-lg border-4 border-orange-300 dark:border-slate-700 shadow-lg"
            />
        </div>
    )
}
