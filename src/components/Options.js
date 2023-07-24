function Options({options, onSelect, showOptionSwatch}) {
  return (
    <div className="Options">
      {options.map((option, idx) => 
      (
        <div key={option.name} className="option-container">
          <button  className="option-button" onClick={() => onSelect(idx)}>{option.name}</button>
          <div className="option-swatch fade-in" style={{backgroundColor: option.hex, opacity: showOptionSwatch ? 1 : 0}}/>
        </div>
      )
      )}
    </div>
  );
}

export default Options;