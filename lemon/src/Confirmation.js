
function Confirmation({ data }) {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Date: {data.date}</p>
      <p>Time: {data.time}</p>
      <p>Guests: {data.guests}</p>
      <p>Your table has been booked successfully!</p>
    </div>
  );
}

export default Confirmation;
