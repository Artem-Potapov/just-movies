import axios from "axios";
import { useEffect, useState } from "react";

function useGetAxios(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function getData() {
            try {
                await axios.get(url).then(res => setData(res?.data?.data));
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }

        getData();
    }, [url]);

    return { data, loading, error };
}

export default useGetAxios;
