export enum Unit {
    Meters,
    Kilometers,
    Miles,
    Yards,
    Feet
}

export class Conversion {
    public static convert (unit: Unit, value: number) {
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

    private static convertMetersToKilometers (value: number) {

    }

    private static convertMetersToMiles (value: number) {

    }

    private static convertMetersToYards (value: number) {

    }

    private static convertMetersToFeet (value: number) {

    }
}
