import { useEffect, useState, useRef } from "react";

export function Search({ search }) {
  const [city, setCity] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim() === "") return;
    search(city);
    setCity("");
  }

  return (
    <>
      <form className="flex p-2" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search City"
          ref={inputRef}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border-white flex border-2 rounded-xl justify-center text-center m-2 p-2 w-full"
        />

        <button
          type="submit"
          className="border-white border-2 rounded-xl p-2 m-2"
        >
          search
        </button>
      </form>
    </>
  );
}
