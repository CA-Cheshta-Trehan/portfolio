// Education Section

import icaiImage from '../../public/icai.jpeg';  
import cbseImage from '../../public/cbse.png';  
import mjpruimage from '../../public/mjpru.jpg';  

import SectionWrapper from './SectionWrapper';
import Card from './Card';


const descriptions = {
    ICAI: ['Cleared CA Final with exemption in 3 subjects including Direct Tax, Financial Reporting (November 2024).',
        'Cleared CA Intermediate with exemption in 2 subjects (November 2022).',
        'Cleared CA Foundation with All India Rank 45 ( May 2019)'],
    MJPRU:['Completed my Bachelor\'s degree in Commerce from Mahatma Jyotiba Phule Rohilkhand University with 64% . During this period, I developed a strong foundation in business, accounting, and financial management'],
    CBSE:['Passed class 12th examination with 90.60%.','Passed class 10th examination with 9.2 CGPA.']
}

const Education = () => (
    <SectionWrapper title="Education">
      <Card
        title="Institute of Chartered Accountants of India"
        description="Chartered Accountant (November 2024). Cleared CA Foundation with All India Rank 45."
        detailedDescription= {descriptions.ICAI}
        link="#"
        imageSrc={icaiImage}
      />
      <Card
        title="Mahatma Jyotiba Phule Rohilkhand University"
        description="Bachelor of Commerce - Graduated with 64%."
        detailedDescription= {descriptions.MJPRU}
        link="#"
        imageSrc={mjpruimage}
      />
      <Card
        title="Central Board of Secondary Education"
        description="Class 12th: 90.60%. Class 10th :9.2 CGPA"
        detailedDescription={descriptions.CBSE}
        link="#"
        imageSrc={cbseImage}
      />
    </SectionWrapper>
  );


  export default Education;