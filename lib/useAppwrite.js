import { useEffect, useState } from "react"
import { getAllPosts } from "./appwrite"

export const useAppwrite = (fn) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const res = await fn()

            setData(res)
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsLoading(false)
        }
        }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => fetchData()

    return { data, refetch, isLoading }
}