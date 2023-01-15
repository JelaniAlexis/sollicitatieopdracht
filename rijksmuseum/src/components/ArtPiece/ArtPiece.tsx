import { Link } from 'react-router-dom'
import { ArtObject } from '../../common/types'

import missingImage from '../../assets/missingImage.webp'
import './ArtPiece.scss'

type Props = {
    artObject: ArtObject
}

const ArtPiece = ({artObject}: Props) => {
    return(
        <Link to={`/artPiece/${artObject.id}`} className="artPiece">

            <div className="artPiece__imgContainer">
                <img className={`artPiece__img ${artObject.webImage.height > artObject.webImage.width ? 'tall' : 'wide'}`} src={artObject.hasImage && artObject.showImage ? artObject.webImage.url : missingImage }/>
            </div>

            <div className="artPiece__description">
                <h2 className="artPiece__title">{artObject.title}</h2>
                <p className="artPiece__p">{artObject.principalOrFirstMaker}</p>
            </div>
        </Link>
    )
}

export default ArtPiece