import dynamic from 'next/dynamic';

const TradeChart = dynamic(
  () => import('../components/tradeChart'),
  { ssr: false }  // 这将关闭服务器端渲染
);


export default function Home() {
  return (
      <main className="flex flex-wrap p-4 bg-gray-900 min-h-screen text-white">
        <div className="chart-container">
          <h1>XGB</h1>
          <TradeChart />
        </div>
        <div className="chart-container">
          <h1>LSTM</h1>
          <div className="flex items-center justify-center bg-gray-700 bg-opacity-50 h-full">
            <span className="self-center text-center">coming soon</span>
          </div>
        </div>
        <div className="chart-container">
          <h1>Random Forest</h1>
          <div className="flex items-center justify-center bg-gray-700 bg-opacity-50 h-full">
            <span className="self-center text-center">coming soon</span>
          </div>
        </div>
        <div className="chart-container">
          <h1>Transformer</h1>
          <div className="flex items-center justify-center bg-gray-700 bg-opacity-50 h-full">
            <span className="self-center text-center">coming soon</span>
          </div>
        </div>
      </main>
  )
}