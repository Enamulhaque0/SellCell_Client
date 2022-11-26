import toast from "react-hot-toast"

export const saveProduct = (product) =>{
    
    fetch('http://localhost:5000/product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.acknowledged){
        toast.success("product add successfully")
        }
        
    })
}