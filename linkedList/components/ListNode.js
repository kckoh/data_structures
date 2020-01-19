class ListNode {
    constructor(d){
        this.data = d
        this.next = null
    }

    appendToTail(d){
        var end = new ListNode(d)
        var n = this
        while(n.next != null){
            n = n.next
        }
        n.next = end
    }


}

export default ListNode