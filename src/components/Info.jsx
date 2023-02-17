import InfoCard from "./InfoCard";

function Info({ data }) {
  const cardInfo = data
    ? [
        {
          title: "IP ADDRESS",
          content: data.ip,
        },
        {
          title: "LOCATION",
          content: `${data.location.city}, ${data.location.region}${
            data.location.postalCode && " " + data.location.postalCode
          }`,
        },
        {
          title: "TIMEZONE",
          content: data.location.timezone,
        },
        {
          title: "ISP",
          content: data.isp,
        },
      ]
    : [];
  console.log(data);
  return (
    <main>
      <div className="cards">
        {data ? (
          cardInfo.map((card) => <InfoCard key={card.title} info={card} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </main>
  );
}

export default Info;
