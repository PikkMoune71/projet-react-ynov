import ApiCallerService from './apiCallerService'

class TwitterApiCallerService extends ApiCallerService {
    computeUrl(idPost) {
        return this.baseUrl + 'tweet/' + idPost// + '?tweet.fields=created_at,public_metrics&user.fields=description,profile_image_url&expansions=author_id,referenced_tweets.id,attachments.media_keys&media.fields=url'
    }


    async mapResponse(response) {
        response = response.data
        if (response == null)
            return response

        let regex = /https:\/\/t\.co\/[A-Za-z0-9]+/i;

        response.data.text = response.data.text.replace(regex, '')

        if (response.includes.tweets != null) {
            var cpt = 0
            response.quoteTweets = []
            while (cpt < response.includes.tweets.length) {
                response.quoteTweets.push(await this.getPost(response.includes.tweets[cpt].id))
                cpt++
            }
        }

        return response

    }
}

export default TwitterApiCallerService