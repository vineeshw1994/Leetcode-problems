class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function deleteDuplicates(head) {
    let current = head;
  
    while (current !== null && current.next !== null) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    return head;
  }
  
  
  function createSortedListFromArray(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummy.next;
  }
  
  
  function printList(head) {
    let current = head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
  
  
  const sortedList = createSortedListFromArray([1, 1, 2, 3, 3, 4, 5, 5]);
  const result = deleteDuplicates(sortedList);
  printList(result);
  