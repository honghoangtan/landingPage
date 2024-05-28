

function Form(props) {
    // eslint-disable-next-line react/prop-types
    const {label, place, type} = props
    return ( 
        <div className="flex flex-col">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>

             {type ? 
                <textarea className="mt-1 w-full rounded-md border-2 py-4 px-3" placeholder={place} /> 
                :
                <input id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={place} required />
            }   
        </div>
     );
  }
  
  export default Form;