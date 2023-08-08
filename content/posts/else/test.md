---
title: "Test"
date: 2023-08-08T15:38:37+08:00
draft: false
tags: []
---

## Math Test

\( 1 + 1 = 2 \)


<div>\( log_{2}10 \)</div>

When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

*   Bird
    - a
    - b
    - c
*   Magic

[This is a link test](https://www.youtube.com/watch?v=8W5BYM7bAx8&ab_channel=%E4%B8%8A%E7%8F%AD%E4%B8%8D%E8%A6%81%E7%9C%8BNSFW)

Use the <span class="info">printf()</span> function.

Use the <span class="success">printf()</span> function.

Use the <span class="warning">printf()</span> function.

Use the <span class="danger">printf()</span> function.

Use the <span class="mark">printf()</span> function.



{{< spoiler "點擊查看隐藏内容" >}}

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

{{< /spoiler >}}
