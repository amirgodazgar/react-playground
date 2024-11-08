import "./App.css";
import { useQuery } from "./hooks/useQuery";
import { getPokemonList } from "./services/list";

function App() {
  const { data } = useQuery({
    queryKey: ["pokemoons"],
    queryFn: getPokemonList,
  });
  console.log(data);
  return <div>Test app</div>;
}

export default App;
