import { useParams } from 'react-router-dom';

export const ApplicantProfile = () => {

    const { applicantId } = useParams();

    return (
      <>
      
      <h3>Applicant Profile</h3>
      <p>Applicant ID: {applicantId}</p>
      </>
    )
  }