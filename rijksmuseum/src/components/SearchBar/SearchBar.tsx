import { Form } from "react-router-dom"

import './SearchBar.scss'

type Props = {
    placeholder?: string
    defaultValue?: string
}

const SearchBar = ({placeholder, defaultValue}: Props) => {

    return (
        <Form className="searchBar" method="get" action="/search">
            <input className="searchBar__input" type="text" name="query" placeholder={placeholder || "Search..."} defaultValue={defaultValue || ""}/>
            <button className="searchBar__submit" type="submit">&rarr;</button>
        </Form>
    )
}

export default SearchBar