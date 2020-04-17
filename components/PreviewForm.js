import { usePreview } from "../contexts/PreviewContext"

function PreviewForm() {
    const preview = usePreview()

    return (
        <div className="preview-form-container">
            <div className="form-field">
                <label htmlFor="bg">Background Image</label>
                <input
                    type="text"
                    id="bg"
                    value={preview.bg}
                    onChange={(e) => preview.setBg(e.target.value)}
                    placeholder="Paste image url (e.g. http://image.com/...)"
                />
            </div>
            <div className="form-field">
                <label htmlFor="brand">Brand</label>
                <input
                    type="text"
                    id="brand"
                    value={preview.brand}
                    onChange={(e) => preview.setBrand(e.target.value)}
                    placeholder="GoAbroad.com"
                />
            </div>
            <div className="form-field">
                <label htmlFor="h1">Heading 1</label>
                <input
                    type="text"
                    id="h1"
                    value={preview.h1}
                    onChange={(e) => preview.setH1(e.target.value)}
                    placeholder="Enter an eye-catching heading"
                />
            </div>
            <div className="form-field">
                <label htmlFor="h2">Heading 2</label>
                <input
                    type="text"
                    id="h2"
                    value={preview.h2}
                    onChange={(e) => preview.setH2(e.target.value)}
                />
            </div>
        </div>
    )
}

export default PreviewForm
