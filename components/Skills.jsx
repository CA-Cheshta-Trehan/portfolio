import SectionWrapper from "./SectionWrapper";
import Card from "./Card";
import Taxation from "../public/tax.jpeg";
import Auditing from "../public/audit.jpeg";
import Software from "../public/software.jpeg";
import Miscellaneous from "../public/miscellaneous.jpeg";

// Skills Section

const skill ={
    Taxation:['I have extensive experience in handling Income Tax Returns, preparing TDS/TCS returns, registration and filing of GST, LUTs, IEC and assisting clients with tax planning and compliance.'],
    Auditing:['I have worked on numerous audits including Income Tax, GST, Bank audits, Financial Audits, Statutory Audits.'],
    Software:['I am skilled in using various financial software such as Tally, QuickBooks, and SAP for accounting, reporting, and financial analysis.Additionally, I am proficient in MS Excel.'],
    Miscellaneous:['I have a basic understanding of ROC filing, company formation processes, and handling NBFC returns.']
}

const Skills = () => (
    <SectionWrapper title="Skills">
      <Card
        title="Taxation"
        description="Income Tax Returns, TDS/TCS Returns, Tax Planning, Scrutiny Assessments, GST Registration and Filing."
        detailedDescription={skill.Taxation}
        link="#"
        imageSrc={Taxation}
      />
      <Card
        title="Auditing"
        description="Income Tax Audits, GST Audits, Bank Audits, Statutory & Concurrent Audits."
        detailedDescription={skill.Auditing}
        link="#"
        imageSrc={Auditing}
      />
      <Card
        title="Financial Software"
        description="Proficient in Tally, QuickBooks, and SAP."
        detailedDescription={skill.Software}
        link="#"
        imageSrc={Software}
      />
      <Card
        title="Miscellaneous"
        description="ROC Filing, Company Formation, NBFC Returns."
        detailedDescription={skill.Miscellaneous}
        link="#"
        imageSrc={Miscellaneous}
      />
    </SectionWrapper>
  );


  export default Skills;