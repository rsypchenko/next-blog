export const Contacts = () => {
  return (
    <div id="contacts" className="container mx-auto py-16 md:py-20">
      <div className="flex flex-col pt-16 lg:flex-row">
        <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-gray-600 px-6 py-6 sm:py-8 lg:w-1/3">
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl text-gray-400"></i>
            <p className="pl-2 font-body font-bold uppercase text-gray-400 lg:text-lg">
              My Phone
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            (+1) 403-200-8512
          </p>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-gray-600 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-envelope text-2xl text-gray-400"></i>
            <p className="pl-2 font-body font-bold uppercase text-gray-400 lg:text-lg">
              My Email
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            rs.sypchenko@gmail.com
          </p>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-gray-600 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-map text-2xl text-gray-400"></i>
            <p className="pl-2 font-body font-bold uppercase text-gray-400 lg:text-lg">
              My Location
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            Calgary, Alberta, Canada
          </p>
        </div>
      </div>
    </div>
  );
};
