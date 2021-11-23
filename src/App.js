
import './App.css';
import myPhoto from './logo1.jpg'
function App() {
  return (
   <div>
     <div style={{ maxWidth:"50px"}}>

<h1 className="title red">Welcome to tunisia</h1>

<br />

<img src= {myPhoto} />

<br/>

<img src="/logo2.jpg" / >

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
   </div>

  );
}

export default App;
