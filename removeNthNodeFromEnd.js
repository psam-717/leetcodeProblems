var removeNthFromEnd = function(head, n) {
    // Create a dummy node to handle edge cases like removing head
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    // Move fast pointer n nodes ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Remove the nth node from end
    slow.next = slow.next.next;

    return dummy.next;
};