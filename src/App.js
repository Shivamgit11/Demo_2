import './App.css';
import User from './Components/User';

function App() {
  const REgUser = fetch('https://jsonplaceholder.typicode.com/users' , {
    method: "Get",
  });
  console.log(REgUser);
  return (
    <>
    <User />
    </>
  );
}

export default App;
