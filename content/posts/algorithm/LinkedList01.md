---
title: "如何使用 C 語言實作Linked List"
date: 2023-11-26T22:13:35+08:00
draft: false
tags: ["C", "algorithm"]
---

## 前言

一般在宣告陣列的時候會需要定義陣列的長度，像是：<br>

```c
const int MAXN = 1005;
int main() {
    int arr[MAXN]; // 宣告一個長度為 1005 的整數陣列
}
```

陣列的記憶體是連續的，所以我們可以很容易使用迴圈遍歷陣列的每一個元素。

```c
void printArray(int *ptr, int *endptr) {
    while(ptr != endptr) {
        cout << *ptrk++ << " ";
    }
    cout << *ptr << "\n";
    return;
}
```

```output
1 2 3 4 5
```

LinkedList 是一個可以根據存放資料多寡而擴充的一種資料結構，不需要在宣告的時候就定義長度，這讓我們避免多開了不必要的記憶體。
<br>
它由節點（Node）組成，每個節點包含數據和一個指向下一個節點的指針。鏈表有幾種主要的類型，包括單向鏈表、雙向鏈表和循環鏈表。這裡列舉一下鏈表的優缺點：

### 優點

1. 動態內存分配： 鏈表的大小可以在運行時動態調整，因此不需要在一開始就分配固定大小的內存。這使得鏈表更靈活，可以有效地利用內存。

2. 插入和刪除操作高效： 插入和刪除節點的操作在鏈表中比較高效。對於單向鏈表，如果你有指向插入位置的指針，可以在 O(1) 時間內完成插入操作。刪除操作也類似，只需調整相鄰節點的指針即可。

3. 不需要預先分配空間： 與數組（Array）不同，鏈表不需要事先分配空間，因此在添加元素時不需要考慮容量的問題。
   高度擴充性

### 缺點

1. 隨機訪問效率低： 訪問鏈表中的某一個元素需要從頭部開始遍歷，直到找到所需元素。這導致鏈表的隨機訪問效率較低，時間複雜度為 $O(n)$。

2. 線性存儲： 鏈表中的元素在內存中並不是連續存放的，這可能導致對緩存的效率較低。

## 實作 LinkedList

### 定義 Struct

你需要先定義一個結構來儲存節點(Node)以及鏈結(Link)。

```c
typedef struct Node {
  int data; // other variable
  struct Node *nextNode;
}Node;
```

### 頭節點與 malloc

宣告一個頭節點，他會是 LinkedList 的第一個元素，並且指向下一個。
<br>
我們可以用 malloc 分配一個 Node 空間給 head 。

```c
Node *head = (Node *) malloc(sizeof(Node)); // 強制轉型成 (Node *) 型態
```

### 指向下一個節點

宣告三個 Node a 和 b 和 c，為 a $\rightarrow$ b $\rightarrow$ c。
<br>

#### 方法一

```c
int main() {
    Node *a = (Node *) malloc(sizeof(Node));
    a -> data = 1;
    Node *b = (Node *) malloc(sizeof(Node));
    b -> data = 2;
    a -> nextNode = b;
    Node *c = (Node *) malloc(sizeof(Node));
    c -> data = 3;
    b -> nextNode = c;
    c -> nextNode = NULL;
    return 0;
}
```

#### 方法二

```c
int main() {
  Node *a = (Node*) malloc(sizeof(Node));
  a -> data = 1;
  a -> nextNode = (Node*) malloc(sizeof(Node));
  a = a -> nextNode;
  a -> data = 2;
  a -> nextNode = (Node*) malloc(sizeof(Node));
  a -> data = 3;
  a -> nextNode = NULL;
  return 0;
}
```

### 實作 n 個節點的 LinkedList

{{< spoiler "解答">}}

```c
#include<stdio.h>
#include<stdlib.h>

typedef struct Node {
  int val;
  struct Node * nextNode;
} Node;


int main() {
  Node *head = (Node *)malloc(sizeof(Node));
  int n;
  scanf("%d", &n);
  if(!n) return 0;

  Node *current = head;
  current -> val = 1;
  for(int i = 2; i <= n; i++) {
    current -> nextNode = (Node *)malloc(sizeof(Node));
    current = current -> nextNode;
    current -> val = i;
  }

  for(; head; head = head -> nextNode) {
    printf("%d\n", head -> val);
  }
  return 0;
}
```

{{< /spoiler >}}
