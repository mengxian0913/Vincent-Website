---
title: "計概作業 5 演算法十八般武藝"
date: 2023-08-08T22:49:50+08:00
draft: false
tags: ["演算法"]
---

## [704. Binary Search](https://leetcode.com/problems/binary-search/)

### 二分搜解法 $O(log_2n)$
>因為每次搜尋都會將資料切半，所以時間複雜度為 $O(log_{2}n)$

**二分搜尋實作(左閉右閉)**

1. 將數據由小至大排序好
2. 設定左界及右界
3. 尋找中間(mid)
4. 如果數值 arr[mid] 大於 目標，將右指針移動到 mid-1
5. 如果數值 arr[mid] 小於 目標，將左指針移動到 mid+1
6. 如果數值 arr[mid] 等於 目標，回傳答案

{{< spoiler "展開顯示更多">}}
```cpp
class Solution {
public:
    int search(vector<int>& arr, int target) {
        sort(arr.begin(), arr.end());
        int Lptr = 0, Rptr = (int)arr.size()-1;

        while(Lptr <= Rptr)
        {
            long long mid = (Lptr + Rptr) / 2;
            if(arr[mid] == target) return mid;

            else if(arr[mid] < target) Lptr = mid + 1;

            else Rptr = mid - 1;
        }
        return -1;
    }
};
```
{{< /spoiler >}}

---

### 線性搜尋尋 $O(n)$

**線性搜尋實作**

1. 比較數據中每一個值

{{< spoiler "展開顯示更多">}}
```cpp
class Solution {
public:
    int search(vector<int>& arr, int target) {
        for(int i=0;i<(int)arr.size(); i++)
        {
            if(arr[i] == target) return i;
        }
        return -1;
    }
};
```
{{< /spoiler >}}


## [912. Sort an Array](https://leetcode.com/problems/sort-an-array/)


### 數據值域

![](https://i.imgur.com/7VGsI5o.png)

排序的時間複雜度主要考慮的是array的長度，題目給的最大長度為 $5\times10^{4}$

所以要選擇複雜度較低的演算法，像是 $O(n^{2})$ 就肯定不會過。

<span class="light">ps.程式 1 秒大概可以跑 $10^{9}$ 的資料量。</span>

以下介紹幾種常見的排序演算法><

---

### 泡泡排序(Bubble Sort) $O(n^2)$ <font color='#FFD306'>**TLE**</font>

![image alt](https://upload.wikimedia.org/wikipedia/commons/3/37/Bubble_sort_animation.gif)

**泡泡排序實作** 

它重複地走訪過要排序的數列，一次比較兩個元素，如果它們的順序錯誤就把它們交換過來。走訪數列的工作是重複地進行直到沒有再需要交換，也就是說該數列已經排序完成。這個演算法的名字由來是因為越小的元素會經由交換慢慢「浮」到數列的頂端。

```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& arr) {
		for(int i=(int)arr.size()-1;i>=0; i--)
		{
			for(int k=0;k<i; k++)
			{
				if(arr[k] > arr[k+1]) swap(arr[k], arr[k+1]);
			}
		}
    
    	return arr;
    }
};
```
Time Complexity Proof: <br>
$lim_{n \to \infty}[n+(n-1)+(n-2)+(n-3)+ ... + 1]=O(n^2)$

---

### 插入排序(Insertion Sort) $O(n^2)$ <font color='#FFD306'>**TLE**</font>

![image alt](https://upload.wikimedia.org/wikipedia/commons/2/25/Insertion_sort_animation.gif)

**插入排序實作**

第一個指針指向要插入的值，第二個指針尋找要插入的位置(當 第一個指針的值要放在小於等於他的值後面)，第二個指針移動的時候，如果前面條件不符合，就會將大於第一個指針值得值往後移動。

```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& arr) {
		int len = (int)arr.size();
		
		int i, j, tmp = 0;
		
		for(i = 1; i < len; i++)
		{
			tmp = arr[i];
			
			for(j = i; j > 0 && tmp < arr[j - 1]; j--)
			{
				arr[j] = arr[j-1];
			}
			
			arr[j] = tmp;
		}
		
		return arr;
    }
};
```

Time Complexity:
1. 最好的情况：最好的情况就是待排序的數據已經排好序了，这时只需要進行 $(n-1)$ 次比較操作。
2. 最壞的情况：最壞的情况就是待排序的數據序列是逆序的。此时需要進行的比較次數為 $n(n-1)/2$ 次，賦值操作是比較操作的次数 $n(n-1)/2+(n-1)$ 次。平均來說插入排序算法的時間複雜度為$O(n^2)$。<br>

<span class="light">注：插入排序不是和對於數據量比較大的排序應用。</span>

---

### 選擇排序(Selection Sort) $O(n^2)$ <font color='#FFD306'>**TLE**</font>

![image alt](https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif)

**選擇排序實作**

作法概念類似泡泡排序

```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& arr) {
		int len = (int)arr.size();
		
		int index = 0, minind = -1, minval = 1e18;
		
		for(int i = 0; i < len; i++)
		{
			minval = 1e18;
			for(int k = i; k < len; k++)
			{
				if(arr[k] < minval)
				{
					minind = k;
					minval = arr[k];
				}
			}
			
			swap(arr[minind], arr[i]);
		}
		
		return arr;
    }
};
```

---

### 合併排序(Merge Sort) $O(n\times log_{2}n)$ 

![image alt](https://upload.wikimedia.org/wikipedia/commons/c/c5/Merge_sort_animation2.gif)

<span class="info">利用分治概念進行排序</span>


<span class="warning">穩定的 $O(n\times log_{2}n)$</span>


**合併排序演算法步驟：**

1. 邊界條件：序列長度為 1 ⇒ 不用做任何事就已經排序好了。
2. 把序列從中間切成左右兩半。
3. 遞迴排序左半邊。
4. 遞迴排序右半邊。
5. 把左半邊跟右半邊的序列合併起來。

### 常數較大版本 <font color='#FFD306'>**TLE**</font>

```cpp
#define pb push_back

class Solution {
public:
    vector<int> mergesort(vector<int> arr) {
		
		int len = (int)arr.size();
	
		if(len == 1) return arr;
		
		int mid = len / 2;
		vector<int>right, left;
		
		for(int i=0; i<len; i++)
		{
			if(i < mid) left.pb(arr[i]);	
			else right.pb(arr[i]);
		}
		
		left = mergesort(left);
		right = mergesort(right);
		
		vector<int>sorted;
		int Lptr = 0, Rptr = 0;
		
		while(Lptr < (int)left.size() && Rptr < (int)right.size())
		{
 			if(left[Lptr] < right[Rptr])
			{
				sorted.pb(left[Lptr++]);
			}
			
			else
			{
				sorted.pb(right[Rptr++]);
			}
		}
		
		while(Lptr < (int)left.size())
		{
			sorted.pb(left[Lptr++]);
		}
		
		while(Rptr < (int)right.size())
		{
			sorted.pb(right[Rptr++]);
		}

		return sorted;
    }
};
```


### 常數較小版本 <font color='#8CEA00'>AC</font>
```cpp
#define pb push_back

class Solution {
public:
    void mergesort(int l, int r, vector<int>&arr) {

        // 邊 界 條 件： 陣 列 長 度 等 於 1
        if (l == r) return;
        
        // 遞 迴 排 序 左 半 邊 跟 右 半 邊
        int mid = (l+r)/2;
        mergesort(l, mid, arr);
        mergesort(mid+1, r, arr);
        
        // 合 併 左 右 兩 半 邊
        vector<int> sorted;
        int Lptr = l, Rptr = mid+1;
        
        while (Lptr <= mid && Rptr <= r) {
        
            if (arr[Lptr] < arr[Rptr]) {
                sorted.push_back(arr[Lptr]);
                Lptr++;
            } 
            
            else {
                sorted.push_back(arr[Rptr]);
                Rptr++;
            }
        
        }
        
        while (Lptr <= mid) {
            sorted.push_back(arr[Lptr]);
            Lptr++;
        }
        while (Rptr <= r) {
            sorted.push_back(arr[Rptr]);
            Rptr++;
        }
        
        for (int i = l, j = 0; i <= r; i++, j++) {
            arr[i] = sorted[j];
        }
    }

    vector<int> sortArray(vector<int> arr) {
		mergesort(0, (int)arr.size()-1, arr);
        return arr;
    }
};
```

Time Complexity Proof
我們把遞迴的過程畫出來，會發現它是一顆樹狀圖，稱之「遞迴樹」
![](https://i.imgur.com/pXcH6zw.png)
* 只要把樹上每個節點的時間複雜度加總，就可以知道合併排序的複雜度了。
* 合併兩個序列的複雜度是線性的。
* 故每個節點的複雜度為 $O(L)$，這裡的 $L$ 是指該節點對應到的序列長度。
* 用一層一層的角度來看，每層遞迴總複雜度 $O(n)$，$n$ 是指原本整個序列的大小。
* 而因為一直切一半的關係，所以遞迴總共 $O(log n)$ 層。
![](https://i.imgur.com/1nJo0ZR.png)



---

### 快速排序 (Quick Sort) $O(n\times log_{2}n)$ <font color='#FFD306'>**TLE**</font>

![image alt](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)


平均時間複雜度為 $O(n\times log_{2}n)$
但是數據如果剛好與我們目標排序規則相反，時間複雜度會退化到 $O(n^2)$


**快速排序法實作步驟**


1. 選定陣列一個位置(我習慣都取第一個) ```int n = arr[0]```
2. 小於 n 的值放左邊
3. 大於等於 n 的值放右邊
4. 左右遞迴
5. 合併

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long
#define pb push_back
#define all(aa) aa.begin(),aa.end() 

vector<int> q_sort(vector<int>& arr)
{
	int len = (int)arr.size();
		
	if(len <= 2)
	{
		if(len <= 1)
		{
			return arr;
		} 
		if(arr[0] > arr[1])
		{
			swap(arr[0], arr[1]);
		}
		return arr;
	}
		
	int now = arr[0];
	
	vector<int>left, right;
	
	for(int i=1;i<len;i++)
	{
		if(arr[i] < now) left.pb(arr[i]);
		else right.pb(arr[i]);
	}

	vector<int> left_sort = q_sort(left);
	vector<int> right_sort = q_sort(right);
	
	vector<int> sorted;
	
	for(int i=0;i<(int)left_sort.size(); i++)
	{
		sorted.pb(left_sort[i]);
	}
	
	sorted.pb(now);
	
	for(int i=0;i<(int)right_sort.size();i++)
	{
		sorted.pb(right_sort[i]);
	}
	
	return sorted;
}

void solve()
{
	int n;
	cin >> n;
	
	vector<int> arr(n);
	
	for(int i=0;i<n;i++)
	{
		cin >> arr[i];
	}
	
	vector<int> sorted = q_sort(arr);

	for(int i:sorted)
	{
		cout << i << " ";
	}
	
	cout << "\n";
	
	return;
}

signed main()
{
	ios_base::sync_with_stdio(false); cin.tie(0);
	solve();
	return 0;
}
```
Time Complexity Proof:<br>
證明方法同於合併排序


