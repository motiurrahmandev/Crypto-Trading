import CoinOverview from "@/components/home/CoinOverview";
import TrandingCoins from "@/components/home/TrandingCoins";
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "@/components/home/fallback";
import { Suspense } from "react";

async function page() {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrandingCoins />
        </Suspense>
      </section>

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
}

export default page;
