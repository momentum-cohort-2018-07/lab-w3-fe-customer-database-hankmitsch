console.log('Write your code here!')
console.log('customers and moment are available to you.')

function tC (word) {
    return word[0].toUpperCase() + word.slice(1)
  }

class Customer {
    constructor(person) {
        this.headshot = person.picture.thumbnail;  
        this.name = tC(person.name.first) + " " + tC(person.name.last);
        this.email = person.email;
        this.address = person.location.street;
        this.address2 = tC(person.location.city) + ", " + tC(person.location.state) + ' ' + person.location.postcode;
        this.dob = moment(person.dob).format("MMM Do YYYY");
        this.registration = moment(person.registered).format("MMM Do YYYY");

    }

        getHeadshot (){
            return this.headshot
        }
        getName (){
            return this.name
        }
        getEmail (){
            return this.email
        }
        getAddress (){
            return this.address
        }
        getAddress2 (){
            return this.address2
        }
        getDOB (){
            return this.dob
        }
        getRegistration (){
            return this.registration
        }
    }
    let customerArray = []
    for (var i = 0; i<customers.length; i++){
    customerArray.push(new Customer(customers[i]))
    }
    let wrapBox = document.createElement('div')
    wrapBox.classList.add('wrapBox')
    let body = document.getElementsByTagName('body')
    let title = document.createElement('h1')
    title.classList.add('title')
    body[0].appendChild(title)
    body[0].appendChild(wrapBox)
   
    title.innerHTML = "Customer List"
    for (var i = 0; i<customerArray.length; i++){
        let customerBlock = document.createElement('div')
        customerBlock.classList.add('customerBlock')
        customerBlock.innerHTML =
        "<img class='customerHeadshot' src="+customerArray[i].getHeadshot()+">"
        +"<div class='customerName'>"+customerArray[i].getName()+"</div>"
        +"<div class='customerEmail'>"+customerArray[i].getEmail()+"</div>"
        +"<div class='customerAddress'>"+customerArray[i].getAddress()+"</div>"
        +"<div class='customerAddress2'>"+customerArray[i].getAddress2()+"</div>"
        +"<div class='customerDOB'>"+customerArray[i].getDOB()+"</div>"
        +"<div class='customerRegistration'>"+customerArray[i].getRegistration()+"</div>"
        wrapBox.appendChild(customerBlock)
    }
// wrapBox.style.display = "flex"
// wrapBox.style.flexWrap = "wrap"




   
   