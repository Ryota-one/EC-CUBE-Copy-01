import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ログイン:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">ログイン</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 会員の方 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">
              会員の方
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  パスワード <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="パスワード"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  ログイン状態を保持する
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium"
              >
                ログイン
              </button>

              <div className="text-center mt-4">
                <Link to="/password/reset" className="text-sm text-blue-600 hover:underline">
                  パスワードをお忘れの方はこちら
                </Link>
              </div>
            </form>
          </div>

          {/* 会員登録がお済みでない方 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">
              会員登録がお済みでない方
            </h2>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-700">
                会員登録をしていただくと、次回からのご注文時に住所などの情報入力を省略できます。
              </p>
              
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>お買い物がスムーズに</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>購入履歴の確認</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>お気に入り商品の登録</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>配送先の複数登録</span>
                </li>
              </ul>

              <Link
                to="/mypage"
                className="block w-full px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition text-center font-medium mt-6"
              >
                新規会員登録
              </Link>

              <div className="bg-gray-50 p-4 rounded mt-4">
                <h3 className="font-medium text-sm mb-2">ゲスト購入について</h3>
                <p className="text-xs text-gray-600">
                  会員登録をせずに商品をご購入いただくことも可能です。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ソーシャルログイン（オプション） */}
        <div className="max-w-md mx-auto mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">または</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition">
              <span className="text-sm font-medium">Googleでログイン</span>
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition">
              <span className="text-sm font-medium">Facebookでログイン</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;