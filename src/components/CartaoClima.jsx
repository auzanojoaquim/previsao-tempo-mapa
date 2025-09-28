import { ArrowUp } from "lucide-react";

function CartaoClima({ clima }) {
  if (!clima) {
    return (
      <div className="mt-6 p-4 border rounded shadow-md max-w-md mx-auto bg-white text-center text-gray-600">
        Nenhum dado disponível.
      </div>
    );
  }

  const nome = clima.name || "Cidade desconhecida";
  const icon = clima.weather?.[0]?.icon;
  const descricao = clima.weather?.[0]?.description || "Não disponível";
  const temp = clima.main?.temp !== undefined ? `${Math.round(clima.main.temp)}°C` : "N/A";
  const vento = clima.wind?.speed || 0;
  const ventoKmh = (vento * 3.6).toFixed(1);
  const anguloVento = clima.wind?.deg || 0;
  const rajada = clima.wind?.gust ? (clima.wind.gust * 3.6).toFixed(1) : null;

  return (
    <div className="flex justify-between mt-6 p-4 border rounded shadow-md max-w-lg">
      <div>
      {icon ? (
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Ícone do clima"
          className="mx-auto"
        />
      ) : (
        <p className="text-sm italic text-gray-500 text-center">Ícone não disponível</p>
      )}

      <h2 className="text-2xl font-semibold mt-2">{nome}</h2>
      <p className="text-lg"><strong>Clima:</strong> {descricao}</p>
      <p className="text-lg"><strong>Temperatura:</strong> {temp}</p>
      <p className="text-lg"><strong>Vento:</strong> {ventoKmh} km/h</p>
        {rajada && <p className="text-lg"><strong>Rajadas:</strong> {rajada} km/h</p>}
        </div>
	<div className="flex justify-center items-center">
        <div className="relative w-40 h-40 mx-auto mt-4 flex items-center justify-center rounded-full border-4 border-gray-300 shadow-inner">
          <span className="absolute top-1 left-1/2 transform -translate-x-1/2 text-sm font-bold">N</span>
          <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-sm font-bold">S</span>
          <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-sm font-bold">O</span>
          <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-sm font-bold">E</span>
          <ArrowUp
            size={48}
            style={{ transform: `rotate(${anguloVento}deg)` }}
            className="text-blue-600 drop-shadow-md transition-transform duration-500"
          />
	</div>
        </div>
    </div>
  );
}

export default CartaoClima;
