---
title: "從零開始 selenium 01"
date: 2023-09-11T15:42:56+08:00
draft: false
tags: ["python", "selenium", "爬蟲"]
---

## 前言

<sapn class="info">注意事項：以下範例皆為 os 環境下實作</span>

使用 selenium 實作爬蟲有什麼好處呢？
selenium 是一個可以模擬人類操作網頁的爬蟲工具，可以在網頁中自在地穿梭。
並且，實作起來會比 Beautifulsoup 來的直觀，簡單。

本篇文章會依序帶著大家認識 selenium

## Selenium 安裝

**使用python pip 下載**

```sh
pip install selenium
```

## Webdriver 下載

```sh
brew install --cask google-drive
```

## 快速開始

### 引入函式

```py
from selenium import webdriver
```

### 開啟瀏覽器

```py
driver = webdriver.Chrome()
```

### 取得目標網站資源

```py
url = 'https://example.com/'
driver.get(url)
```

### 取得目標網站資訊

```py
title = driver.title
```

### 定位元素

```py
from selenium.webdriver.common.by import By
```

{{< table >}}
| 網頁資料定位元素 | 說明 |
| -- | -- |
| find_element(s)(By.ID, '') | 使用 id 屬性定位 |
| find_element(s)(By.NAME, '') | 使用 name 屬性定位 |
| find_element(s)(By.TAG_NAME, '')| 使用 tag_name 屬性定位 (div, span, input, button, etc.) |
| find_element(s)(By.XPATH, "//[@]") | 使用 XPATH 絕對定位 <span class='warning'>(強力推薦)</span> |
{{< /table >}}

我強烈建議使用 By.XPATH 絕對定位來定位元素
<span class='info'>以 codeforces 登入頁面為例子</span>

```html
<input id="handleOrEmail" style="width: 15em;" name="handleOrEmail" value="" />
<input class="submit" type="submit" value="Login" />
```

```py
handle_box = driver.find_element(By.XPATH, "//input[@id='handleOrEmail']")
login_button = driver.find_element(By.XPATH, "//input[@value='Login']")
```

### 點擊以及輸入事件

```py
handle_box.send_keys("mengxian0913") # 輸入事件
login_button.click() # 點擊事件
```

## 範例專案：逢甲大學搶課機器人

https://github.com/mengxian0913/Class-Grabbing-Robot
