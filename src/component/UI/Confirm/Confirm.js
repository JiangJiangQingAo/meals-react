import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.css'
const Confirm = (props) => {
    return (
        <Backdrop className={classes.ConfirmOuter} onClick={props.onCancel}>
            <div className={classes.Confirm}>
                <p className={classes.ConfirmText}>{props.confirmText}</p>
                <div>
                    <button 
                        className={classes.Cancel}
                        onClick={(e)=>{
                            props.onCancel(e)
                        }}
                    >取消</button>
                    <button 
                        className={classes.Ok}
                        onClick={()=>{
                            props.onOK()
                        }}
                    >确认</button>
                </div>
            </div>
        </Backdrop>
    );
}

export default Confirm;
