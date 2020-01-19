import Node from "./ListNode.js"

var n1 = new Node(7)
var n2 = new Node(5)
var temp
var n3 = new Node(0)
n3.appendToTail(0)
n3.appendToTail(0)

n1.appendToTail(1)
n1.appendToTail(6)

n2.appendToTail(9)
n2.appendToTail(2)

do {
     temp = n1.data + n2.data
    
    if (temp>= 10){
        temp = temp%10
        n3.next.data = 1
    }

    if (n3.data == 0){
        n3.data = temp
    }
    else{
        n3.data += temp
    }
    console.log(n3.data)
    n1 = n1.next
    n2 = n2.next
    n3 = n3.next
}
while(n1 != null )

console.log()