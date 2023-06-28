import { Container, Button, FormGroup, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SectionLinks from "../Functioning/Sections";

const SummaryPage = () => {



    return (
        <Container className='main' >
            <SectionLinks />
            <div className="c2">
                <h1>Finishing up</h1>
                <p style={{ opacity: .5 }}>Double-check eveything looks OK before confirming.</p>
                <div className="summary">
                    <h6>Javascript for whichever plan is selected</h6>
                    <a href="select-plan">Change</a>
                    <hr />
                    <div className="online-service">
                        <p>Online Service</p>
                        <span>+$0/mo</span>
                    </div>
                    <div className="storage">
                        <p className="p2">Larger storage</p>
                        <span>+$0/mo</span>
                    </div>
                </div>
                <div className="total-summary">
                    <p className="summary-total">Total (per month)</p>
                    <p className="summary-total-price">${ }/mo</p>
                </div>



                <FormGroup row>

                    <Col>
                        <Link className="back" to='/add-ons'>
                            <Button className="back-button" type="button">
                                <p>Go Back</p>
                            </Button>
                        </Link>


                        <Link className="next" to='/add-ons'>
                            <Button color='primary' className="button" type="button">
                                Confirm
                            </Button>
                        </Link>

                    </Col>

                </FormGroup>

            </div>



        </Container>
    )
};



export default SummaryPage;