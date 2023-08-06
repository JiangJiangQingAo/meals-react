import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.js";
import "./index.css";

//设置移动端的适配
document.documentElement.style.fontSize = 100 / 750 + "vw"; 
//视口的总宽度为750rem，除以几，视口的宽度就是多少rem

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
