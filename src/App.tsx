import "./App.css";
import Loading from "./components/Loading";
import { Fragment } from "react/jsx-runtime";
import { useGetPokemonLoadMore } from "./hooks/useGetPokemonLoadMore";
// import { useGetPokemonList } from "./hooks/useGetPokemonList";

function App() {
  // const { data: pokemonList, isFetching: isFetchingPokemonList } =
  //   useGetPokemonList();

  const {
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useGetPokemonLoadMore();

  console.log(data);

  if (status === "pending")
    return (
      <div className="flex justify-center items-center p-1 h-[90vh]">
        <Loading classNames={{ svgClassName: "w-12 h-12" }} />
      </div>
    );

  return (
    <div className="grid grid-cols-2 gap-4  w-1/3 mx-auto border p-4">
      {data?.pages.map((group, i) => (
        <Fragment key={i}>
          {group.results.map((item) => (
            <div
              key={item.name}
              className="border border-zinc-400 p-4 rounded-md w-full"
            >
              {item.name}
            </div>
          ))}
        </Fragment>
      ))}
      <button
        onClick={() => fetchNextPage()}
        className="bg-slate-800 text-white p-2 rounded-md col-span-2"
      >
        {isFetchingNextPage ? (
          <div className="flex justify-center items-center">
            <Loading classNames={{ svgClassName: "mr-3 text-white" }} />
            <span>Is Fetching ...</span>
          </div>
        ) : (
          "Load More"
        )}
      </button>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
}

export default App;
