import toast from "react-hot-toast";

export const bookingForm = (booking, setBook) => {
  fetch("https://sell-cell-server.vercel.app/booking", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(booking),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        setBook(null);
        toast.success("Item is booked");
      }
    });
};
