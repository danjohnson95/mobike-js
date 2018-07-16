import * as HTTP from 'https'
import * as QueryString from 'querystring'
import { MobikeResponse } from './MobikeResponse';

interface RequestOptions {
    latitude?: string
    longitude?: string
}

export class ApiProvider {

    baseUrl: string = 'mwx.mobike.com'

    public constructor (baseUrl: string = null) {
        if (baseUrl) {
            this.baseUrl = baseUrl
        }
    }

    public findBikeRequest (requestOptions: RequestOptions): Promise<MobikeResponse>
    {
        const query = QueryString.stringify(requestOptions)
        const options: HTTP.RequestOptions = {
            hostname: this.baseUrl,
            path: '/mobike-api/rent/nearbyBikesInfo.do',
            port: 443,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        return new Promise((resolve, reject) => {
            const request = HTTP.request(options, (response) => {
                let responseBody = ''

                response.setEncoding('utf8')

                response.on('data', (chunk) => {
                    responseBody += chunk
                })

                response.on('end', () => {
                    resolve(JSON.parse(responseBody))
                })
            })

            request.write(query)
            request.end()
        })
    } 
}