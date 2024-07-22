import './App.css';
import { useEffect, useState } from 'react';
import { Usercard } from './api/Userdata';
import User_card from './components/user_card';


function App() {


  const [Userdata, SetUserdata] = useState(null);


  useEffect(() => {
    Usercard().then((user) => SetUserdata(user.results[0]));
  }, []);
  return (

    <div className="App">
      {Userdata && <User_card data={Userdata} />}

    </div>
  );
}

export default App;
