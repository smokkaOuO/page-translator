# 網頁翻譯小幫手 (Page Translator)

一個 Chrome 擴充功能，提供滑鼠停留、反白、整頁翻譯。優先使用 Chrome 內建的離線翻譯，必要時改用 Google Cloud Translation；另可用 Gemini 進行「深度查詞」（音標、情境例句、近義詞辨析）。

## 功能

- **整頁翻譯**：`Alt+T` 翻譯整頁或還原，支援雙語對照
- **反白翻譯**：反白文字後翻譯，`Alt+S` 翻譯選取文字
- **滑鼠停留翻譯**：停留在文字上顯示譯文
- **翻譯引擎**：Chrome 內建（免費、離線）與 Google Cloud Translation，可設定優先順序
- **深度查詞**（Gemini）：單字、音譯（用中文或注音拼讀音找單字）、描述（用意思找單字）三種查詢模式
- 每月 Google 字數上限、翻譯快取、排除網站

## 需求

- Chrome 138 以上
- 選用：Google Cloud Translation API 金鑰（使用 Google 引擎時）
- 選用：Gemini API 金鑰（使用深度查詞時，可於 Google AI Studio 免費取得）

只使用 Chrome 內建翻譯時，不需要任何金鑰。

## 快速安裝

1. 下載本 repo（「Code → Download ZIP」後解壓縮，或 `git clone`）。
2. 在 Chrome 開啟 `chrome://extensions`，開啟右上角「開發人員模式」。
3. 點「載入未封裝項目」，選擇 `extension` 資料夾。
4. 開啟擴充功能的選項頁，依需求設定翻譯引擎與金鑰。

完整步驟、金鑰申請方式、驗收清單與疑難排解，請見 [安裝與測試手冊](docs/安裝與測試手冊.md)。

## 目錄結構

```
extension/   擴充功能本體（可直接以「載入未封裝項目」載入）
docs/        安裝與測試手冊（Markdown 與 HTML）
```

`extension/` 內為建置後的檔案。

## 隱私與金鑰

- API 金鑰只儲存在你本機 Chrome 的擴充功能儲存空間，不會包含在本 repo 中。
- 翻譯內容會送往你所選的引擎：Chrome 內建引擎在本機處理；Google Cloud Translation 與 Gemini 會將文字送到 Google 的服務，用量計在你自己的帳號上。
- 請勿將任何 API 金鑰提交到 repo 或公開分享。
