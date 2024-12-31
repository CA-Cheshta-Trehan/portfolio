import { useState } from "react";
import Modal from "./Modal";

// Card Component with Read More functionality
const Card = ({ title, description, detailedDescription, link, imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div  className="relative max-w-xs w-96 md:w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 border border-gray-600 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300 flex flex-col">
      {/* Card Image */}
      <a  onClick={!isModalOpen ? openModal :""} className="relative">

        <img
          className="w-full h-48 object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105"
          src={imageSrc}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
      </a>

      {/* Card Content */}
      <div className="p-6 flex-1">
        <a onClick={!isModalOpen ? openModal :""}>
          <h5 className="mb-2 text-2xl font-semibold text-teal-300 hover:text-teal-500">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-gray-300">{description}</p>
      </div>

      {/* Modal with detailed description */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={title}
        detailedDescription={detailedDescription}
      />

      {/* Read More Button fixed to the bottom-left, stays within the card */}
      <div className="relative bottom-4 left-4">
        <button
          onClick={openModal}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700"
        >
          Read More
          <svg
            className="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
