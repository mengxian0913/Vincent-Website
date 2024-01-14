---
title: "Neovim setting scss to css"
date: 2023-12-17T23:08:04+08:00
draft: false
tags: ["NEOVIM", "SCSS", "CSS"]
---

## 引言

在這篇文章中，我將探討 Neovim 使用者在編寫 SCSS 檔案時，如何進行轉譯以生成對應的 CSS 檔案，以供 HTML 渲染使用。

許多前端工程師喜歡使用 SCSS 來替代傳統的 CSS 編寫，而如果你使用的是Visual Studio Code (VSCode)，你可以透過 watch 插件輕鬆完成這項任務。然而，對於 Neovim 使用者，如何手動設定呢？

在下文中，我將分享一些 Neovim 的設定方法，讓你能夠自行進行 SCSS 到 CSS 的轉譯，以應用於你的前端專案中。

## 正文

### 安裝 Npm

首先，確保你的系統已安裝 npm（Node.js 包管理器）。如果你使用 macOS，你可以使用 Homebrew 安裝 npm：

```sh
brew install npm
```

### 安裝 Sass

接下來，安裝 Sass，一個強大的 CSS 預處理器，透過以下指令：

```sh
npm install -g sass
```

### 配置自動編譯

現在，我們將設定 Neovim 自動將 SCSS 檔案編譯成 CSS 檔案。請使用 Lua 語言編寫你的 Neovim 設定，創建一個名為 scss.lua 的檔案。

**路徑：**

```sh
./config/nvim/lua/user/plugins/scss.lua
```

在 scss.lua 中，加入以下設定：

```lua
vim.api.nvim_exec(
	[[
  autocmd BufWritePost *.scss !sass %:p %:r.css
]],
	false
)
```

這段程式碼的作用是在保存（write）SCSS檔案後，自動執行一條Shell指令，使用 Sass 將該檔案轉譯為相應的CSS檔案。這樣，你就不需要手動執行轉譯指令，Neovim將會自動處理。

這種設定方式能夠提高你的開發效率，確保在編輯SCSS時，相應的CSS檔案隨時保持最新。
