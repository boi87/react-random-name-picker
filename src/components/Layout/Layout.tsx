import React, {SyntheticEvent} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Adder from "../Adder/Adder";

import css from './Layout.module.css';
import NamesList from "../NamesList/NamesList";

export interface IState {
    namesArr: string[];
}

class Layout extends React.Component<{}, IState> {

    readonly state: Readonly<IState> = {
        namesArr: []
    };

    nameAddedHandler = (name: string) => {
        console.log(name);
        this.setState(state => {
                return {
                    namesArr: [...state.namesArr, name]
                }
            }
        );
    };


    render() {
        return (
            <Auxiliary>
                <main
                    className={css.content}
                >
                    <Adder nameAdded={this.nameAddedHandler}/>
                    <NamesList namesArr={this.state.namesArr}/>
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;