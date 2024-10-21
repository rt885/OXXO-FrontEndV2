'use client'

const SearchBarGeneral = ({ page }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full bg-white lg:h-20 flex lg:justify-between justify-center items-center px-3 lg:px-10 shadow-md">
      <p className="lg:text-base text-sm hidden lg:block">{page}</p>
      <form className="flex items-center">
        <input
          className="bg-[#EEEEEE] text-black shadow-md border-2 border-black rounded-md lg:pl-2 py-2"
          type="search"
          placeholder="Store Code..."
        />
        <button type="button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-6 lg:h-6 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
      <div className="lg:flex lg:flex-row my-auto hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="lg:w-6 lg:h-6 w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="lg:ml-3 hidden lg:block">OXXO Admin</p>
      </div>
    </div>
  );
};

export default SearchBarGeneral;
