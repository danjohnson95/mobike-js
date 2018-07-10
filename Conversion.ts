export enum Unit {
    Meters,
    Kilometers,
    Miles,
    Yards,
    Feet
}

export class Conversion {
    public static convert (unit: Unit, value: number): number {
        switch (unit) {
            case Unit.Meters:
                return value
            case Unit.Kilometers:
                return this.convertMetersToKilometers(value)
            case Unit.Miles:
                return this.convertMetersToMiles(value)
            case Unit.Yards:
                return this.convertMetersToYards(value)
            case Unit.Feet:
                return this.convertMetersToFeet(value)
        }
    }

    private static convertMetersToKilometers (value: number): number {
        return Number((value * 0.001).toFixed(3))
    }

    private static convertMetersToMiles (value: number): number {
        return Number((value * 0.000621371).toFixed(3))
    }

    private static convertMetersToYards (value: number): number {
        return Number((value * 1.09361).toFixed(3))
    }

    private static convertMetersToFeet (value: number): number {
        return Number((value * 3.28084).toFixed(3))
    }
}
