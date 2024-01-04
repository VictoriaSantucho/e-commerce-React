import { useState } from "react"
import FadeLoader from "react-spinners/FadeLoader";


function useLoading() {
    
    const [loading, setLoading] = useState(true)

    const showLoading = () => setLoading(true)

    const hideLoading = () => setLoading(false)

    const screenLoading = <FadeLoader color="#4558b4" />

    return {loading, showLoading, hideLoading, screenLoading}
}

export default useLoading