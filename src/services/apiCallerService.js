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
        var response = ""

        const config = {
            headers: {
                // Add any auth token here
                'Authorization': 'Bearer ' + this.token,
            }
        }
    
        //let res = await axios(config).then(res => console.log(res))
        try{
            const res = await axios.get(this.computeUrl(idPost), config)
            console.log(res);
        }catch(err){
            console.log(err)
        }

        /*axios({

            // Endpoint to send files
            url: this.computeUrl(idPost),
            method: "GET",
            headers: {
                // Add any auth token here
                Authorization: 'Bearer ' + this.token,
            }
        }).then((res) => {
            console.log(resolve(res));
            //response = res;
        })
            .catch((err) => { console.log(err) });

        //return this.mapResponse(response)*/
    }

    computeUrl(idPost) {
        throw new Error("Method 'computeUrl()' must be implemented.");
    }

    mapResponse(response) {
        throw new Error("Method 'mapResponse()' must be implemented.");
    }
}


export default ApiCallerService