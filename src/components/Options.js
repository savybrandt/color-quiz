function Options({options, onSelect}) {
  return (
    <div className="Options">
      {options.map((option, idx) => 
        <button key={option.name} onClick={() => onSelect(idx)}>{option.name}</button>
      )}
    </div>
  );
}

export default Options;