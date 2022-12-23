import { useEffect } from "react";
import { useFetch } from "./hook/useFetch"

function App() {
  const { get, porcentage } = useFetch();

  const getData = async () => {
    const data = await get('https://api.giphy.com/v1/gifs/search?api_key=rn5B6tqtKopC8pWpWLboyXWe4zhvrnbl&q=person&limit=100');
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <p>
        {porcentage}
      </p>
    </div>
  )
}

export default App
