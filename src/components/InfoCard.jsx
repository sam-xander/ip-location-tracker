function InfoCard({ info }) {
  return (
    <div className="card">
      <h2>{info.title}</h2>
      <h3>{info.content}</h3>
    </div>
  );
}

export default InfoCard;
