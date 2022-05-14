import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()
        async function fetchMyAPI() {
            try {

                let res = await axios.get(url, { CancelToken: ourRequest.token })
                let data = res && res.data ? res.data : []
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY')
                        return item
                    })
                }
                // reverse đảo ngược thứ tự array
                setData(data.reverse())
                setIsLoading(false)
                setIsError(false)

            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log(err.message)
                }
                else {
                    setIsError(true)
                    setIsLoading(false)
                }


            }
        }
        setTimeout(() => {
            fetchMyAPI()
        }, 3000)
        return () => {
            ourRequest.cancel('Operation canceled by the user.')
        }

    }, [url])
    return {
        data, isError, isLoading
    }
}
export default useFetch