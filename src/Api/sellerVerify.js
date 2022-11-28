import toast from "react-hot-toast"

export const sellerVerify = (id,refetch) =>{
    
    fetch(`http://localhost:5000/seller/verify/${id}`, {
        method: 'PUT',
       
    })
    .then(res => res.json())
    .then(data =>{
        if(data.acknowledged){
            refetch()
            toast.success("Seller Verify")
            }
        
    })
}