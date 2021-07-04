function Node(element){
    this.element = element;
    this.next = null
}

function Linkedlist(){
    this.head = null;
    this.size = 0;
}



Linkedlist.prototype.add = function(value){
    var node = new Node(value)
    // var curr;
    // if(this.head == null){
    //     this.head = node;
    // }else{
    //     // curr = this.head
    //     // while(curr.next){
    //     //     curr = curr.next
    //     // }
    //     // curr.next = node
    //     node.next= this.head
    // }
    node.next = this.head;
    this.head = node
    this.size++
}

Linkedlist.prototype.addAtIndex = function(value,index){
    var node = new Node(value)
    let curr = this.head
    let it = 0;
    while(it < index){
        curr = curr.next
        it++
    }
    if(curr.next){
        let temp = curr.next
        curr.next = node;
        node.next = temp
    }else{
        console.log(curr)
        curr.next = node

    }
}

Linkedlist.prototype.printList = function(){
    var curr = this.head;
    while(curr){
        console.log(curr.element)
        curr = curr.next
    }
}

Linkedlist.prototype.indexOf = function(value){
    let curr = this.head
    let index = 0
    while(curr){
        if(curr.element === value){
            console.log('ele found at ',index)
            break
        }else{
            curr = curr.next
        }
        index++
    }

}

Linkedlist.prototype.remove = function(value){
    let curr = this.head
    let prev = null
    while(curr){
        if(curr.element == value){
            if(prev == null){
                this.head = curr.next
            }else{
                prev.next = curr.next
            }
        }
        prev = curr;
        curr = curr.next
    }
}

Linkedlist.prototype.removeAt = function(index){
    let curr = this.head;
    let prev = curr
    let it = 0
    while(it < index){
        prev = curr
        curr = curr.next
        it++
    }
    if(curr.next){
        prev.next = curr.next
    }    
}

Linkedlist.prototype.lengthIt = function(){
    let curr = this.head;
    let size = 0
    while(curr){
        curr = curr.next;
        size++
    }
    console.log(size,'-------size--------iterator----')
}

Linkedlist.prototype.lengthRec = function(node){
    if(node == null) return 0
    else return 1 + this.lengthRec(node.next)
}

Linkedlist.prototype.searchRec = function(node,value){
    if(node == null){
        return false
    }
    if(node.element === value){
        return true
    }
    return this.searchRec(node.next,value)
}

Linkedlist.prototype.nthNode = function(n){
    let ind = 0;
    let curr = this.head
    while(ind < n){
        curr = curr.next
        ind++
    }
    console.log(curr.element,'----',n,'--th ele---')
}

Linkedlist.prototype.midNodeTwoptr2 = function(){
    let ptr = this.head;
    let ptr2 = this.head;
    while(ptr2 && ptr2.next){
        ptr = ptr.next;
        ptr2 = ptr2.next.next
    }
    console.log(ptr.element,'-------mid data-------')
}

// Linkedlist.prototype.midNodeTwoptr1 = function(){
//     let ptr = this.head
//     let ptr2 = this.head
//     while(ptr2 && ptr2.next.next){
//         ptr = ptr.next;
//         ptr2 = ptr2.next.next
//     }
//     console.log(ptr.element,'------------mid node 1st ele-----')
// }

Linkedlist.prototype.nthNodeFromEnd = function(n){
    let ptr1 = this.head
    let ptr2 = this.head
    let it = 0;
    while(it < n){
        ptr1 = ptr1.next
        it++;
    }
    while(ptr1){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next
    }
    console.log(ptr2.element,'---------ele from n')

}

Linkedlist.prototype.noOfOccurances = function(value,node){
    
    if(node == null){
        return 0
    }
    if( node.element == value){
        return 1 + this.noOfOccurances(value,node.next)
    }
    return this.noOfOccurances(value,node.next)
}

Linkedlist.prototype.loopHash = function(node){
    var listSet = new Set()
    while(node){
        if(listSet.has(node)) return true
        else {
            listSet.add(node)
        }
        node = node.next
    }
    return false
}

Linkedlist.prototype.loopTwoPtr = function(){
    let ptr1 = this.head;
    let ptr2 = this.head;
    while(ptr2 && ptr2.next){
        
        ptr1 = ptr1.next
        ptr2 = ptr2.next.next
        if(ptr1 == ptr2){
            return true
        }
    }
    return false

}

Linkedlist.prototype.lengthOfLoop = function(){
    let p1 = this.head
    let p2 = this.head
    let len = 0
    let hasLoop = false
    while ( p1& p1.next){
        p1 = p1.next;
        p2 = p2.next.next
        if(p1 == p2){
            hasLoop = true
            break;
        }
    }
    if(hasLoop === true){
        let temp = p1
        while(temp.next && temp.next != p1){
            len++;
            temp = temp.next
        }
    
    }
    console.log(len,'---------len of loop')
}

//check if ll is palindrome





var ll = new Linkedlist()
ll.add(1)
ll.add(2)
ll.addAtIndex(4,0)
ll.addAtIndex(7,0)
// ll.printList()
ll.indexOf(5)
// ll.remove(3)
// ll.removeAt(4)
// ll.printList()
ll.lengthIt()
let len = ll.lengthRec(ll.head)
console.log('-----len rec ',len)
console.log(ll.searchRec(6),'--searching list')
ll.nthNode(2)
console.log('-------------------')
// ll.printList()
ll.midNodeTwoptr2()
// ll.midNodeTwoptr1()
ll.printList()
ll.nthNodeFromEnd(2)
let occ = ll.noOfOccurances(9,ll.head)
console.log(occ,'-----------no of')

// ll.head.next.next.next.next = ll.head
console.log(ll.loopHash(ll.head),'has loop hash')
console.log(ll.loopTwoPtr(),'has loop 2 ptr')
ll.lengthOfLoop()

