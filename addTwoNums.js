// using a linked list 

// defining a singly linked list
function ListNode(val, next = null){
    this.val = val;
    this.next = next;
}


function addTwoNumbers(linkedList1, linkedList2){
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;


    while(linkedList1 || linkedList2 || carry){
        let x = linkedList1 ? linkedList1.val : 0;
        let y = linkedList2 ? linkedList2.val : 0;


        // calculate sum and new carry
        let sum = x + y + carry;
        carry = Math.floor(sum/10);
        let digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next;

        linkedList1 = linkedList1 ? linkedList1.next : null;
        linkedList2 = linkedList2 ? linkedList2.next : null;
    }

    return dummy.next;
}