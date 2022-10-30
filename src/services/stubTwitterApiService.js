import ApiCallerService from './apiCallerService'
import TWEET from '../resources/tweet.json'

class StubTwitterApiService extends ApiCallerService {
    computeUrl(idPost) {
        return null
    }

    async mapResponse(response) {
        var random = Math.floor(Math.random() * TWEET.length)
        response = TWEET[random]

        let regex = /https:\/\/t\.co\/[A-Za-z0-9]+/i;

        if (response != null && response.data.text != null) {

            if (response.data.text != null) {
                response.data.text = response.data.text.replace(regex, '')
            }

            var cpt = 0
            if (response.includes.tweets != null) {
                response.quoteTweets = []
                while (cpt < response.includes.tweets.length) {
                    response.quoteTweets.push(await this.getPost(response.includes.tweets[cpt].id))
                    cpt = cpt + 1
                }
            }
        }

        console.log("jnrfdhufdhjfdiuhfdiufdhi")
        console.log(response)

        return response
    }
}

export default StubTwitterApiService