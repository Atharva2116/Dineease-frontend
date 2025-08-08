import  { useEffect, useState } from "react";
import axios from "axios";
import "./TableBooking.css";
import tableIcon from "./table.png";

const availableTimeSlots = ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

const TableBooking = () => {
  const [tables, setTables] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("");

  const fetchTables = async () => {
    try {
      const res = await axios.get("https://dineease-backend-green.vercel.app/api/tables");
      setTables(res.data);
    } catch (error) {
      console.error("Error fetching tables", error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);
const handleBooking = async (id) => {
  if (!selectedTime || !duration) {
    alert("Please select a time and duration.");
    return;
  }

  try {
    console.log("Booking table:", id, "with", selectedTime, duration);
    await axios.put(`https://dineease-backend-green.vercel.app/api/tables/${id}/book`, {
      time: selectedTime,
      duration,
    });
    fetchTables();
  } catch (error) {
    console.error("Error booking table", error.response?.data || error);
  }
};


  const handleCancel = async (id) => {
    try {
      await axios.put(`https://dineease-backend-green.vercel.app/api/tables/${id}/cancel`);
      fetchTables();  // Refresh after cancellation
    } catch (error) {
      console.error("Error cancelling booking", error);
    }
  };

  return (
    <div className="booking-container">
      <h2 className="fancy-heading">Where Moments Meet the Menu</h2>

      <div className="booking-options">
        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
          <option value="">Select Time</option>
          {availableTimeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">Select Duration</option>
          <option value="1 Hour">1 Hour</option>
          <option value="2 Hours">2 Hours</option>
          <option value="3 Hours">3 Hours</option>
        </select>
      </div>

      <div className="tables-grid">
        {tables.map((table) => (
          <div
            key={table._id}
            className={`table-card ${table.isBooked ? "booked animate" : "available"}`}
          >
            <p><strong>{table.name}</strong></p>
            <p>Capacity: {table.capacity}</p>

            <div className="table-icon-container">
              <img src={tableIcon} alt="Table Icon" className="table-icon" />
            </div>

            {table.isBooked ? (
              <>
                <p>Booked at: {table.time}</p>
                <p>For: {table.duration}</p>
                <button className="cancel" onClick={() => handleCancel(table._id)}>Cancel</button>
              </>
            ) : (
              <button onClick={() => handleBooking(table._id)}>Book Table</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableBooking;
