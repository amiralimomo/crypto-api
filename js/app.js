//classes
const cryptoAPI=new  CryptoAPI()
const ui=new Ui()
//variables
const form=document.querySelector('#form')
//listeners
listeners()
function listeners(){
    form.addEventListener('submit',getValueations)
}
//functions
function getValueations(e){
    e.preventDefault()
    const currency=document.querySelector('#currency').value
    const cryptocurrency=document.querySelector('#cryptocurrency').value
    if(cryptocurrency===''||currency===''){
        ui.showMessage('enter all fields','darken-4 deep-orange card-panel')
        console.log('if')
    }else{
       cryptoAPI.queryAPI(currency,cryptocurrency)
       .then(res=>{ui.showResult(res.result[0],currency)})
    }
}