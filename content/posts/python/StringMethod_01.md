---
title: "淺談 Python String .find() 函式"
date: 2023-09-04T00:00:13+08:00
draft: false
tags: ["PYTHON"]
---

## .find(val)

使用 find() 尋找第一個 val 出現的 index，如果沒有對應的值，回傳 <sapn class="success">-1</span> 

```python
ss = "Hello World!\n"
print(ss.find("World")) # 6
print(ss.find("Apple")) # -1 (如果沒有找到，回傳-1)
```

### .find(val, start, end)
在 find() 函數中提供了三個參數。
回傳 start 與 end 的閉區間尋找 val 出現的 index

```python
ss = "Hello World!\n"
print(ss.find("World", 6, 12)) # 6
print(ss.find("World", 6, 11)) # -1 (如果沒有找到，回傳-1)
```