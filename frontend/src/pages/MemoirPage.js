import React, { useState, useEffect, memo} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

function MemoirPage({ match, history }) {

    let memoirId = match.params.id

    let [memoir, setMemoir] = useState(null)

    useEffect(() => {
        getMemoir()
    }, [memoirId])

    let getMemoir = async ()=> {

        if (memoirId === 'create') return
     
        let response = await fetch(`/api/memoirs/${memoirId}/`)
        let data = await response.json()
        setMemoir(data)
    } 


    let createMemoir = async ()=> {
        fetch(`/api/memoirs/create/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(memoir)
        })
    }


    let updateMemoir = async ()=> {
        fetch(`/api/memoirs/${memoirId}/update/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(memoir)
        })
    }


    let deleteMemoir = async ()=> {
        fetch(`/api/memoirs/${memoirId}/delete/`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        history.push('/')
    }


    let handleSubmit = ()=> {
        if (memoirId !== 'create' && memoir.body === '') {
            deleteMemoir()
        }else if (memoirId !== 'create') {
            updateMemoir()          
        }else if (memoirId === 'create' && memoir !== null) {
            createMemoir()
        }
        history.push('/')
    }

    return (
        <div className="memoir">
            <div className="memoir-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit}/>
                </h3>
                {memoirId !== "create" ? (
                    <button onClick={deleteMemoir}>حذف خاطره</button>
                ): (
                    <button onClick={handleSubmit}>ثبت خاطره</button>
                )}  
                
            </div>
            <textarea onChange={(e) => {setMemoir({ ...memoir, 'body':e.target.value })}} defaultValue={memoir?.body}></textarea>
        </div>
    )
}

export default MemoirPage
