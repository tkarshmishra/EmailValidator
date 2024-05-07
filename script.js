let result = {
    
    "tag": "",
    "free": true,
    "role": false,
    "user": "utkarshgungunsrivastavmishra",
    "email": "utkarshgungunsrivastavmishra@gmail.com",
    "score": 0.48,
    "state": "unknown",
    "domain": "gmail.com",
    "reason": "no_connect",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
  
}


submitBtn.addEventListener("click", async(e)=>{
    e.preventDefault()
    console.log("clicked")
    resultCont.innerHTML =  `<img src="Spinnew.gif" alt="" width="90px"></img>`

    let key = "ema_live_8jYXgOaH7qHS93qMx1Ki6w7evbuEEgE9w1sGP9jT"
    let email = document.getElementById("username").value


    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()

    let str = ``
    for(key of Object.keys(result)){
        if(result[key] !== "" && result[key] != " "){
            str = str + `<div>${key}: ${result[key]}</div>`
        }

       
    }
    console.log(str)
    resultCont.innerHTML = str
    

    

        
})







