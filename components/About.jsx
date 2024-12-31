import SectionWrapper from "./SectionWrapper";
import Cheshta from "../public/cheshta.png"
//About
const About = () => (
    <SectionWrapper title="About Me">
      <div className="flex flex-col items-center text-center">
        {/* About Me Image */}
        <div className="mb-6">
          <img
            src={Cheshta}  // Replace with your image source
            alt="About Me"
            className="w-40 h-40 rounded-full border-4 border-teal-600"
          />
        </div>
  
        <p className="text-lg text-gray-400 max-w-4xl mx-auto">
          I am a <b className="text-white">Chartered Accountant</b> with extensive experience in Auditing, GST, Direct Taxation, and Accounting. I became Chartered Accountant in November 2024. I secured <b className="text-white">All India Rank 45</b> in CA foundation. I have completed my articleship with a strong track record in financial compliance, tax planning, Financial Audits, Bank Audits and Statutory Audits.
        </p>
      </div>
    </SectionWrapper>
  );

  export default About;