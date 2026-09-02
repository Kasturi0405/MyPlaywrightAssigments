const browserVersion = "Chrome" //global variable
function getBrowserVersion(){
    
    if(browserVersion=='Chrome'){
        let browserVersion = 'v150'//block variable
        console.log("Inside function & inside block", browserVersion)
    }
    console.log("Inside function & outside block", browserVersion)
}

getBrowserVersion()