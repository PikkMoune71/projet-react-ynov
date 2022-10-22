import ApiCallerService from './apiCallerService'
import TWEET from '../resources/tweet.json'

class StubTwitterApiService extends ApiCallerService {
    computeUrl(idPost) {
        return null
    }

    mapResponse(response) {
        var random = Math.floor(Math.random() * 2)
        return TWEET[random]
    }
}

export default StubTwitterApiService