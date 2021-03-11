class Ui {
    showMessage(message, botclass) {
        const div = document.createElement('div')
        div.appendChild(document.createTextNode(message))
        div.classList = botclass
        document.querySelector('.messages').appendChild(div)
        this.removeMessage(div)
    }
    removeMessage(tag) {
        setTimeout(() => {
            tag.remove()
        }, 3000);
    }
    showResult(result, currency) {
        let currencyName = ''
        if (currency === 'USD') {
            currencyName = 'Dollor'
        }
        if (currency === 'GBP') {
            currencyName = 'Pound'
        }
        if (currency === 'EUR') {
            currencyName = 'Euro'
        }
        let HTMLTemplate = `
        <div class="card cyan darken-3">
            <div class="card-content white-text">
            <h2 class="card-title">Result</h2>
            <img style="width:50px" src="${result.logo_url}">
                <p>price of ${result.name} from ${currencyName} is ${result.price}</p>
                <p>Last Hour : ${result["1h"].price_change}</P>
                <p>Last Day : ${result["1d"].price_change}</P>
                <p>Last Mounth : ${result["30d"].price_change}</P>
             </div>
        </div>
        `
      this.showSpinner()
      this.showResultInHTML(HTMLTemplate)
    }
    showSpinner(){
        const spinner=document.createElement('img')
        spinner.src='../img/spinner.gif'
        document.querySelector('.spinner').appendChild(spinner)
    }
    showResultInHTML(result){
        setTimeout(() => {
            document.querySelector('.spinner img').remove()
            document.querySelector('#result').innerHTML=result
        }, 2000);
    }
}