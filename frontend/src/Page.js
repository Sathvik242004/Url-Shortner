import React from 'react'
import { useParams } from 'react-router-dom';

function Page() {
    let params=useParams();
    console.log(params)
window.location.replace("https://encouraging-gray-sandals.cyclic.cloud/"+params.id);

  return (
    <div>
Redirecting youuu!
    </div>
  )
}

export default Page;