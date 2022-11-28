

export const saveUser = (userBody) =>{
    
    fetch('https://sell-cell-server.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userBody)
    })
    .then(res => res.json())
    .then(data =>{
        
    })
}