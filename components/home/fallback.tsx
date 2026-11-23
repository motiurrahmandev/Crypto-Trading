import DataTable from "@/components/DataTable";
import { cn } from "@/lib/utils";

function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-dark-400", className)} />;
}

export function CoinOverviewFallback() {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <Skeleton className="header-image" />
        <div className="info">
          <Skeleton className="header-line-sm" />
          <Skeleton className="header-line-lg" />
        </div>
      </div>

      <div className="flex gap-2 mb-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="period-button-skeleton" />
        ))}
      </div>

      <div className="chart">
        <Skeleton className="chart-skeleton" />
      </div>
    </div>
  );
}

export function TrendingCoinsFallback() {
  const rows = Array.from({ length: 6 }, (_, i) => i);

  const columns: DataTableColumn<number>[] = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: () => (
        <div className="name-link">
          <Skeleton className="name-image" />
          <Skeleton className="name-line" />
        </div>
      ),
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: () => (
        <div className="price-change">
          <Skeleton className="change-icon" />
          <Skeleton className="change-line" />
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: () => <Skeleton className="price-line" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <DataTable
        data={rows}
        columns={columns}
        rowKey={(row) => row}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3"
        bodyCellClassName="py-2"
      />
    </div>
  );
}
