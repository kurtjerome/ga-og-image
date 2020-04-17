import { useState, useEffect } from "react"
import { toClipboard } from "copee"

import { usePreview } from "../contexts/PreviewContext"

const BASE_URL = process.env.NOW_URL || `http://localhost:3000`

console.log(process.env)

function PreviewImage() {
    const { url } = usePreview()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!isCached(url)) {
            setLoading(true)
        }
    }, [url])

    const onLoad = () => setLoading(false)
    const onError = () => setLoading(false)

    const style = {
        filter: loading ? "blur(5px)" : undefined,
        opacity: loading ? 0.5 : 1,
    }

    return (
        <div className="preview-image-container">
            <p>Click image to copy image url.</p>
            <img
                width="600"
                alt="Generated Image"
                src={url}
                style={style}
                onLoad={onLoad}
                onError={onError}
                onClick={(e) => {
                    e.preventDefault()
                    toClipboard(BASE_URL + url)
                }}
            />
        </div>
    )
}

function isCached(src) {
    var image = new Image()
    image.src = src

    return image.complete
}

export default PreviewImage
