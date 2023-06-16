import React from 'react'
import { ImSpinner11,ImEye} from 'react-icons/im';

export default function CreatePost() {
  return <form>
    <div className='flex items-cente justify-between'>
      <h1 className="text-xl font-semibold text-gray-700">Create New Post</h1>
      <div>
          <button>
            <ImSpinner11/>
            <span>Reset</span>
          </button>
          <button>
            <ImEye/>
            <span>View</span>
          </button>
          <button>
            <ImSpinner11/>
            <span>Post</span>
          </button>
         

      </div>
    
    
    
    </div>
  </form>
}
