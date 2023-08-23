---
title: "Jquery Attr 函式介紹"
date: 2023-08-23T18:03:33+08:00
draft: false
tags: ['jquery', 'javascript', 'front-end']
---

attr 是 jQuery 中的方法，用於獲取或設置元素的屬性值。attr 代表 "attribute"，即元素的屬性。這個方法允許您操作元素的 HTML 屬性，例如 <span class="info">**class、id、href、src**</span> 等。

在 jQuery 中，attr() 方法有兩種使用方式：

1. **獲取屬性值：** 您可以使用 attr() 方法來獲取元素的特定屬性值。例如，$(element).attr("class") 將返回元素的 class 屬性值。
2. **設置屬性值：** 您可以使用 attr() 方法來設置元素的特定屬性值。例如，$(element).attr("class", "new-class") 將把元素的 class 屬性值設置為 "new-class"。


```js
// 獲取元素的 class 屬性值
const classValue = $("element").attr("class");

// 設置元素的 class 屬性值
$("element").attr("class", "new-class");

// 獲取元素的 href 屬性值
const hrefValue = $("a").attr("href");

// 設置元素的 src 屬性值
$("img").attr("src", "new-image.jpg");
```