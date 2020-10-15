import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    // const categories = ['One Punch', 'Dragon Ball', 'Pokemon', 'Naruto'];

    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {categories.map((cat) => (
                    // <li key={cat}>{cat}</li>
                    <GifGrid
                        key={cat}
                        cat={cat}
                    />
                ))}
            </ol>
        </>
    )
}

export default GifExpertApp
