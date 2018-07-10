import { Bike } from './bike'
import { ApiProvider } from './ApiProvider';
import { MobikeResponse } from './MobikeResponse';

export class Mobike {

    ApiProvider: ApiProvider

    public constructor () {
        this.ApiProvider = new ApiProvider()
    }

    private responseToBike (response: MobikeResponse): Bike[]
    {
        return response.object.map((object) => {
            const bike = new Bike()

            bike.bikeID = object.bikeIds
            bike.distance = Number(object.distance)
            bike.latitude = object.distX
            bike.longitude = object.distY

            return bike
        })
    }

    public getBikesNear (latitude: number, longitude: number): Promise<Bike[]>
    {
        const response = this.ApiProvider.findBikeRequest({
            latitude: String(latitude),
            longitude: String(longitude)
        })

        return response.then((body) => {
            return this.responseToBike(body)
        })
    }
}
