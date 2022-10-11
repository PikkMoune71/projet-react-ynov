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

    getPost(idPost) {
        var response = ""
        axios({

            // Endpoint to send files
            url: this.computeUrl(idPost),
            method: "GET",
            mode: 'no-cors',
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'false',
                'Accept': '*/*',
                // Add any auth token here
                Authorization: 'Bearer ' + this.token,
            }
        }).then((res) => {
            console.log(res);
            response = res;
        })
            .catch((err) => { console.log(err) });

        //return this.mapResponse(response)
    }

    computeUrl(idPost) {
        throw new Error("Method 'computeUrl()' must be implemented.");
    }

    mapResponse(response) {
        throw new Error("Method 'mapResponse()' must be implemented.");
    }
}


export default ApiCallerService