// Section Wrapper for each category (Education, Experience, Skills)
const SectionWrapper = ({ children, title, id }) => (
    <div className="space-y-12">
      <h2 className={"text-3xl font-semibold text-center text-white"}>{title}</h2>
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {children}
      </div>
    </div>
  );

  
export default SectionWrapper;