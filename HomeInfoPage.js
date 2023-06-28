import { Container } from 'reactstrap';
import InfoForm from '../Functioning/InfoForm';
import SectionLinks from '../Functioning/Sections';



const HomeInfoPage = () => {
    return (

        <Container className='main'>
            <SectionLinks />
            <div className='c2'>
                <h1>Personal info</h1>
                <p style={{ opacity: .5 }}>Please provide your name, email address, and phone number.</p>
                <InfoForm />
            </div>

        </Container>


    );
}


export default HomeInfoPage;

