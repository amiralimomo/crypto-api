//app key 49f08524f0b8208f3b074ea82883e93e
class CryptoAPI{
    constructor(){
        this.apiKey='49f08524f0b8208f3b074ea82883e93e'
    }
   async queryAPI(currency,cryptocurrency){
        let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&ids=${cryptocurrency}&interval=1h,1d,7d,30d&convert=${currency}`
        //console.log(url)
        //fetch
        const response=await fetch(url)
        const result=await response.json()
        return {
            result
        }
    }
}