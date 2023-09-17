import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

export const ApplicantDetails = () => {

    const applicantData = [
        { id: 1, name: 'Emily Johnson', course: 'JFS', location: 'AMS' },
        { id: 2, name: 'Liam Smith', course: 'JFS', location: 'SWE' },
        { id: 3, name: 'Sophia Johns', course: 'JSFS', location: 'AMS' },
    ];

    const navigate = useNavigate();

    const handleRowClick = (applicantId:any) => {
      // Navigate to the login page when the button is clicked
      navigate(`/profile/${applicantId}`);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Location</th>
                    <th>Interview Progress</th>
                </tr>
            </thead>
            <tbody>
                {applicantData.map((applicant, index) => (
                    <tr key={applicant.id} onClick={() => handleRowClick(applicant.id)}>
                        <td>{index + 1}</td>
                        <td>{applicant.name}</td>
                        <td>{applicant.course}</td>
                        <td>{applicant.location}</td>
                    </tr>
                ))}
            </tbody>
        </Table >
    )
}
