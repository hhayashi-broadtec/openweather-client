# openweather-client
天気情報アプリ

## 機能
- 現在の天気情報の取得
- 週間予報の表示
- 位置情報ベースの天気データ取得

## 必要なライブラリ
- React: UI構築のためのライブラリ
- Axios: HTTPリクエストを行うためのライブラリ
- React Navigation: 画面遷移を管理するためのライブラリ
- @react-native-community/geolocation: デバイスの位置情報を取得するためのライブラリ

## ディレクトリ構造
```
openweather-client/
├── App.tsx
├── .env
├── src/
│   ├── components/
│   │   ├── CurrentWeather.tsx
│   │   ├── WeeklyForecast.tsx
│   │   └── LocationWeather.tsx
│   └── navigation/
│       └── AppNavigator.tsx
```

## セットアップ手順
1. リポジトリをクローンします:
   ```
   git clone https://github.com/hhayashi-broadtec/openweather-client.git
   cd openweather-client
   ```

2. 必要なライブラリをインストールします:
   ```
   npm install
   ```

3. OpenWeather APIキーを取得し、`.env`ファイルに設定します:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

4. TypeScriptの設定を追加します:
   ```
   npm install --save-dev typescript @types/react @types/react-native
   ```

5. プロジェクトを起動します:
   ```
   npm start
   ```
