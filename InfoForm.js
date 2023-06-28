import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Link } from "react-router-dom";
import { validateContactForm } from "../features/validation";


const InfoForm = () => {

    return (
        <Formik initialValues={{
            fullName: '',
            email: '',
            phoneNum: ''
        }}
            validate={validateContactForm}
        >

            <Form>

                <FormGroup>
                    <Label htmlFor="fullName" md='2' className="label">
                        Name
                    </Label>
                    <Col md='8'>

                        <Field
                            name='fullName'
                            placeholder='Full name'
                            className='form-control'
                        />
                        <ErrorMessage name="fullName">
                            {(msg) => <p className="text-danger">{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup>

                    <Label htmlFor="email" md='4' className="label">
                        Email Address
                    </Label>
                    <Col className="hi" md='8'>

                        <Field
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                        />
                        <ErrorMessage name="email">
                            {(msg) => <p className="text-danger">{msg}</p>}
                        </ErrorMessage>

                    </Col>
                </FormGroup>
                <FormGroup>

                    <Label htmlFor="phoneNum" md='' className="label">
                        Phone Number
                    </Label>
                    <Col md='8'>

                        <Field
                            name='phoneNum'
                            placeholder='Phone Number'
                            className='form-control'
                        />
                        <ErrorMessage name="phoneNum">
                            {(msg) => <p className="text-danger">{msg}</p>}
                        </ErrorMessage>

                    </Col>

                </FormGroup>
                <FormGroup row>

                    <Col md={{ size: 5, offset: 6 }}>

                        <Link to='/select-plan'>
                            <Button className="button" type="submit">
                                Next Step
                            </Button>
                        </Link>

                    </Col>

                </FormGroup>

            </Form>

        </Formik>
    )
};



export default InfoForm;