class LinkedList {
  constructor(node) {
    this.value = node
    this.next = null
  }

  addNode(node){
      //recursive way to addNode
    if(this.next !=null){
        this.next.addNode(node)
    }
    else{
        this.next = new LinkedList(node)
    }
    
  }

  deleteNode(head,target){
    var headCopy = head
    if (headCopy.value == target){
        return head.next
    }
    while(headCopy.next != null){
        if(headCopy.value == target){
            headCopy.next = headCopy.next.next
            return head
        }
        headCopy = headCopy.next
    }

    return head;

  }
  transverse(){
    var array =[]
    array.push(this.value)
    var copyNext = this.next
    while(copyNext !=null){
        array.push(copyNext.value)
        copyNext = copyNext.next
    }
    console.log(array)
  }
}

export default LinkedList;