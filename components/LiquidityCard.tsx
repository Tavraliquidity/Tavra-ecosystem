type Props = {
  tvl: string;
};

export default function LiquidityCard({ tvl }: Props) {

  return (

    <div>

      <h2>Total Liquidity</h2>

      <p>{tvl}</p>

    </div>

  );

}
