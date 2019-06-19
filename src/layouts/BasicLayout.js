/* eslint-disable no-unused-vars */
import React,{Component} from 'react';
import RouterView from '../components/RouterView';
import styles from './BasicLayout.scss';

export default class BasicLayout extends Component{
    render(){
        return (
            <div className={styles.container}>
                <div>heaDER</div>
                <div>
                    <RouterView basePath='/'/>
                </div>
                <div>footer</div>
            </div>
        );
    }
}