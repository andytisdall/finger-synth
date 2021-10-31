import React from 'react';


const Key = (props) => {

    const style = props.step ? `key blackKey step${props.step}` : 'key';


    return (
        <div
            className={style}
        />
    );

};

export default Key;