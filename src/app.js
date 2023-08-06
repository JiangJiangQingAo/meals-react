import React, { useState } from "react";
import Cart from "./component/Cart/Cart";
import FilterMeals from "./component/FilterMeals/FilterMeals";
import Meals from "./component/Meals/Meals";
import CartContext from "./component/store/cart-context";

const MEALS_DATA = [
	{
		id: "1",
		title: "汉堡包",
		desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
		price: 12,
		img: "/meals-react/meals/1.png",
	},
	{
		id: "2",
		title: "双层吉士汉堡",
		desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
		price: 20,
		img: "/meals-react/meals/2.png",
	},
	{
		id: "3",
		title: "巨无霸",
		desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
		price: 24,
		img: "/meals-react/meals/3.png",
	},
	{
		id: "4",
		title: "麦辣鸡腿汉堡",
		desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
		price: 21,
		img: "/meals-react/meals/4.png",
	},
	{
		id: "5",
		title: "板烧鸡腿堡",
		desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
		price: 22,
		img: "/meals-react/meals/5.png",
	},
	{
		id: "6",
		title: "麦香鸡",
		desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
		price: 14,
		img: "/meals-react/meals/6.png",
	},
	{
		id: "7",
		title: "香吉士汉堡包",
		desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
		price: 12,
		img: "/meals-react/meals/7.png",
	},
	{
		id: "10",
		title: "吉士汉堡包",
		desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
		price: 12,
		img: "/meals-react/meals/7.png",
	},
	{
		id: "8",
		title: "芝士汉堡包",
		desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
		price: 12,
		img: "/meals-react/meals/7.png",
	},
	{
		id: "9",
		title: "海绵宝宝",
		desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
		price: 12,
		img: "/meals-react/meals/7.png",
	},
];
const App = (props) => {
	const [mealsData, setMealsData] = useState(MEALS_DATA);
	const [cartData, setCartData] = useState({
		items: [],
		totalAmount: 0,
		totalPrice: 0,
	});

	const filterHandler = (keyword) => {
		const newMealsData = MEALS_DATA.filter(
			(item) => item.title.indexOf(keyword) !== -1
		);
		setMealsData(newMealsData);
	};

	const addItem = (meal) => {
		const newCart = { ...cartData };
		if (newCart.items.indexOf(meal) === -1) {
			newCart.items.push(meal);
			meal.amount = 1;
		} else {
			meal.amount += 1;
		}
		newCart.totalAmount += 1;
		newCart.totalPrice += meal.price;
		setCartData(newCart);
	};
	const removeItem = (meal) => {
		const newCart = { ...cartData };
		meal.amount -= 1;
		if (meal.amount === 0) {
			newCart.items.splice(newCart.items.indexOf(meal), 1);
		}
		newCart.totalAmount -= 1;
		newCart.totalPrice -= meal.price;
		setCartData(newCart);
	};
	const clearCart = () => {
		const newCart = { ...cartData };
		newCart.items.forEach(item => delete (item.amount));
		newCart.items = [];
		newCart.totalAmount = 0;
		newCart.totalPrice = 0;
		setCartData(newCart)

	};
	return (
		<CartContext.Provider value={{ ...cartData, addItem, removeItem , clearCart}}>
			<div>
				<FilterMeals onFilter={filterHandler}></FilterMeals>
				<Meals mealsData={mealsData}></Meals>
				<Cart></Cart>
			</div>
		</CartContext.Provider>
	);
};

export default App;
