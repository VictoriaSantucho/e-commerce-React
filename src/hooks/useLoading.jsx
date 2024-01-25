import {useState} from "react"
import FadeLoader from "react-spinners/FadeLoader";



function useLoading() {


    const [loading, setLoading] = useState(true)

    const CSSProperties = {
        display: "block",
        margin: "250px auto",

    };

    const override = CSSProperties
    const showLoading = () => setLoading(true)

    const hideLoading = () => setLoading(false)

    const screenLoading = <FadeLoader cssOverride={override} color="#3b6479" />

    return { loading, showLoading, hideLoading, screenLoading }
}

export default useLoading