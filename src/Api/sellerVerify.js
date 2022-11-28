import toast from "react-hot-toast"

export const sellerVerify = (id,refetch) =>{
    
    fetch(`https://sell-cell-server.vercel.app/seller/verify/${id}`, {
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