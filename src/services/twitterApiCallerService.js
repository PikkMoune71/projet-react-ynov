import ApiCallerService from './apiCallerService'

class TwitterApiCallerService extends ApiCallerService {
    computeUrl(idPost) {
        return this.baseUrl + 'tweets/' + idPost + '?tweet.fields=created_at,public_metrics&user.fields=description,profile_image_url&expansions=author_id'
    }

    mapResponse(response) {
        return response
    }
}

export default TwitterApiCallerService