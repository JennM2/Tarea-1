import List from './List';

function App() {
  const handleAvatarClick = (avatarUrl) => {
    console.log(`Avatar clicked: ${avatarUrl}`);
  };

  return (
    <div className="App">
      <List clickHandler={handleAvatarClick} />
    </div>
  );
}


export default App;
