import { useState } from "react"


function useLoading() {
    const [loading, setLoading] = useState(true)

    const showLoading = () => setLoading(true)

    const hideLoading = () => setLoading(false)

    const screenLoading = <div>Loading ....</div>

    return {loading, showLoading, hideLoading, screenLoading}
}

export default useLoading