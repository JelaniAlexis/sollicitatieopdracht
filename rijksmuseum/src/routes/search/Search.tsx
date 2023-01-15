import { useEffect, useState } from "react"
import { AxiosResponse } from "axios"
import { useLoaderData, useOutletContext } from "react-router-dom"
import { ArtObject, Collection } from "../../common/types"

import ArtPiece from "../../components/ArtPiece/ArtPiece"

import './Search.scss'
import { useDefaultValue } from "../Root"

const Search = () => {

    const [searchDefaultValue, setSearchDefaultValue] = useDefaultValue()
    const [apiData, setApiData] = useState<Collection>()
    const query = useLoaderData() as AxiosResponse<any, any>

    useEffect(() => {
        let params: {
            key: string
            p: number
            ps: number
            q: string
        }

        const responseURL = query.request.responseURL as string
        responseURL.slice(45).split("&").forEach((param: string) => {
            let keyValue: (string | number)[] = param.split("=")
            if (!Number.isNaN(parseInt(keyValue[1] as string))) keyValue[1] = parseInt(keyValue[1] as string)
            params = {
                ...params,
                [keyValue[0]]: keyValue[1]
            }
            setSearchDefaultValue(params.q)
        })
        
        setApiData(query.data)
    })

    return(
        <div className="search">
            <h1>{Intl.NumberFormat('en-NL').format(apiData?.count as number) || 0} resultaten gevonden.</h1>
            <div className="artPieces">
                {
                    apiData ?
                        apiData.artObjects.map((artObject: ArtObject, index: number) => {
                            return(
                                <ArtPiece key={index} artObject={artObject}/>
                            )
                        })
                    : <></>
                }
            </div>
        </div>
    )
}

export default Search