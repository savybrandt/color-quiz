function Options({options, onSelect, showOptionSwatch}) {
  return (
    <div className="Options">
      {options.map((option, idx) => 
      (
        <div className="option-container">
          <button key={option.name} onClick={() => onSelect(idx)}>{option.name}</button>
          {showOptionSwatch && <div className="option-swatch" style={{backgroundColor: option.hex}}></div>}
        </div>
      )
      )}
    </div>
  );
}

export default Options;