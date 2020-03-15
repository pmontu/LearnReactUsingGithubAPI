import React, { useState } from "react";

function App() {
  // const [text, setText] = useState("no name");
  const [username, setUsername] = useState(null);
  const [users, setUsers] = useState([]);
  const handleSearch = () => {
    if (username) {
      fetch(`https://api.github.com/search/users?q=${username}`)
        .then(res => res.json())
        .then(json => setUsers(json.items))
        .catch(e => alert(e));
    }
  };
  return (
    <div>
      <input
        onChange={event => setUsername(event.target.value)}
        placeholder="github username"
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      {username}
      <br />
      {users.map(user => (
        <div key={user.id}>
          {user.login}:
          <a href={user.html_url}>
            <img
              src={user.avatar_url}
              alt={user.login}
              width={50}
              height={50}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
