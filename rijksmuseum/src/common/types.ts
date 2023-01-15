export type Collection = {
    elapsedMilliseconds: number
    count: number
    countFacets: number
    artObjects: ArtObject[]
    facets: Facet[]
}

export type ArtObject = {
    id: string
    hasImage: boolean
    headerImage: Image
    links: {
        self: string
        web: string
    }
    longTitle: string
    objectNumber: string
    permitDownload: boolean
    principalOrFirstMaker: string
    productionPlaces: string[]
    showImage: boolean
    title: string
    webImage: Image
}

export type Facet = {
    facets: {
        key: string
        value: number
    }
    name: string
    otherTerms: number
    prettyName: number
}

export type Image = {
    guid: string
    height: number
    width: number
    offsetPercentageX: number
    offsetPercentageY: number
    url: string
}