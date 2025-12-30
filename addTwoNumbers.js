/*
2. Add Two Numbers [Medium]
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

//linkedlist
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

//Solution Function
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0); // fake head
    //Why create dummy?
    //No need to worry about is this the first node? / Do I need to create head?
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

//PrintList
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" → "));
}

// =========================
// Test Case 1
// 342 + 465 = 807
// =========================
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result1 = addTwoNumbers(l1, l2);
printList(result1); // Expected: 7 → 0 → 8

// =========================
// Test Case 2
// 999 + 1 = 1000
// =========================
let a1 = new ListNode(9, new ListNode(9, new ListNode(9)));
let a2 = new ListNode(1);

let result2 = addTwoNumbers(a1, a2);
printList(result2); // Expected: 0 → 0 → 0 → 1