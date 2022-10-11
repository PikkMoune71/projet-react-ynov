import TwitterApiCallerService from "./services/twitterApiCallerService";

var caller = new TwitterApiCallerService('https://api.twitter.com/2/', 'AAAAAAAAAAAAAAAAAAAAAEw%2BiAEAAAAACxfjt%2FR6mSJCWlMBcmD7oVAXbZo%3DzfN5AFu0kXrXznlDBuZpeq3LSNM2mlZFPCUheSplBmBWl86zoL')
caller.getPost('1579561721223839744')


function App() {
  return (
    <div>
      <h1>Projet React Ynov</h1>
    </div>
  );
}

export default App;
