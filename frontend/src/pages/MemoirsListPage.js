import React, { useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const MemoirsListPage = () => {

    let [memoirs, setMemoirs] = useState([])

    useEffect(() => {

        getMemoirs()

    }, [])

    let getMemoirs = async () => {

        let response = await fetch("/api/memoirs/")
        let data = await response.json()
        setMemoirs(data)

    }

    return (
        <div className="memoirs">
            <div className="memoirs-header">
                <p className="memoirs-count">{memoirs.length}</p> 
                <h2 className="memoirs-title">خاطرات &#9782; </h2>
            </div>


            <div className="memoirs-list">

                {memoirs.map((memoir, index) =>  (
                   <ListItem key={index} memoir={memoir}/>
                ))}

            </div>
            <AddButton />
        </div>
    )
}

export default MemoirsListPage
 