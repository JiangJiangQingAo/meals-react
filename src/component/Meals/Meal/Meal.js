//显示的食物信息
import React from "react";
import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter";
function Meal(props) {
	return (
		<div className={classes.Meal}>
			<div className={classes.ImgBox}>
				<img src={props.meal.img} />
			</div>
			<div className={classes.DescBox}>
				<div className={classes.TitleDiv}>
					<h3 className={classes.Title}>{props.meal.title}</h3>
					{props.noDesc ? null :<p className={classes.Desc}>{props.meal.desc}</p>}
				</div>
				
				<div className={classes.PriceWrap}>
					<span className={classes.Price}>{props.meal.price}</span>
					<Counter 
						meal={props.meal}
					></Counter>
				</div>
			</div>
		</div>
	);
}

export default Meal;
