import React from "react";

import css from './Adder.module.css';

const Adder = (props: any) => {
    let val = ''
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        val = event.target.value;
        // console.log(val);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        e.persist();
        props.nameAdded(val);
    }

    return (
        <div className={css.adderComp}>
            <form>
                <input type="text" id='name' onChange={handleChange} />
                <button type="button" onClick={handleSubmit}>Add name</button>
            </form>
        </div>
    )
};

export default Adder;