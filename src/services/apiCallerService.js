import axios from "axios";

class ApiCallerService {
    baseUrl;
    token;


    constructor(baseUrl, token) {
        if (this.constructor == ApiCallerService) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.token = token;
        this.baseUrl = baseUrl;
    }

    async getPost(idPost) {
        if (idPost === "") {
            return null
        }

        var response = ""

        /*const config = {
            headers: {
                // Add any auth token here
                'Authorization': 'Bearer ' + this.token,
                "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json"
            }
        }*/

        var res = null;

        try {
            var computedUrl = this.computeUrl(idPost)
            if (computedUrl != null)
                res = await axios.get(computedUrl)
        } catch (err) {
            return null
        }

        return this.mapResponse(res)
    }

    computeUrl(idPost) {
        throw new Error("Method 'computeUrl()' must be implemented.");
    }

    mapResponse(response) {
        throw new Error("Method 'mapResponse()' must be implemented.");
    }
}


export default ApiCallerService