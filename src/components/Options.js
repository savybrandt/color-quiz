function Options({options, onSelect, showOptionSwatch}) {
  return (
    <div className="Options">
      {options.map((option, idx) => 
      (
        <div key={option.name} onClick={() => onSelect(idx)} className="option-container">
          <div className="option-name" >{option.name}</div>
          <div className="option-swatch fade-in" style={{backgroundColor: option.hex, opacity: showOptionSwatch ? 1 : 0}}/>
        </div>
      )
      )}
    </div>
  );
}

export default Options;