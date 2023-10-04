import React, { useEffect, useState } from "react";
import { gatosAleatoriosAPI } from "../api";

function ProductCard() {
  const [dados, setDados] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await gatosAleatoriosAPI();
        setDados(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  console.log('testinho',dados);
  return (
    <div className="flex flex-wrap">
      {dados &&
        dados.map((item: any, index: number) => (
          <div
            key={index}
            className="w-[200px] h-[230px] rounded overflow-hidden shadow-lg mt-8 ml-10 mb-5 text-center"
          >
            <img className="w-[180px] h-[180px] mt-5 ml-3" src={item.url} />
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
