const Modal = ({ isOpen, closeModal, title, detailedDescription }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center px-0 sm:px-0">
          <div className="bg-gray-800 p-8 rounded-lg max-w-4xl w-full h-full overflow-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-gray-600 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-teal-300">{title}</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-teal-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
  
            {/* Modal Content */}
            <div className="overflow-auto text-white text-md">
                    {detailedDescription.map((line, index) => (
                    <p className="text-teal-100" key={index}> <b className="text-teal-500">{index+1}</b>. {line}</p>
                     ))}
            </div>

  
            {/* Optional Footer */}
            <div className="mt-6 text-center">
              <button
                onClick={closeModal}
                className="px-6 py-2 text-sm text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;