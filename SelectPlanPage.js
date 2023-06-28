import { Container, FormGroup, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import SectionLinks from "../Functioning/Sections";
import ArcadeLogo from "../assets/imgs/icon-arcade.svg"
import AdvancedLogo from "../assets/imgs/icon-advanced.svg"
import ProLogo from "../assets/imgs/icon-pro.svg"
import { useState } from "react";

const SelectPlanPage = () => {

    const [type, setType] = useState('/mo');

    let free = ''
    if (type === '/mo') {
        free = ''
    } else if (type === '0/yr') {
        free = '2 months free'
    }
    const handleClick = () => {
        setType((curr) => (curr === '/mo' ? '0/yr' : '/mo'))
    }


    return (

        <Container className='main'>
            <SectionLinks />
            <div className='c2'>
                <h1>Select Your Plan</h1>
                <p style={{ opacity: .5 }}>You have the option of monthly or yearly billing.</p>

                <div className="subscriptions">
                    <div className="Arcade">
                        <img src={ArcadeLogo} alt="Arcade Logo" />
                        <h2 >Arcade</h2>
                        <p style={{ opacity: .5 }}>$9{type}</p>
                        <p className="free">{free}</p>
                    </div>
                    <div className="Advanced">
                        <img src={AdvancedLogo} alt="Advanced Logo" />
                        <h2>Advanced</h2>
                        <p style={{ opacity: .5 }}>$12{type}</p>
                        <p className="free">{free}</p>
                    </div>
                    <div className="pro">
                        <img src={ProLogo} alt="Pro Logo" />
                        <h2>pro</h2>
                        <p style={{ opacity: .5 }}>$15{type}</p>
                        <p className="free">{free}</p>
                    </div>
                </div>

                <div className="sub-type-box">
                    <p className="month">monthly</p>
                    <div className="switch-box">
                        <input onClick={handleClick}
                            className="switch-checkbox"
                            id={'react-switch'}
                            type='checkbox'
                        />
                        <label
                            className="switch-label"
                            htmlFor="react-switch"
                        >
                            <span className={'react-switch-button'} />
                        </label>
                    </div>
                    <p className="year">yearly</p>
                </div>

                <FormGroup row>

                    <Col>
                        <Link className="back" to='/'>
                            <Button className="back-button" type="button">
                                <p>Go Back</p>
                            </Button>
                        </Link>


                        <Link className="next" to='/add-ons'>
                            <Button color='primary' className="button" type="button">
                                Next Step
                            </Button>
                        </Link>

                    </Col>

                </FormGroup>
            </div>


        </Container>




    )
}










export default SelectPlanPage;