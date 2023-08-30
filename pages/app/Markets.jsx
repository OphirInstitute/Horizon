import React, { useState, useEffect } from "react";
import Image from "next/image";

const Markets = ({ initialData }) => {
  const [data, setData] = useState(initialData || []);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/coins");
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="markets_home">
      <div className="text-gray-300">
        <h1>Token Tracker</h1>
        <p></p>
      </div>
      <div className="rounded-lg shadow-xl bg-[#1f1f1f] col-span-2 text-xs">
        <div className="p-3 m-2 overflow-x-auto flex justify-center space-x-2 ">
          <div className=" flex justify-center align rounded overflow-x-auto">
            <table className="min-w-full bgr text-white border-lg border-gray-600 rounded overflow-x-auto">
              <thead className="border-b border-gray-600 py-5 my-5">
                <tr className="p-5">
                  <th className="sticky left-0 bg-[#1f1f1f] z-10">Token</th>
                  <th>Price</th>
                  <th>Change (%)</th>
                  <th>Volume 24h</th>
                  <th>Market Cap</th>
                  <th>Total Supply</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) &&
<<<<<<< HEAD
                  data.slice(startIndex, endIndex).map((token) => (
=======
                  data.map((token, index) => (
>>>>>>> 0c0f6e91d3f2c4b22a2ecf3cb4a547b614a7c235
                    <tr key={token.id}>
                      <td className="flex gap-2 items-center py-3 sticky left-0 z-10">
                        <div className="p-2 rounded-lg bg-[#39393983] ">
                          {/* <Image
                            src={token.image}
                            width={20}
                            height={20}
                            alt={token.name}
                          /> */}
                        </div>
                        {token.name}
                      </td>
                      <td>${token.current_price}</td>
                      <td>{token.price_change_percentage}%</td>
                      <td>{token.total_volume}</td>
                      <td>{token.market_cap}</td>
                      <td>{token.total_supply}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;

Markets.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
