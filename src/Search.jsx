export function Search() {
  return (
    <>
      <div className="flex p-2">
        <input
          type="text"
          placeholder="Search City"
          className="border-white flex border-2 rounded-xl justify-center text-center m-2 p-2 w-full"
        />

        <button className="border-white border-2 rounded-xl p-2 m-2">
          search
        </button>
      </div>
    </>
  );
}
