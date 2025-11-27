# EC-siteデモ要件定義

## 1.目的
- EC-cubeをReactで模写し、Outputを通してReactの理解を深める。
- EC-CUBE UI再現を通し、EC-siteの基本構造を理解する。
- ポートフォリオ作成。
- レスポンシブデザイン対応（スマホ・PC 両方）

## 2. ページ構成  
- Home（サイトトップ）  
- 商品一覧ページ  
- 商品詳細ページ  
- カートページ  
- 注文確認ページ（確認画面・完了画面）  
- お問い合わせページ  
- 特定商取引法に基づく表記ページ  
- プライバシーポリシー（任意）  
- マイページ（ログイン／会員機能は任意）  

## 3. 必要機能（フロント：ユーザー側）  
以下は EC‑CUBE のデモサイトや公式機能を参考にしたもの。 :contentReference[oaicite:0]{index=0}  

### 3.1 商品機能  
- 商品一覧表示（カテゴリ分け・サムネイル表示） :contentReference[oaicite:1]{index=1}  
- 商品詳細表示（画像複数、規格選択可能） :contentReference[oaicite:2]{index=2}  
- 商品並び替え（価格順など） :contentReference[oaicite:3]{index=3}  

### 3.2 カート機能  
- 商品をカートに追加（商品一覧／詳細両方から） :contentReference[oaicite:4]{index=4}  
- カート内容の編集（数量変更、削除） :contentReference[oaicite:5]{index=5}  
- 注文確認画面（購入前見積表示：送料・手数料を含めて表示） :contentReference[oaicite:6]{index=6}  
- 注文確定（注文完了後サンクス画面） :contentReference[oaicite:7]{index=7}  

### 3.3 その他のフロント機能  
- 非会員購入（会員登録なしでも購入可能） :contentReference[oaicite:8]{index=8}  
- 配送時間指定（デモにあれば再現） :contentReference[oaicite:9]{index=9}  
- 支払い方法選択（デモで表示されていれば想定） :contentReference[oaicite:10]{index=10}  
- お問い合わせフォーム :contentReference[oaicite:11]{index=11}  
- 特定商取引法ページ（法律表記） :contentReference[oaicite:12]{index=12}  
- サイトマップ（デモにあれば／またはリンクを模写）  

## 4. 管理・運営（バックエンド想定）  
- 商品管理（商品名、価格、画像、規格、在庫） :contentReference[oaicite:13]{index=13}  
- カテゴリ管理  
- 注文管理（受注ステータス管理）  
- 顧客管理（会員情報、注文履歴）  

## 5. 非機能要件  
- レスポンシブ対応（スマホ、タブレット、PC）  
- SEO基本対応（ページタイトル・meta descriptionなど想定）  
- パフォーマンス：リストページは画像最適化を想定  
- セキュリティ：フォーム入力チェック／バリデーション  
- アクセシビリティ：リンクやフォームは tab キーで操作可能に  

## 6. API設計（想定）  
- `GET /api/products` — 商品一覧取得  
- `GET /api/products/:id` — 商品詳細取得  
- `POST /api/cart` — カートに商品を追加  
- `GET /api/cart` — カート内容取得  
- `POST /api/checkout` — 注文確定  
- `POST /api/contact` — お問い合わせ送信  

## 7. データ設計（簡易 ER 図想定）  
- Product（商品）  
  - id  
  - name  
  - price  
  - image_url  
  - stock  
- CartItem（カートアイテム）  
  - id  
  - product_id  
  - quantity  

## 8. 優先度  
- **優先度高**：Home、商品一覧、商品詳細、カート、注文確認  
- **優先度中**：お問い合わせ、特定商取引法ページ  
- **優先度低**：会員登録・マイページ（今回は時間があれば追加）

## 9. 制約・注意点  
- デモサイトの全機能を必ず再現する必要はなく、**学習目的として最低限の機能を模写**する  
- APIはモック（JSON や簡易 Flask API）でもよい  
- 実際の決済機能は実装せず、モックで代用

## 10. 成果物  
- React アプリとしての EC サイト（静的・モック API 経由）  
- Markdown による要件定義書  
- PlantUML でのコンポーネント図・ER図

