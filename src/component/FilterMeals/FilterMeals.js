import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css"

const FilterMeals = (props) => {
    const inputChangeHandler = e =>{
        const keyword = e.target.value.trim()
        props.onFilter(keyword)
    }

	return (
		<div className={classes.FilterMeals}>
			<div className={classes.SearchInput}>
				<input
					type="text"
					placeholder={"请输入关键字"}
                    className={classes.InputOuter}
                    onChange={inputChangeHandler}
				/>
				<FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}></FontAwesomeIcon>
			</div>
		</div>
	);
};

export default FilterMeals;
