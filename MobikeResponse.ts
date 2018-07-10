interface MobikeObjectResponse {
    distId: string
    distX: number
    distY: number
    distNum: number
    distance: string
    bikeIds: string,
    biketype: number,
    type: number,
    boundary: number|null
}

export interface MobikeResponse {
    code: number
    message: string
    biketype: number
    autoZoom: boolean
    radius: number
    object: MobikeObjectResponse[]
}