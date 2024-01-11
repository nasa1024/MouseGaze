// import Image from 'next/image'
import dynamic from 'next/dynamic';

const TradeChart = dynamic(
  () => import('@/components/tradeChart'),
  { ssr: false }  // 这将关闭服务器端渲染
);

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-[90vh] text-whit">
      <div className="chart-page">
          <h1>XGB</h1>
          <TradeChart />
        </div>
    </main>
  )
}