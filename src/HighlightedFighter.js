function HighlightedFighter(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <p>{props.bio}</p>
    </div>
  );
}

export default HighlightedFighter;
