import { Link } from "react-router-dom";


const SectionLinks = () => {
    return (
        <div className='c1'>
            <div className='numbers'>
                <div className='step-number-1'>
                    <Link to='/' style={{ textDecoration: 'none' }}><p>1</p></Link>
                </div>
                <div className='step-number-2'>
                    <Link to='/select-plan' style={{ textDecoration: 'none' }}><p>2</p></Link>
                </div>
                <div className='step-number-3'>
                    <Link to='/add-ons' style={{ textDecoration: 'none' }}><p>3</p></Link>
                </div>
                <div className='step-number-4'>
                    <Link to='/summary' style={{ textDecoration: 'none' }}><p>4</p></Link>
                </div>
            </div>

            <div className='all-text'>
                <div className='info-text'>
                    <p style={{ fontSize: 12, opacity: .7, color: '' }}>STEP 1</p>
                    <p style={{ fontSize: 13 }}>YOUR INFO</p>
                </div>
                <div className='info-text'>
                    <p style={{ fontSize: 12, opacity: .7, color: '' }}>STEP 2</p>
                    <p style={{ fontSize: 13 }}>SELECT PLAN</p>
                </div>
                <div className='info-text'>
                    <p style={{ fontSize: 12, opacity: .7, color: '' }}>STEP 3</p>
                    <p style={{ fontSize: 13 }}>ADD-ONS</p>
                </div>
                <div className='info-text'>
                    <p style={{ fontSize: 12, opacity: .7, color: '' }}>STEP 4</p>
                    <p style={{ fontSize: 13 }}>SUMMARY</p>
                </div>
            </div>

        </div>
    )
};


export default SectionLinks;