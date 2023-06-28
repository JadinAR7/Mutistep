import SectionLinks from "../Functioning/Sections";
import AddOnForm from "../Functioning/AddOnForm";
import { Container, Button, FormGroup, Col } from "reactstrap";
import { Link } from "react-router-dom";

const AddOnPage = () => {
    return (
        <Container className="main">
            <SectionLinks />
            <div className='c2'>
                <h1>Pick add-ons</h1>
                <p style={{ opacity: .5 }}>Add-ons enhance your gaming experience.</p>

                <AddOnForm />

                <FormGroup row>

                    <Col>
                        <Link className="back" to='/select-plan'>
                            <Button className="back-button" type="button">
                                <p>Go Back</p>
                            </Button>
                        </Link>


                        <Link className="next" to='/summary'>
                            <Button color='primary' className="button" type="button">
                                Next Step
                            </Button>
                        </Link>

                    </Col>

                </FormGroup>
            </div>


        </Container>
    )
};

export default AddOnPage;