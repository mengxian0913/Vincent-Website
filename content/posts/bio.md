---
title: "TCGS a021~a030 + b001~b002題解"
date: 2023-08-01T00:33:59+08:00
draft: false
tags: ['alg']
---

#### 編者 : Vincent / Vicent??

## a021 : 我討厭偶數

#### **考點 : while loop**

-> **程式碼範例**


```cpp
#include<iostream>  
  
using namespace std;  
  
int main()  
  
{  
    int a;  
      
    cin>>a;  
      
    while(a%2==0)
    {  
        a=a/2;  
    }  
    cout<<a;  
      
    return 0;  
      
} 
```

### **程式碼解析**

第 12 行 : 當 a 還是偶數的時候，使用就繼續執行迴圈

第 14 行 : 把 a 除以2

---
## a022 : 細菌繁殖


#### **考點 : while loop**

-> **程式碼範例**

```cpp =
#include<iostream>
using namespace std;

int main(){
	
	int n,m,ans = 0;
	
	cin >> n >> m;
	
	while(n < m){
		n*=3;
		
		ans++;
	}
	
	cout << ans;
	
	return 0;
	
} 
```

### **程式碼解析**

題目要求**繁殖時間**

X細菌 1 分鐘 繁殖3倍 ，且每繁殖一次需要花 1 分鐘的時間



**第 10 行 :** 當 X 的細菌 n 量大於或等於 m 就應該要停止 

也可以解讀成 **當 n 還小於 m 時** 迴圈繼續。

int ans = 0; -> ans 拿來存經過的時間

---

## a023 : 3N+1

#### **考點 : while loop + if 判斷式**

-> **程式碼範例**

```cpp
#include<iostream>
using namespace std;

int  main(){
	
	int n,ans=1;
	
	cin >> n;
	
	while(n != 1){
		
		ans ++;
		
		if(n%2 != 0) n = 3*n + 1;
		
		else n = n/2;
	}
	
	cout << ans;
	
	return 0;
	
}
```
### **程式碼解析**

題目所求 : 數列總項數，所以我們在第 6 行設了一個存項數的變數    ans = 1;


我們可以把題目解讀成，此數列的**最後一項都是 1**的數列，而你給他第一項，求出數列總項數 (長度) 。
如此一來，我們就可以利用 while(n != 1) 的迴圈，讓程式跑到最後一項，並紀錄項數。

而迴圈裡的判斷式就照著題目要求做就行了!

**為什麼一開始 ans 要等於 1 ??**

-> **因為輸入的 n 也算一項喔 ~**

---

## a024 : 所有位數和

#### **考點 : while loop + 基礎數學**

-> **程式碼範例**

**解法 1**

```cpp
#include<iostream>  
using namespace std;  
  
int main()  
  
{  
    int a,b=0;
    
    cin>>a;  
      
    while(a!=0)  
    {  
        b=b+a%10;  
        a=a/10;  
                         
    }  
    cout<<b;  
      
    return 0;
    
}  
```

### **程式碼解析**

這題簡單來說，就是要我們把所有位數拆開然後加起來。

遇到一個問題就是，要怎麼把數字拆開，並且保證每個位數拆出來後，都是<10的數，其實很簡單，還記得之前教過的 mod(%) 嗎，想一下，當我們不斷的把要拆解的數字取餘數(餘數加在 b )，再將自身除以10。再配合 while 迴圈，不斷地做直到此數等於0

---

**解法 2**

#### 考點 : **string(字串) & char(字元) & array(陣列) & for loop & ascii碼**

```cpp
#include<iostream>
using namespace std;

int main(){
	
	string a;
	
	int b=0;
	
	cin >> a;
	
	for(int i=0;i<a.size();i++){
		b += a[i] - '0';
	}
	
	cout << b;
	
	return 0;
}
```


## a025 : 數字倒轉


#### **考點 : while loop & 基礎數學**

-> **程式碼範例**

```cpp
#include<iostream>
using namespace std;

int main(){
	
	int n,ans=0;
	
	cin >> n;
	
	while(n != 0){
		ans*=10;
		
		ans+=n%10;
		
		n/=10;
	}
	
	cout << ans;
	
	return 0;
}
```
### **程式碼解析**

這題時跟上一題很相似，不一樣的就只有迴圈裡做的事情，
我們設了一個變數來存取倒轉的值。

直接舉個例子好了，假如 n = 12

進到迴圈後

### ans*=10 (此時ans還是0) -> ans+=n%10 (ans變成2) -> n/=10  (n變成1) -> ans*=10 (ans變成20) -> ans+=n%10　(ans變成 21) -> n/=10　(n變成0)

### 要注意的是 第 11 行的 ans*=10 一定要在 ans+=n%10 上面

---

## a026 : 1000遍我愛你

**考點 : for loop**

-> 程式碼範例

```cpp
#include<iostream>
using namespace std;

int main(){
	int n;
	
	cin >>n;
	
	for(int i=1;i<=n;i++){
		cout << "I love you.\n";
	}
	
	return 0;
}
```

### **程式碼解析**

其實就是 for 迴圈應用。
[for loop講義](https://hackmd.io/@2021-hhsh-ic/loop?fbclid=IwAR2upv379M6OdhOucOhti32EglbsCs2_0ajRSposXJ1-pa2MGQvYnjswHYc#for-%E8%BF%B4%E5%9C%88)

---

## a027 倒數計時

**考點 : for loop**

-> 程式碼範例

```cpp
#include<iostream>
using namespace std;

int main(){
	int n;
	
	cin >> n;
	
	for(int i=n;i>=0;i--){
		cout << i << " ";
	}
	
	return 0;
}
```

### **程式碼解析**

這題的 for 迴圈因題目要求到著輸出 (n,n-1,n-2,.....,0) 及 for 迴圈需要嚴格遞減的輸出~

## a028 P(N,R)

**考點 : for loop**

-> 程式碼範例

```cpp
#include<iostream>
using namespace std;

int main(){
	
	int n,r,ans = 1;
	cin >> n >> r;
	
	for(int i=0;i<r;i++){
		ans*=n-i;
	}
	
	cout << ans;
	
	return 0;
	
}
```

**程式碼解析**

其實這題只要看**這個**

![](https://i.imgur.com/Cfc3AB0.png)

就可以寫出 for 迴圈了~

我們利用一個變數 ans = 1 來存答案 (ans = 1 是因為待會存答案的方式是利用乘法)

觀察一下，我迴圈裡寫的`ans *= n-i; `

我們以範例測資 2 為例:

input : 5 3

output : 60

迴圈跑第一次: i = 0 , ans*=n-i (ans變成 1*5 = 5)

迴圈跑第二次: i = 1 , ans*=n-1 (ans變成 5*(5-1) = 20)

迴圈跑第三次: i = 2 , ans*=n-1 (ans變成 20*(5-2) = 60)

---


## a029 連續整數相加(一)

**考點 : for loop**

-> 程式碼範例

```cpp
#include<iostream>
using namespace std;

int main(){
	int a,b,ans=0;
	
	cin >> a >> b;
	
	for(int i=a;i<=b;i++){
		
		ans+=i;
		
		if(i != b) cout << i << '+';
		
		else cout << i << '=';
	}
	
	cout << ans;
	
	return 0;
}
```

### **程式碼解析**

這題比較麻煩的應該是加號和等號的輸出吧!

不過聰明的你應該知道 if 拿出來用就萬事通ㄌ

用 if 來判斷是否輸出的是最後一個數。

然後一樣要用一個變數來存最後加總的值

---

## a030 連續整數相加(二)

**考點 : for loop**

-> 程式碼範例

```cpp
#include<iostream>
using namespace std;

int main(){
	
	int a,b,ans=0;
	
	cin >> a >> b;
	
	if(a > b){
		for(int i=a;i>=b;i--){
			
			ans+=i;
			
			if(i != b) cout << i << '+';
			
			else cout << i << '=';
		}
	}
	
	else{
		for(int i=a;i<=b;i++){
			
			ans+=i;
			
			if(i != b) cout << i << '+';
			
			else cout << i << '=';
		}
	}
	cout << ans;
	
	return 0; 
}
```
### **程式碼解析**


這題跟上一題一樣，但如果我解析只有說這樣就太壞了 :)

ㄟ... 這題全部的觀念跟上一題一樣，但要注意的是 a 是否小於 b

如果小於的話，for 迴圈就應該要向倒數一樣的輸出。

---

## b001 最後倒數

**考點 :array & for loop**

-> 程式碼範例

```cpp
#include<iostream>
using namespace std;

int arr[15];

int main(){
	int n;
	
	cin >> n;
	
	for(int i=0;i<n;i++){
		cin >> arr[i];
	}
	
	for(int i=n-1;i>=0;i--){
		cout << arr[i] << " ";
	}
	
	return 0;
}
```

### **程式碼解析**

這題我們用陣列來寫顯然會變得很簡單，因為只要利用 for 迴圈來控制陣列的 index(0 ~ n-1) 就可以輸出你想要的順序。

然後請養成好習慣，把陣列開在全域，因為全域的記憶體比區域的還大且比較穩定。

**切記!!** 不要用變數宣告陣列大小，更好的方法是看題目給你的範圍，例如這題:

![](https://i.imgur.com/MQiwAkM.png)

陣列大小就看題目給的範圍下去開就對了，然後請多開五個單位，例如程式碼 第 4 行。


多開 5 位是為了要避免溢位。

---

## b002 找最大值

**考點 :for loop & array**

-> 程式碼範例

```cpp
#include<iostream>
using namespace std;

int arr[15];

int main(){
	
	int n,m=-999,ip;
	
	cin >> n;
	
	for(int i=0;i<n;i++){
		cin >> arr[i];
	}
	
	for(int i=0;i<n;i++){
		if(arr[i] > m){
			m = arr[i];
			
			ip = i+1;
		}
	}
	
	cout << ip << " " << m;
	
	return 0;
}

```
### **程式碼解析**

這題需要一個技巧；第 8 行，我們設了兩個變數 m 和 ip，分別拿來存最大的值和最大的值的位置。

我們把值輸入到陣列裡後，再做一個 for 迴圈掃描裡面的值

在第 17~21 行 就是這題的關鍵了

我們利用變數 m 來存**目前**掃描到最大的值，如果掃描到有人比他大(例如 : arr[i])，就把 m 替換成 arr[i] 寫成 m = arr[i]，並且把位置(ip)換成 i+1 至於為甚麼要 +1 呢?  因為 i是index；我們可以想一下，假如一(串?)火車有三節車廂，我們口語會說 我坐第一節，那專業的人可能就會說，我坐(axxxx 編號) 編號的概念就像 index 啦~

---


