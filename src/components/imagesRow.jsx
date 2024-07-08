import ImagesCell from "./imagesCell"
export default function ImagesRow({ images }) {
    return (
        <tr>
            <div class="m-1">
                {images.map((image) => (
                    <ImagesCell image={image} />
                ))}
            </div>
        </tr>
    )
}
