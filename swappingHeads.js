// Definition for singly-linked list node
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    // If list is empty or has only one node, return as is
    if (!head || !head.next) {
        return head;
    }
    
    // Store pointer to next node
    let next = head.next;
    
    // Recursively swap rest of the list
    let rest = swapPairs(next.next);
    
    // Connect current node to the rest of swapped list
    head.next = rest;
    
    // Connect next node to current node
    next.next = head;
    
    // Return new head after swap
    return next;
}

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array for testing
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let test1 = createLinkedList([1,2,3,4]);
console.log(linkedListToArray(swapPairs(test1))); // [2,1,4,3]

let test2 = createLinkedList([]);
console.log(linkedListToArray(swapPairs(test2))); // []

let test3 = createLinkedList([1]);
console.log(linkedListToArray(swapPairs(test3))); // [1]

let test4 = createLinkedList([1,2,3]);
console.log(linkedListToArray(swapPairs(test4))); // [2,1,3]