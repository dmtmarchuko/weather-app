'use client';
import {useContext} from "react";
import { CityContext } from "../CityProvider"
import {useState, useEffect, useRef} from "react"
import {cities} from "../../data/cities"

export const Search = () => {
    const {setCity} = useContext(CityContext)
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const [active, setActive] = useState(false)
    const ref = useRef()

    const handleSearch = async () => {

        if(!text.trim()){
            setError('Enter city name')
            return
        }

        try{
            const res =  await fetch(`/api/weather?city=${text}`)
            const data = await res.json()
             
            if(data.cod === "404"){
                setError('City not found')
                return
            }
            
            setCity(text)
            setError('')
            

        }catch(err){
            setError('Server error')
        }
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            handleSearch()
        }
    }

    const results = text.trim()? cities.filter((city) => city.name.toLowerCase()
    .includes(text?.trim().toLowerCase())): []

    useEffect(() => {
        function handleClickOutside(e){
            if(!ref.current.contains(e.target)){
                setActive(false)
            } 
        }
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return(
        <div className="search__div" ref={ref}>
            <input id="input" className="search__input" name="searchinput" type="search" 
                placeholder="Search city" onChange={((e) => {setText(e.target.value); setError('')})}
                onKeyDown={handleKeyDown} onFocus={() => setActive(true)}/>

            <p className={`search__error ${error? '': 'visualy-hidden'}`}>{error}</p>
            
            <ul className={`search__ul ${text.trim()? '': 'visualy-hidden'} 
            ${results[0]? '': 'visualy-hidden'} ${active? '' : 'visualy-hidden'}`}>
                {active && results && results.map((city) => <li onClick={() => setCity(city.name)} className="search__li" key={city.id}>{city.name}</li>)}
            </ul>
        </div>
    )
}