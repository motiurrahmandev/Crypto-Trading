import { fetcher } from '@/lib/coingecko.action';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import { CoinOverviewFallback } from './fallback';

const CoinOverview = async () => {

  let coin;

  try {

     coin = await fetcher<CoinDetailsData>("/coins/bitcoin", {
    dex_pair_format: "symbol",
  });
  }
  catch (error) {
    console.error("Error fetching coin details:", error);
    return <CoinOverviewFallback />;
  }

  return (
     <div id="coin-overview">
          <div className="header pt-2">
            <Image
              src={coin.image.large}
              alt={coin.name}
              width={56}
              height={56}
            />
            <div className="info">
              <p>
                {coin.name} / {coin.symbol?.toUpperCase()}
              </p>
              <p className="text-2xl font-bold text-white">
                {formatCurrency(coin.market_data?.current_price?.usd)}
              </p>
            </div>
          </div>
        </div>
  )
}

export default CoinOverview