function Options({options, onSelect, showOptionSwatch}) {
  return (
    <div className="Options">
      {options.map((option, idx) => 
      (
        <div key={option.name} className="option-container">
          <button  onClick={() => onSelect(idx)}>{option.name}</button>
          {showOptionSwatch && <div className="option-swatch" style={{backgroundColor: option.hex}}></div>}
        </div>
      )
      )}
    </div>
  );
}

export default Options;