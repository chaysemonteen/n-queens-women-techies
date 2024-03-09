import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Records from './Records.json';

function App() {
  const RecordsList = Records.map((item, index) => (
    <div key={index} className="mb-8 mx-4"> 
      <Card value={item.value} likes={item.likes} year={item.year} imageurl={item.imageurl} title={item.title} />
    </div>
  ));

  return (
    <div className='bg-[#181819] min-h-screen flex justify-center items-center'>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-center">
          {RecordsList}
        </div>
      </div>
    </div>
  );
}

export default App;
