'use client'
import React, { useEffect, useRef } from 'react';
import { createChart, IChartApi } from 'lightweight-charts';

const TradeChart = () => {
    const chartContainerRef = useRef(null);
    const chartRef = useRef<IChartApi | null>(null);


    function generateVolumeTestData() {
        const testData = [];
        const startDate = new Date('2018-10-22');
        const endDate = new Date('2018-12-07');

        for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            testData.push({
                time: d.toISOString().split('T')[0],
                value: Math.floor(Math.random() * (20000000 - 10000000 + 1)) + 10000000,
            });
        }

        return testData;
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;

                if (chartContainerRef.current) {
                    if (chartRef.current) {
                        chartRef.current.resize(width, height);
                    } else {
                        chartRef.current = createChart(chartContainerRef.current, {
                            width, height,
                            watermark: {
                                visible: true,
                                fontSize: 24,
                                horzAlign: 'center',
                                vertAlign: 'center',
                                color: 'rgba(171, 71, 188, 0.5)',
                                text: 'Watermark Example',
                            },
                            layout: {
                                background: {
                                    // type: 'solid',
                                    color: '#131722',
                                },
                                textColor: '#d1d4dc',
                            },
                            grid: {
                                vertLines: {
                                    color: 'transparent',
                                },
                                horzLines: {
                                    color: 'transparent',
                                },
                            },
                        });
                        const candlestickSeries = chartRef.current.addCandlestickSeries(
                            {
                                upColor: '#26A69A',
                                downColor: '#EF5350',
                                borderVisible: false,
                                wickUpColor: '#26A69A',
                                wickDownColor: '#EF5350'
                            }
                        );

                        const volumeSeries = chartRef.current.addHistogramSeries({
                            color: '#26a69a',
                            priceFormat: {
                                type: 'volume',
                            },
                            priceScaleId: '',
                        });


                        candlestickSeries.setData([
                            // 这里是你的数据，格式为{ time: 'yyyy-mm-dd', open: number, high: number, low: number, close: number }
                            {
                                time: '2018-10-22',
                                open: 180.82,
                                high: 181.40,
                                low: 177.56,
                                close: 178.75
                            },
                            {
                                time: '2018-10-23',
                                open: 175.77,
                                high: 179.49,
                                low: 175.44,
                                close: 178.53
                            },
                            {
                                time: '2018-10-24',
                                open: 178.58,
                                high: 182.37,
                                low: 176.31,
                                close: 176.97
                            },
                            {
                                time: '2018-10-25',
                                open: 177.52,
                                high: 180.50,
                                low: 176.83,
                                close: 179.07
                            },
                            {
                                time: '2018-10-26',
                                open: 176.88,
                                high: 177.34,
                                low: 170.91,
                                close: 172.23
                            },
                            {
                                time: '2018-10-29',
                                open: 173.74,
                                high: 175.99,
                                low: 170.95,
                                close: 173.20
                            },
                            {
                                time: '2018-10-30',
                                open: 173.16,
                                high: 176.43,
                                low: 172.64,
                                close: 176.24
                            },
                            {
                                time: '2018-10-31',
                                open: 177.98,
                                high: 178.85,
                                low: 175.59,
                                close: 175.88
                            },
                            {
                                time: '2018-11-01',
                                open: 176.84,
                                high: 180.86,
                                low: 175.90,
                                close: 180.46
                            },
                            {
                                time: '2018-11-02',
                                open: 182.47,
                                high: 183.01,
                                low: 177.39,
                                close: 179.93
                            },
                            {
                                time: '2018-11-05',
                                open: 181.02,
                                high: 182.41,
                                low: 179.30,
                                close: 182.19
                            },
                            {
                                time: '2018-11-06',
                                open: 181.93,
                                high: 182.65,
                                low: 180.05,
                                close: 182.01
                            },
                            {
                                time: '2018-11-07',
                                open: 183.79,
                                high: 187.68,
                                low: 182.06,
                                close: 187.23
                            },
                            {
                                time: '2018-11-08',
                                open: 187.13,
                                high: 188.69,
                                low: 185.72,
                                close: 188.00
                            },
                            {
                                time: '2018-11-09',
                                open: 188.32,
                                high: 188.48,
                                low: 184.96,
                                close: 185.99
                            },
                            {
                                time: '2018-11-12',
                                open: 185.23,
                                high: 186.95,
                                low: 179.02,
                                close: 179.43
                            },
                            {
                                time: '2018-11-13',
                                open: 177.30,
                                high: 181.62,
                                low: 172.85,
                                close: 179.00
                            },
                            {
                                time: '2018-11-14',
                                open: 182.61,
                                high: 182.90,
                                low: 179.15,
                                close: 179.90
                            },
                            {
                                time: '2018-11-15',
                                open: 179.01,
                                high: 179.67,
                                low: 173.61,
                                close: 177.36
                            },
                            {
                                time: '2018-11-16',
                                open: 173.99,
                                high: 177.60,
                                low: 173.51,
                                close: 177.02
                            },
                            {
                                time: '2018-11-19',
                                open: 176.71,
                                high: 178.88,
                                low: 172.30,
                                close: 173.59
                            },
                            {
                                time: '2018-11-20',
                                open: 169.25,
                                high: 172.00,
                                low: 167.00,
                                close: 169.05
                            },
                            {
                                time: '2018-11-21',
                                open: 170.00,
                                high: 170.93,
                                low: 169.15,
                                close: 169.30
                            },
                            {
                                time: '2018-11-23',
                                open: 169.39,
                                high: 170.33,
                                low: 168.47,
                                close: 168.85
                            },
                            {
                                time: '2018-11-26',
                                open: 170.20,
                                high: 172.39,
                                low: 168.87,
                                close: 169.82
                            },
                            {
                                time: '2018-11-27',
                                open: 169.11,
                                high: 173.38,
                                low: 168.82,
                                close: 173.22
                            },
                            {
                                time: '2018-11-28',
                                open: 172.91,
                                high: 177.65,
                                low: 170.62,
                                close: 177.43
                            },
                            {
                                time: '2018-11-29',
                                open: 176.80,
                                high: 177.27,
                                low: 174.92,
                                close: 175.66
                            },
                            {
                                time: '2018-11-30',
                                open: 175.75,
                                high: 180.37,
                                low: 175.11,
                                close: 180.32
                            },
                            {
                                time: '2018-12-03',
                                open: 183.29,
                                high: 183.50,
                                low: 179.35,
                                close: 181.74
                            },
                            {
                                time: '2018-12-04',
                                open: 181.06,
                                high: 182.23,
                                low: 174.55,
                                close: 175.30
                            },
                            {
                                time: '2018-12-06',
                                open: 173.50,
                                high: 176.04,
                                low: 170.46,
                                close: 175.96
                            },
                            {
                                time: '2018-12-07',
                                open: 175.35,
                                high: 178.36,
                                low: 172.24,
                                close: 172.79
                            },
                        ]);

                        chartRef.current.priceScale('').applyOptions({
                            scaleMargins: {
                                top: 0.9,
                                bottom: 0,
                            },
                        });



                        const volumeTestData = generateVolumeTestData();

                        console.log(volumeTestData);

                        volumeSeries.setData(volumeTestData);
                    }
                }
            }
        });

        if (chartContainerRef.current) {
            resizeObserver.observe(chartContainerRef.current);
        }

        return () => {
            if (chartRef.current) {
                chartRef.current.remove();
                chartRef.current = null;
            }
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }} />
    );
};

export default TradeChart;