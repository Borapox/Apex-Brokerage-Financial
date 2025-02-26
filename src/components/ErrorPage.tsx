import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-cyan-900 to-gray-900">
      <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl max-w-2xl w-full text-center border border-white/20">
        <h1 className="text-4xl font-bold text-white">Oops!</h1>
        <p className="text-gray-300 mt-2 text-lg">Algo deu errado...</p>
        <p className="text-gray-400 mt-4 italic">
          {(error as any)?.statusText || (error as any)?.message}
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-cyan-700/80 text-white px-8 py-3 rounded-xl shadow-md hover:bg-cyan-700 transition"
        >
          Voltar para a Home
        </a>
      </div>
    </div>
  );
}
