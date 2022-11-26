import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { bookingForm } from '../../../hooks/bookingForm';


const Modal = ({book,setBook}) => {
    const {user}= useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location= form.location.value;
      
        const booking = {
           productName : book.title,
           price:book.resalePrice,
           name:name,
           email:email,
           phone:phone,
           location:location,
           productInfo:book

        }
        
        bookingForm(booking,setBook)

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        // fetch('https://doctors-portal-server-rust.vercel.app/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             setTreatment(null);
        //             toast.success('Booking confirmed');
        //             refetch();
        //         }
        //         else{
        //             toast.error(data.message);
        //         }
        //     })


    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                   
                    
                    <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" required className="input w-full input-bordered" />
                    <input name="location" type="text" placeholder="Location" required className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
    );
};

export default Modal;