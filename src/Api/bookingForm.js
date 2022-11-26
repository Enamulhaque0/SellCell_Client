import toast from "react-hot-toast"

export const bookingForm = (booking,setBook) =>{
    
    fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
       
        if(data.acknowledged){
            setBook(null)
            toast.success("Booked")
        }
        
    })
}