import { useState, useEffect } from "react"
import { usePreview } from "../contexts/PreviewContext"

function PreviewImage() {
    const { url } = usePreview()
    const [loading, setLoading] = useState(false)

    useEffect(() => setLoading(true), [url])

    const onLoad = () => setLoading(false)
    const onError = () => setLoading(false)

    const style = {
        filter: loading ? "blur(5px)" : undefined,
        opacity: loading ? 0.5 : 1,
    }

    return (
        <img
            width="600"
            alt="Generated Image"
            src={url}
            style={style}
            onLoad={onLoad}
            onError={onError}
        />
    )
}

export default PreviewImage
