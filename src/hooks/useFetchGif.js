import { useEffect, useState } from "react"
import { getGif } from '../helpers/getGif'

export const useFetchGif = (cat) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGif(cat)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })

    }, [cat])

    return state;
}