import {useState} from 'react'

 // Write your Color component here
const Color = (props) => {
  let isActiveOrNot = props.selectedColor === props.color ? "selected" : ""
  return (
          <div 
          className={`${props.color} ${isActiveOrNot}`}
          onClick={()=> props.setSelectedColor(props.color)}></div>
          )
}
const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
        <div id="colors-list">
        <Color selectedColor={selectedColor} color ="red" setSelectedColor={setSelectedColor}/>
        <Color selectedColor={selectedColor} color="blue" setSelectedColor={setSelectedColor}/>
        <Color selectedColor={selectedColor} color="green"setSelectedColor={setSelectedColor}/>
        </div>
    </div>
  );
};

export default App;
