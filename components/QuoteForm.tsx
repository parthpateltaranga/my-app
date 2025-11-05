
const QuoteForm = () => {
  return (
    <form>
      <h2 className="text-3xl font-bold text-center mb-8">Get a Quote</h2>
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
        <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md" required />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
        <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md" required />
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
        <input type="tel" id="phone" name="phone" className="w-full p-3 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-6">
        <label htmlFor="product" className="block text-gray-700 font-semibold mb-2">Product</label>
        <select id="product" name="product" className="w-full p-3 border border-gray-300 rounded-md">
          <option>Auto</option>
          <option>Home</option>
          <option>Bundle</option>
          <option>Commercial or Business</option>
          <option>Life</option>
          <option>Other</option>
        </select>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg">Submit</button>
      </div>
    </form>
  );
};

export default QuoteForm;
