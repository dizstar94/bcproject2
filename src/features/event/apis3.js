

export async function DelUser(userUid,event){
  let today = new Date();
  let url ="http://34.84.235.122:3000/api/RemoveTransaction";
  
  const eventId = event.id
  

    // $class": "com.betweak.carauction.SampleTransaction",
    // "board": {},
    // "newuserUid": "string",
    // "transactionId": "string",
    // "timestamp": "2019-11-19T06:05:03.677Z"



     const body={
    $class: "com.betweak.carauction.RemoveTransaction",
    board: `resource:com.betweak.carauction.Board#${eventId}`,
    newuserUid:`${userUid}`
  
    };
  
    console.log(JSON.stringify(body));
  
    
     const response = await fetch(url,{
  
     method:"POST",
  
       headers:{
  
         Accept:"application/json",
  
         "Content-Type": "application/json"
  
   
  
       },
       
  
       body:JSON.stringify(body)
  
     });
  
  
     if (response.ok) {
  
      console.log(response);
  
       return response.json();
    } else{
        return false
    }

  
      
  
      
  
   
  
   
  
   }
