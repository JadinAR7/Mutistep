import React from "react";



const Switch = () => {


    return (

        <div >
            <input
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

    );
};

export default Switch;