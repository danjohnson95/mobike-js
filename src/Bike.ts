import { Conversion, Unit } from './conversion'

export class Bike {
    bikeID: string
    distance: number
    latitude: number
    longitude: number

    private getDistanceInUnit(unit: Unit) {
        return Conversion.convert(this.distance, unit);
    }
}