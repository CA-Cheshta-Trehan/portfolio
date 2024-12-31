import SectionWrapper from "./SectionWrapper";
import Card from "./Card";
import articleImage from '../../public/article.png'; 
// Experience Section

const experiences = {
    Mangal : ['Conducted Income Tax Audit of Assesses to ensure correctness and compliances of tax laws.',
        'Conducted GST Audits of various entities thereby preparing Input and Output tax reconciliations.',
        'Experienced in Conducting Bank Audits (like State Bank Of India), including Statutory audit and Concurrent audit.',
        'Led and executed financial audit for local government entity (Nagar Panchayat, Meerganj), ensuring compliance with regulatory standards.',
        'Led the preparation of Income Tax Returns and computation of Income and successfully identified and rectified error, resulting in tax saving to clients.',
        'Led the preparation of TDS/TCS returns and managing and monitoring demands raised by Tax Authority.',
        'Handled the Income Tax Scrutiny Assessment Cases and also advised clients on tax planning.',
        'Experience in Indirect Taxation including GST registrations, filing LUTs, IEC and GST returns for export of Goods and Services.',
        'Undertaking drafting of various certificates including Turnover Certificates, Net worth certificates, etc.',
        'Basic understanding of ROC filing and adept at navigating the process of company formation and filing of NBFC returns.'
    ]
}
const Experience = () => (
    <SectionWrapper title="Experience">
      <Card
        title="Mangal Associates | Article Assistant"
        description="Led Income Tax and GST Audits, prepared TDS/TCS returns, and advised clients on tax planning."
        detailedDescription= {experiences.Mangal}
        link="#"
        imageSrc={articleImage}
      />
    </SectionWrapper>
  );

  export default Experience;