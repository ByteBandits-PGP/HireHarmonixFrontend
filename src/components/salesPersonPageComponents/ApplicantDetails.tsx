import Table from 'react-bootstrap/Table';
import './SalesPersonPage.css'

export const ApplicantDetails = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Bootcamp</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Emily Johnson</td>
                    <td>JFS</td>
                    <td>AMS</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Liam Smith</td>
                    <td>JFS</td>
                    <td>SWE</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Sophia Johns</td>
                    <td>JSFS</td>
                    <td>AMS</td>
                </tr>
            </tbody>
        </Table >
    )
}
