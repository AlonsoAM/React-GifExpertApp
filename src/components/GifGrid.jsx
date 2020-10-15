import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';


const GifGrid = ({ cat }) => {
    const { data, loading } = useFetchGif(cat);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{cat}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    data.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
