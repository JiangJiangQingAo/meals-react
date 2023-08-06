import React ,{useContext,useState}from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './CartDetails.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import CartContext from '../../store/cart-context'
import Confirm from '../../UI/Confirm/Confirm';
import Meal from '../../Meals/Meal/Meal'
const CartDetails = () => {
    const ctx = useContext(CartContext)
    const [showConfirm, setShowConfirm] = useState(false);
    const showConfirmHandler = ()=>{
        setShowConfirm(true)
    }
    const cancelHandler = (e)=>{
        e.stopPropagation()
        setShowConfirm(false)
    }
    const okHandler = ()=>{
        ctx.clearCart()
    }
    return (
        //onClick={cancelHandler}
        <Backdrop> 
            {showConfirm && <Confirm 
                onCancel={cancelHandler} 
                onOK = {okHandler} 
                confirmText = {'确认清空购物车吗？'}
            />}
            <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
                <div className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div 
                        className={classes.Clear}
                        onClick={showConfirmHandler}    
                    >
                        <FontAwesomeIcon icon={faTrash} className={classes.ClearIcon}/>
                        <span className={classes.ClearText}>清空购物车</span>
                    </div>
                </div>
                <div className={classes.MealList}>
                    {
                        ctx.items.map(item => 
                            <Meal noDesc key={item.id} meal={item}></Meal>
                        )
                    }
                </div>
            </div>
        </Backdrop>
    );
}

export default CartDetails;
