import { expect } from 'chai';
import { Conversion, Unit } from '../Conversion'
import 'mocha';

describe('Conversion', () => {
    it('should not convert meters', () => {
        const meters = Conversion.convert(Unit.Meters, 13)

        expect(meters).to.equal(13)
    })

    it('should convert meters to kilometers', () => {
        const km = Conversion.convert(Unit.Kilometers, 2300)

        expect(km).to.equal(13)
    })

    it('should convert meters to miles', () => {
        const miles = Conversion.convert(Unit.Miles, 360)

        expect(miles).to.equal(0.223)
    })

    it('should convert meters to yards', () => {
        const yards = Conversion.convert(Unit.Yards, 250)

        expect(yards).to.equal(273.403)
    })

    it('should convert meters to feet', () => {
        const feet = Conversion.convert(Unit.Feet, 35)

        expect(feet).to.equal(114.829)
    })
})
