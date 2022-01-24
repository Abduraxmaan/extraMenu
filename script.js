// function User(name, age) {
//     this.name = name
//     this.age = age


//     this.birthYear = function () {
//         return new Date().getFullYear() - this.age
//     }
// }


// let user = new User('John', 30)

// console.log(user.birthYear());

// let user2 = new User('Alex', 20)

// console.log(user2.birthYear());



// class Human {
//     constructor(obj) {
//         this.name = obj.name
//         this.gender = obj.gender
//     }
// }

// class Man extends Human {
//     constructor(obj) {
//         super(obj)
//         this.name = 'Alex'
//         this.gender = 'М'
//     }
// }


// const human = new Human({
//     name: 'Имя',
//     gender: 'Пол'
// })

// const man = new Man({})

// console.log(human);
// console.log(man);




class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.selector)

        this.top = obj.top

        this.element.style.position = 'fixed';

        this.unit = obj.unit

        this.element.style.top = this.scroll()

        window.addEventListener('scroll', () => this.scroll())
    }


    scrollNumber() {
        if(this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            return (window.innerHeight / 100 * this.top) - this.element.clientHeight
        }
    }

    scroll() {
        this.window = this.scrollNumber()

        if(this.window - scrollY > 0) {
            this.element.style.top = this.window - scrollY + 'px'
        }else {
            this.element.style.top = 0
        }
    }
}

const myScroll = new Scroll({
    selector: '.header__nav',
    top: 100
})

class Hover {
    constructor(selector) {
        this.element = document.querySelector(selector)
        
        this.element.addEventListener('mouseover', () => this.move())
    }
    
    random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }
    
    move() {
        this.element.style.marginLeft = this.random(0, innerWidth - this.element.clientWidth) + 'px'
        this.element.style.marginTop = this.random(0, innerHeight - this.element.clientHeight) + 'px'
        this.element.style.transition = '2s'
    }
}

class Bar {
    constructor(selector) {
        this.element = document.querySelector(selector)
    }
    
}

class Open {
    constructor(selector) {
        this.element = document.querySelector(selector)
        this.open.addEventListener('click', () => {
            this.open.classList.add('extra__menu')
        }
    }
    
    //  chart() {
    //      this.element.style.position = 'fixed'
    //      this.element.style.background = 'whitesmoke'
    //      this.element.style.height = '100vh'
    //      this.element.style.left = '300px'
    //      this.element.style.width = '300px'
    //  }
}

const hover = new Hover('.header__content')
const bar = new Bar('.header__menu')
const open = new Open('.first__button')

