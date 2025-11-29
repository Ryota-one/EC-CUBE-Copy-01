import React, { useState } from 'react';

const MyPage = () => {
  const [formData, setFormData] = useState({
    name01: '',
    name02: '',
    kana01: '',
    kana02: '',
    postal_code: '',
    pref: '',
    addr01: '',
    addr02: '',
    phone_number: '',
    email: '',
    password: '',
    password_confirm: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('会員登録:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className=" text-3xl font-bold mb-6 text-gray-500 border-b-2 pb-3">新規会員登録</h1>

      <form onSubmit={handleSubmit} className="space-y-6 pt-5">
        {/* お名前 */}
        <div className="border-t pt-5 md:flex md:items-center md:gap-4">
          <label className="block text-sm pl-6 md:pl-1 font-medium text-gray-700 mb-2 md:whitespace-nowrap">
            お名前 <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <div className="grid grid-cols-2 gap-4 flex-1 pl-[73px]">
            <input
              type="text"
              name="name01"
              placeholder="姓"
              value={formData.name01}
              onChange={handleChange}
              className="w-full px-5  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="name02"
              placeholder="名"
              value={formData.name02}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* フリガナ */}
        <div className="border-t pt-5 md:flex md:items-center md:gap-4">
          <label className="block text-sm pl-6 md:pl-1 font-medium text-gray-700 mb-2 md:whitespace-nowrap">
            お名前（カナ） <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <div className="grid grid-cols-2 gap-4 flex-1 pl-6">
            <input
              type="text"
              name="name01"
              placeholder="セイ"
              value={formData.kana01}
              onChange={handleChange}
              className="w-full px-5  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="name02"
              placeholder="メイ"
              value={formData.kana02}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            会社名
          </label>
          <input
            type="text"
            name="addr02"
            placeholder="例: 神南1-1-1"
            value={formData.addr02}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* 郵便番号 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            郵便番号 <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="postal_code"
              placeholder="例: 1500001"
              value={formData.postal_code}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 whitespace-nowrap"
            >
              住所検索
            </button>
          </div>
        </div>

        {/* 都道府県 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            都道府県 <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <select
            name="pref"
            value={formData.pref}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">選択してください</option>
            <option value="1">北海道</option>
            <option value="2">青森県</option>
            <option value="3">岩手県</option>
            <option value="4">宮城県</option>
            <option value="5">秋田県</option>
            <option value="6">山形県</option>
            <option value="7">福島県</option>
            <option value="8">茨城県</option>
            <option value="9">栃木県</option>
            <option value="10">群馬県</option>
            <option value="11">埼玉県</option>
            <option value="12">千葉県</option>
            <option value="13">東京都</option>
            <option value="14">神奈川県</option>
            <option value="15">新潟県</option>
            <option value="16">富山県</option>
            <option value="17">石川県</option>
            <option value="18">福井県</option>
            <option value="19">山梨県</option>
            <option value="20">長野県</option>
            <option value="21">岐阜県</option>
            <option value="22">静岡県</option>
            <option value="23">愛知県</option>
            <option value="24">三重県</option>
            <option value="25">滋賀県</option>
            <option value="26">京都府</option>
            <option value="27">大阪府</option>
            <option value="28">兵庫県</option>
            <option value="29">奈良県</option>
            <option value="30">和歌山県</option>
            <option value="31">鳥取県</option>
            <option value="32">島根県</option>
            <option value="33">岡山県</option>
            <option value="34">広島県</option>
            <option value="35">山口県</option>
            <option value="36">徳島県</option>
            <option value="37">香川県</option>
            <option value="38">愛媛県</option>
            <option value="39">高知県</option>
            <option value="40">福岡県</option>
            <option value="41">佐賀県</option>
            <option value="42">長崎県</option>
            <option value="43">熊本県</option>
            <option value="44">大分県</option>
            <option value="45">宮崎県</option>
            <option value="46">鹿児島県</option>
            <option value="47">沖縄県</option>
          </select>
        </div>

        {/* 市区町村名 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            市区町村名 <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <input
            type="text"
            name="addr01"
            placeholder="例: 渋谷区"
            value={formData.addr01}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* 番地・建物名 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            番地・建物名 <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <input
            type="text"
            name="addr02"
            placeholder="例: 神南1-1-1"
            value={formData.addr02}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* 電話番号 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            電話番号 <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <input
            type="tel"
            name="phone_number"
            placeholder="例: 09012345678"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* メールアドレス */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            メールアドレス <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="例: example@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* パスワード */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            パスワード <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="半角英数字8文字以上"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-xs text-gray-500 mt-1">※ 半角英数字8文字以上で入力してください</p>
        </div>

        {/* パスワード確認 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            パスワード（確認） <span className="text-[11px] pl-1 font-thin text-red-400">必須</span>
          </label>
          <input
            type="password"
            name="password_confirm"
            placeholder="確認のためもう一度入力"
            value={formData.password_confirm}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* 利用規約 */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="font-medium mb-2">利用規約</h3>
          <div className="h-32 overflow-y-scroll bg-white p-3 border border-gray-300 text-sm text-gray-700">
            <p>第1条（適用）</p>
            <p>本規約は、当サイトが提供するサービスの利用条件を定めるものです。</p>
            <p className="mt-2">第2条（利用登録）</p>
            <p>登録希望者が当サイトの定める方法によって利用登録を申請し、当サイトがこれを承認することによって、利用登録が完了するものとします。</p>
            <p className="mt-2">第3条（禁止事項）</p>
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            {/* その他の規約内容 */}
          </div>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              id="agreement"
              className="mr-2"
              required
            />
            <label htmlFor="agreement" className="text-sm">
              利用規約に同意する <span className="text-red-500">*</span>
            </label>
          </div>
        </div>

        {/* 送信ボタン */}
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
          >
            戻る
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            会員登録
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyPage;