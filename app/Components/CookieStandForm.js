

const CookieStandForm = () => {


    return (
        <div className="w-full bg-orange-200">

      <form className="w-3/4 p-3 mx-auto bg-orange-300 text-stone-600">
        <div className="grid-rows-1 text-2xl font-bold text-center text-stone-600"> <h1>Creat Cookie Stand</h1></div>
  <div className="grid-rows-1">
    <label htmlFor="location" className="block text-sm text-gray-700 font-small">
      Location
    </label>
    <input
      type="text"
      id="location"
      name="location"
   
      
      className="w-full p-2 mt-1 border border-gray-300 focus:ring-orange-400 focus:border-orange-400"
    />
  </div>
<div className="gap-12 mt-2 columns-4">
  

  <div className=""> 
    <label htmlFor="minCustomers" className="block text-sm text-small ray-700 ">
      Minimum Customers per Hour
    </label>
    <input
      type="number"
      id="minCustomers"
      name="minCustomers"
      
      className="w-full p-2 mt-1 border border-gray-300 focus:ring-orange-400 focus:border-orange-400"
    />
  </div>

  <div className="">
    <label htmlFor="maxCustomers" className="block text-sm text-gray-700 ">
      Maximum Customers per Hour
    </label>
    <input
      type="number"
      id="maxCustomers"
      name="maxCustomers"
      
      className="w-full p-2 mt-1 border border-gray-300 focus:ring-orange-400 focus:border-orange-400"
    />
  </div>

  <div className="">
    <label htmlFor="averageCookies" className="block text-sm text-gray-700 ">
      Average Cookies per Sale
    </label>
    <input
      type="number"
      id="averageCookies"
      name="averageCookies"
    
      className="w-full p-2 mt-1 border border-gray-300 focus:ring-orange-400 focus:border-orange-400"
    />
  </div >

  

  <div className="text-center">
  <label htmlFor="averageCookies" className="block text-sm text-orange-300 ">
  Average Cookies per Sale
    </label>
    <button
      type="submit"
      className="px-4 py-2 font-bold bg-orange-400 text-stone-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
    >
      Create Cookie Stand
    </button>
  </div>

  </div>
</form>
</div>
    );
  };
  
  export default CookieStandForm;