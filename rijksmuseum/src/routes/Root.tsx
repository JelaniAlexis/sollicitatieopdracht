import { SetStateAction, useState } from "react"
import { Link, Outlet, useOutletContext } from "react-router-dom"
import SearchBar from "../components/SearchBar/SearchBar"

import './Root.scss'

const Root = () => {

    const [placeholder, setPlaceholder] = useState<string>("Zoeken...")
    const [defaultValue, setDefaultValue] = useState<string>("")

    return(
        <div className="App">
            <header className="header">
                <nav className="header__navbar">
                    <Link to="/">Home</Link>
                </nav>
                <SearchBar placeholder={placeholder} defaultValue={defaultValue}/>
            </header>
            <Outlet context={[defaultValue, setDefaultValue]}/>
        </div>
    )
}

export default Root

export const useDefaultValue = () => {
    return useOutletContext<[defaultValue: string, setDefaultValue: React.Dispatch<SetStateAction<string>>]>()
}