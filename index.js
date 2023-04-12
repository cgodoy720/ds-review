// Object Oriented Programming & Building Classes (object factories)

class Person {
    constructor(name, eyeColor, hairColor='Brown'){
        this.name = name
        this.eyeColor = eyeColor
        this.hairColor = hairColor
        this.age = 0
    }

    sayHello(){
        console.log(`Hello there my name is, ${this.name}`)
    }

    greetPerson(person=''){
        // console.log(typeof person)
        if(typeof person === 'object'){
            console.log(`Hello ${person.name}, my name is, ${this.name}`)
        } else {
            console.log('Argument must be on class Person')
        }
    }

    bday(){
        this.age += 1
    }
    
}

const lou = new Person('Lou', 'Brown')
// lou.age = 1
// lou.bday()
// console.log(lou)
// lou.sayHello()


const zack = new Person('Zack', 'Blue', 'Blonde')
// console.log(zack)
// zack.sayHello()

// lou.greetPerson()



// Node Class

class Node {
    constructor(data=null){
        this.data = data
        this.next = null
    }
}

const node1 = new Node(25)
const node2 = new Node(30)
const node3 = new Node(45)

// console.log(node2)


// node1.next = node2
// console.log(node1)



class LinkedList {
    constructor(head=null){
        this.head = head
    }

    insertNode(newNode){
        let node = this.head
        if(!node){
            this.head = newNode
            // return
        } else {
            while(node.next){
                node = node.next
            }
            node.next = newNode
        }

    }
}

const list = new LinkedList()
// list.top = node1

list.insertNode(node1)
list.insertNode(node3)
list.insertNode(node2)
console.log(list)
