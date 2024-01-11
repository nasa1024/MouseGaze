import Image from 'next/image'

function Footer() {
    return (
        <footer className="p-4 text-center text-sm bg-gray-900 text-white">
            <p>
                Charts on this site are powered by <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView</a>.
            </p>
            <p className="flex justify-center">
                <a href="https://twitter.com/CindyCo98345620" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://img.shields.io/twitter/follow/CindyCo98345620.svg?style=social"
                        alt="Follow @CindyCo98345620 on Twitter"
                        width={169}
                        height={20}
                        priority
                    />
                </a>
            </p>
        </footer>
    );
}

export default Footer;