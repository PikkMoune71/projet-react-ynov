import { useEffect } from "react";
import StubTwitterApiService from "./services/stubTwitterApiService";

var caller = new StubTwitterApiService('https://api.twitter.com/2/', 'AAAAAAAAAAAAAAAAAAAAAEw%2BiAEAAAAACxfjt%2FR6mSJCWlMBcmD7oVAXbZo%3DzfN5AFu0kXrXznlDBuZpeq3LSNM2mlZFPCUheSplBmBWl86zoL')


function App() {

  const loadTweetEffect = useEffect(() => {
    async function load(){
      console.log(await caller.getPost('1579561721223839744'))
    }


    load()
  } ,[])

  return (
    <div>
      <h1>Projet React Ynov</h1>
    </div>
  );
}

export default App;
