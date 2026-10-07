class APIClient{
    sendRequest(endpoint:string,requestbody?:string,requestStatus?:boolean):void
    sendRequest(endpoint:string):void

    sendRequest(endpoint:string,requestbody?:string,requestStatus?:boolean){
        if(requestbody!=null && requestStatus!=null){
            console.log(`Endpoint ${endpoint}, request body is ${requestbody} and request status is ${requestStatus}`)
        }
        else{
            console.log("Endpoint given is ",endpoint)
        }
    }
}

let ac=new APIClient
ac.sendRequest("http://example.com")
ac.sendRequest("http://example.com","test",true)