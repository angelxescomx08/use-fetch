import { useState } from "react"

export const useFetch = () => {
    const [loading, setLoading] = useState(false);

    const get = async (url: string) => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        
        return data;
    }

    return {
        loading,
        get
    }
}