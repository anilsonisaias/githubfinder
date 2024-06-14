import { BsSearch } from "react-icons/bs"
import { useState, KeyboardEvent } from "react"
import classes from './Search.module.css'

type SearchProps = {
    loadUser:(userName:string) => Promise<void>;
}
const Search = ({loadUser}:SearchProps) =>{
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e:KeyboardEvent) =>{
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }
    return (
    <div className={classes.search}>
        <h2>Busque por um Utilizador</h2>
        <p>Conheca seus melhores repositorios</p>
        <div className={classes.serch_container}>
        <input type="text" placeholder="Busque um utilizador" onChange={(e) =>{setUserName(e.target.value)}} onKeyDown={handleKeyDown}/>
        <button onClick={() => loadUser(userName)}>
            <BsSearch/>
        </button>
        </div>
    </div>
    )
}

export default Search