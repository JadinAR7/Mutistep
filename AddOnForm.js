import { Label, Col, Container, FormGroup, Input } from "reactstrap";
import { Formik, Form } from 'formik'
import { useState } from "react";


// const addUp = 0
// const checked = document.querySelectorAll('#online-services:checked, #larger-storage:checked, #custom-profile:checked')
const AddOnForm = () => {


    const [check, setCheck] = useState(false);

    const Os = document.getElementById('online-services');
    const Ls = document.getElementById('larger-storage');
    const Cp = document.getElementById('custom-profile');

    let addUp = 0
    if (check === true && Os.checked) {
        addUp += 1
    } if ((check === true && Ls.checked) || (check === true && Cp.checked)) {
        addUp += 2
    } if ((check === true && Os.checked) && (check === true && Ls.checked) && (check === true && Cp.checked)) {
        addUp += 3
        /*} else if () {
            addUp += 4
        } */
    }
    const handleChange = (event) => {
        setCheck(event.target.checked);
    }





    return (
        <Container>
            <Formik>

                <Form >

                    <FormGroup>
                        <Col md='6'>

                            <div className="form-control" id="addon">
                                <Input
                                    style={{ marginTop: '.7rem' }}
                                    type="checkbox"
                                    id="online-services"
                                    onClick={handleChange}
                                />


                                <Label style={{ marginLeft: '1rem' }}>
                                    <h6>Online Services</h6>
                                    <p style={{ lineHeight: '4px', opacity: .5, fontSize: '14px' }}>Access to multiplayer games</p>
                                </Label>
                                <p className="addon-price">+$1/mo</p>
                            </div>


                        </Col>

                    </FormGroup>
                    <FormGroup>
                        <Col md='6'>

                            <div className="form-control" id="addon" >
                                <Input
                                    style={{ marginTop: '.7rem' }}
                                    type="checkbox"
                                    id="larger-storage"
                                    onChange={handleChange}
                                />

                                <Label style={{ marginLeft: '1rem' }}>
                                    <h6>Larger Storage</h6>
                                    <p style={{ lineHeight: '4px', opacity: .5, fontSize: '14px' }}>Extra 1Tb of cloud save</p>
                                </Label>
                                <p className="addon-price">+$2/mo</p>
                            </div>

                        </Col>

                    </FormGroup>
                    <FormGroup>
                        <Col md='6'>

                            <div className="form-control" id="addon">
                                <Input
                                    style={{ marginTop: '.7rem' }}
                                    type="checkbox"
                                    id="custom-profile"
                                    onChange={handleChange}
                                />

                                <Label style={{ marginLeft: '1rem' }}>
                                    <h6>Customizable Profile</h6>
                                    <p style={{ lineHeight: '4px', opacity: .5, fontSize: '14px' }}>Custom theme on your profile</p>
                                </Label>
                                <p className="addon-price">+$2/mo</p>
                            </div>

                        </Col>

                    </FormGroup>

                </Form>

            </Formik>

        </Container>


    );
};



export default AddOnForm;