import Head from "next/head"

import { PreviewContextProvider } from "../contexts/PreviewContext"
import PreviewForm from "../components/PreviewForm"
import PreviewImage from "../components/PreviewImage"

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>GoAbroad `og:image` Generator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>GoAbroad `og:image` Generator</h1>
                <PreviewContextProvider>
                    <PreviewForm />
                    <PreviewImage />
                </PreviewContextProvider>
            </main>
        </div>
    )
}
