import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AddUser } from './AddUser';
import { AddRole } from './AddRole';
import { AddCourse } from './AddCourse';

export const AdminPage = () => {
    return (
        <>
            <Tabs
                defaultActiveKey="user"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="user" title="User">
                    <AddUser />
                </Tab>
                <Tab eventKey="course" title="Course">
                    <AddCourse />
                </Tab>
            </Tabs>
        </>
    )
}
