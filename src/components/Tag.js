import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {

  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border-black border flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline font-bold uppercase">RANDOM {tag} GIF</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450" />)
      }

      <input
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        className="w-10/12 text-lg py-2 rounded-lg mb-[20px] text-center" />

      <button onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
        Generate
      </button>

    </div>
  );
}
