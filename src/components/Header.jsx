import { useState } from "react";

function Header({ setIpAddress }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIpAddress(userInput);

    setUserInput("");
  }

  return (
    <header>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={userInput}
          type="text"
          placeholder="Search for any IP address"
        />
        <button>
          <img src="/images/icon-arrow.svg" alt="" />
        </button>
      </form>
    </header>
  );
}

export default Header;
