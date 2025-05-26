'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-6">나의 첫 웹사이트</h1>
          
          {/* 탭 네비게이션 */}
          <div className="flex border-b">
            <button
              className={`px-4 py-2 ${
                activeTab === 'tab1'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('tab1')}
            >
              소개
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'tab2'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('tab2')}
            >
              프로젝트
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'tab3'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('tab3')}
            >
              연락처
            </button>
          </div>

          {/* 탭 컨텐츠 */}
          <div className="mt-6">
            {activeTab === 'tab1' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">안녕하세요!</h2>
                <p>이곳은 제 첫 웹사이트의 소개 페이지입니다.</p>
              </div>
            )}
            {activeTab === 'tab2' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">프로젝트</h2>
                <p>진행했던 프로젝트들을 소개하는 공간입니다.</p>
              </div>
            )}
            {activeTab === 'tab3' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">연락처</h2>
                <p>이메일: example@email.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
