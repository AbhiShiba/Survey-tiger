import React from 'react'
import { Link} from 'react-router-dom';

export default function AddQuestion({handleAddQuestion}) {
  return (
    <div className="my-3">
            
    <button className="btn btn-danger m-3" onClick={handleAddQuestion}>Add Question</button>
   

    <Link to="/publish">
        <button className="btn btn-danger m-3">Publish</button>
    </Link>
    
</div>
  )
}
