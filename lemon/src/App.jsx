import { useState } from "react";
import BookingForm from "./BookingForm";
import Confirmation from "./Confirmation";

function App() {
  const [bookingData, setBookingData] = useState(null);

  const handleBooking = (data) => {
    setBookingData(data);
  };

  return (
    <div className="App">
      <h1>Little Lemon Restaurant</h1>
      {bookingData ? (
        <Confirmation data={bookingData} />
      ) : (
        <BookingForm onBooking={handleBooking} />
      )}
    </div>
  );
}

export default App;
