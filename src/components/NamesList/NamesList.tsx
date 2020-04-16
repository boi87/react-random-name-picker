import React from "react";

const NamesList = (props: any) => {
    console.log(props);
    const names = props.namesArr
        .map((x: string, i: number) =>
            (<p key={x + i}>{x}</p>)
        )

    return (
        <div>
            <ul>
                {names}
            </ul>
        </div>
    )
};

export default NamesList;