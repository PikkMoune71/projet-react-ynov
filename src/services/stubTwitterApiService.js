import ApiCallerService from './apiCallerService'
import TWEET from '../resources/tweet.json'

class StubTwitterApiService extends ApiCallerService {
    computeUrl(idPost) {
        throw new Error("Method 'computeUrl()' must be implemented.");
    }

    mapResponse(response) {
        return TWEET
    }
}

export default StubTwitterApiService