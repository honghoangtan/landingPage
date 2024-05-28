import Form from "./Form";
import Review from "./Review";


function ReviewForm() {
    // eslint-disable-next-line react/prop-types
  
    return ( 
      <div className="bg-white w-[42rem] p-16 rounded-3xl space-y-8">
            <h1  className="font-black text-2xl">Overall rating</h1>

            <div>
                <Review />
                <p className="text-sm font-normal">Click to rate</p>
            </div>

            <Form label='Review title' place='Example: Easy to use' />

            <div className="flex gap-5">
                <div className="flex items-center mb-4">
                    <input id="yes" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="yes" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                </div>
                
                <div className="flex items-center mb-4">
                    <input id="no" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="no" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
            </div>

            <Form 
                type='textarea'
                label='Product review' 
                place='Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is...' 
            />

            <div className="grid grid-cols-2 gap-2">
                <Form 
                    label='Nickname' 
                    place='Example: bob27' 
                />
                <Form 
                    label='Email address (will not be published)' 
                    place='Example: your@email.com' 
                />
            </div>

            <div className="flex items-center mb-4">
                <input id="accept" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="accept" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I accept the terms and conditions</label>
            </div>

            <p className="font-semibold text-sm">
                You will be abie to receive emails in connections with this review (eg if
                others comment on your review). All emails contain the option to 
                unsubscribe. We can use the text and star rating from your review in other
                maketing.
            </p>

            <div>
                <button className="bg-black text-white p-3 rounded-lg">Submit product review</button>
            </div>
      </div>
     );
  }
  
  export default ReviewForm;