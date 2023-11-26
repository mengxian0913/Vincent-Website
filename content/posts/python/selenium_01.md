---
title: "從零開始 selenium 01"
date: 2023-09-11T15:42:56+08:00
draft: false
tags: ["python", "selenium", "爬蟲"]
---

## 前言

本篇文章探討 selenium 是什麼以及如何使用 selenium 爬取網站內容。

### selenium 的特色
 1. 跨瀏覽器的支持<br>
>    Selenium 支持多種主流瀏覽器，包括 Chrome、Firefox、Safari、Edge 等，這使得開發人員可以使用相同的測試腳本在不同的瀏覽器上執行測試。
2. 多語言支持<br>
>    selenium 提供多種程式語言的客戶端庫，包括 Java、Python、C#、Ruby、JavaScript 等。
3. 靈活性<br>
>    Selenium 允許開發人員模擬用戶與瀏覽器的互動，包括點擊、填寫表單、獲取元素等。
4. 支援截圖和錄影<br>
>    Selenium 可以捕獲瀏覽器操作過程的截圖，這在許多測試有幫助。

---


<sapn class="info">注意事項：以下範例皆為 macos 14.0 環境下實作</span>

## 下載瀏覽器的 WebDriver
你需要安裝一個 Web Driver (開發人員用來自動化瀏覽器行為的工具)，來當作你程式使用的瀏覽器。<br>
注意！下載的版本必須與你當前使用的瀏覽器版本一致。(這裡我選擇的是 ChromeDriver)
<br>
下載地點傳送門：(https://chromedriver.chromium.org/downloads/version-selection)
<br>
<font color="yellow">PS.你可以到 Chrome 的設定 $\rightarrow$ 關於Chrome查詢目前的版本號</font>

{{< figure src="/images/Posts/Selenium/ChromeVersion.png" alt="Chrome Version" >}}

## Selenium 函式庫安裝

**使用python3 pip3 下載**

```sh
pip3 install selenium
```

## 開始第一個 Selenium 程式

下面是一個簡單的 Selenium 範例，用來打開瀏覽器、訪問網站、找到元素。
<br>
請根據你的瀏覽器選擇相應的 WebDriver：

### WebDriver 設定

```py
chromedriver = "/opt/homebrew/bin/chromedriver"
# 這裡設定了 ChromeDriver 的路徑。ChromeDriver 是一個用於驅動 Chrome 瀏覽器的工具，你需要下載適用於你的 Chrome 版本的 ChromeDriver，然後提供它的路徑
options = webdriver.ChromeOptions()
# 創建了一個 ChromeOptions 對象，這是用來配置 Chrome 啟動選項的。你可以使用這個對象來設置各種 Chrome 的選項，例如啟用無痕模式、設置代理、設置視窗大小等。
options.add_argument("--incognito")
# 添加一個啟動選項，這裡是啟用 Chrome 的無痕模式。"--incognito" 是告訴 Chrome 啟動時進入無痕模式。
options.add_argument("headless")
# 添加一個啟動選項，這裡是啟用 Chrome 的 headless 模式。"headless" 表示無界面模式，也就是不會顯示實際的瀏覽器窗口，適用於在伺服器上運行，無需顯示瀏覽器 UI。
driver = webdriver.Chrome(options=options)
# 使用上述配置選項初始化一個 Chrome WebDriver。這個 WebDriver 將根據提供的設置來啟動 Chrome，包括無痕模式和 headless 模式。(此時，WebDriver 已被啟動了)
```

### 取得目標網站資源

```py
url = 'https://example.com/'
driver.get(url) 
# 使用 .get 來進入你要測試的網站
```

### 取得目標網站資訊

1. 取得當前站名：
    ```py
    currentTitle = driver.title 
    print("當前站名：", currentTitle)
    ```
2. 取得當前 URL：
    ```py
    current_url = driver.current_url
    print("當前網址:", current_url)
    ```
3. 取得網頁的 HTML 內容：
    ```py
    page_source = driver.page_source
    print("網頁 HTML 內容:", page_source)
    ```
除了以上的範例之外，您也可以透過定位元素，來取得你需要的內容。像是一個按鈕、一張圖片、一段文字

### 定位元素

```py
from selenium.webdriver.common.by import By # 引入標頭
```

> {{< table >}}
| 網頁資料定位元素 | 說明 |
| -- | -- |
| find_element(s)(By.ID, '') | 使用 id 屬性定位 |
| find_element(s)(By.NAME, '') | 使用 name 屬性定位 |
| find_element(s)(By.TAG_NAME, '')| 使用 tag_name 屬性定位 (div, span, input, button, etc.) |
| find_element(s)(By.XPATH, "//[@]") | 使用 XPATH 絕對定位 <span class='warning'>(強力推薦)</span> |
{{< /table >}}

<br>

下面的例子以 [**codeforces**](https://codeforces.com/) 登入頁面示範

### Codeforces 登入畫面輸入 handle 以及送出的 Html 代碼
```html
<input id="handleOrEmail" style="width: 15em;" name="handleOrEmail" value="" />
<input class="submit" type="submit" value="Login" />
```

### 使用 By.XPATH 絕對定位
```py
handle_box = driver.find_element(By.XPATH, "//input[@id='handleOrEmail']")
login_button = driver.find_element(By.XPATH, "//input[@value='Login']")
```

### 點擊以及輸入事件

```py
handle_box.send_keys("mengxian0913") # 輸入事件
login_button.click() # 點擊事件
```

--- 

## 結語
本篇文章提到了 selenium 的初階教學，然而強大的 Selenium 工能並不只有這些，所以我在未來會繼續為您介紹。 

## 範例專案：逢甲大學搶課機器人

https://github.com/mengxian0913/Class-Grabbing-Robot
