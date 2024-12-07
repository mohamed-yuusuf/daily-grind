/*
	daily_grind.js

	Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

	One unique image, with appropriate and matching content in the alt tag.  
	A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday).

	A unique color that supports the image and paragraph of content
	The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

	
	Here are the items we need for each coffee 

	name - Bubble Tea for example
	pic - An image of a bubble tea
	day - For example Wednesday 
	alt - The data in the alt tag
	color - A color to match the coffee 
	desc - A description of the coffee 

*/
let myDate = new Date();
let myDay =  myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
//console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
	myDay = urlParams.get("day");
 }
myDay = parseInt(myDay);//must change to integer for switch

switch(myDay){
	
	case 0:

		today = "Sunday";

		coffee = {  
			name: "Pumpkin Spice", 
			day: "Sunday",
			alt: "A pic of a Pumpkin Spice Latte", 
			color: "#a58e71", 
			pic: "images/pumpkin-spice.jpg", 
			desc: `Embrace the flavors of the season with our Pumpkin Spice Latte, a cozy blend of bold espresso, creamy steamed milk, and the perfect balance of pumpkin, cinnamon, nutmeg, and clove. Topped with a swirl of whipped cream and a sprinkle of autumn spices, this beloved classic captures the warmth and comfort of fall. Whether you're savoring a crisp morning or a chilly evening, our Pumpkin Spice Latte is your ultimate mountain-inspired autumn treat.`

		};
		
	break;

	case 1:
		today = "Monday";

		coffee = {  
			name: "Cold Brew", 
			day: "Monday",
			alt: "A pic of a Cold Brew", 
			color: "#ffffff", 
			pic: "images/cold-brew.jpg", 
			desc: `Experience coffee at its most refreshing with our expertly crafted Cold Brew. Slowly steeped in cool water for over 12 hours, this rich, velvety drink delivers a bold coffee flavor with naturally low acidity and a smooth finish. Perfectly chilled and irresistibly smooth, our Cold Brew is a refreshing pick-me-up, whether enjoyed black or paired with creamy milk and sweet syrups. Sip it on a hot day or savor it as an all-day energizer—it's coffee, redefined.`
			
		};
	break;
	
	case 2:
		today = "Tuesday";

		coffee = {  
			name: "Cappucino", 
			day: "Tuesday",
			alt: "A pic of a Cappucino", 
			color: "#f3f1ee", 
			pic: "images/cappucino.jpg", 
			desc: `Savor the perfect harmony of bold espresso, velvety steamed milk, and a luscious layer of frothy foam with our expertly crafted Cappuccino. This beloved classic strikes the ideal balance between rich flavor and creamy texture, creating a coffee experience that’s smooth, indulgent, and satisfying. Whether you enjoy it as is or enhanced with a touch of cinnamon, cocoa, or your favorite syrup, our Cappuccino is a cozy, comforting delight in every cup.`

		};
	break;

	case 3:
		today = "Wednesday";


		coffee = {  
			name: "Flat White", 
			day: "Wednesday",
			alt: "A pic of a Flat White Coffee", 
			color: "#dcd5cc", 
			pic: "images/flat-white.jpg", 
			desc: `Discover the understated elegance of a Flat White, where bold espresso meets silky steamed milk in perfect harmony. With its rich, velvety microfoam and robust coffee flavor, this drink offers a smooth, balanced experience that highlights the essence of the beans. Simple yet sophisticated, the Flat White is ideal for those who appreciate a pure and refined coffee moment. Crafted with care and inspired by the mountains, it’s a cup of warmth and perfection in every sip.`

		};
	break;

	case 4:
		today = "Thursday";

		coffee = {  
			name: "Caramel Latte", 
			day: "Thursday",
			alt: "A pic of a Caramel Latte", 
			color: "#d0c7bb", 
			pic: "images/caramel-latte.jpg", 
			desc: `Treat yourself to the irresistible charm of a Caramel Latte, where bold espresso meets creamy steamed milk and a luscious swirl of golden caramel. Topped with a velvety layer of foam and a drizzle of caramel sauce, this decadent drink is the perfect blend of sweetness and comfort. Whether you’re starting your day or savoring an afternoon pick-me-up, our Caramel Latte is like a warm hug inspired by the heart of the mountains.`

		};
	break;

	case 5:
		today = "Friday";


		coffee = {  
			name: "Mocha", 
			day: "Friday",
			alt: "A pic of a Mocha", 
			color: "#c5b9aa", 
			pic: "images/mocha.jpg", 
			desc: `Elevate your coffee experience with our Mocha, perfect union of bold espresso, velvety steamed milk, and indulgent chocolate. Topped with a swirl of whipped cream and a dusting of cocoa, this decadent drink is a treat for coffee and chocolate lovers alike. Whether you’re craving a cozy morning boost or a sweet afternoon indulgence, our Mocha offers the warmth and richness of the mountains in every sip.`

		};
	break;

	case 6:
		today = "Saturday";

		coffee = {  
			name: "Frappuccino", 
			day: "Saturday",
			alt: "A pic of a Frappuccino", 
			color: "#ad9d88", 
			pic: "images/frapuccino.jpg", 
			desc: `Indulge in the ultimate coffee treat with our creamy, dreamy Frappuccino. Blended to perfection, this icy delight combines rich espresso, velvety milk, and your choice of decadent flavors, all crowned with a swirl of whipped cream and a drizzle of pure bliss. Whether you're craving classic mocha, caramel's golden sweetness, or a seasonal twist, our Frappuccino is the perfect pick-me-up for any time of day. Cool, refreshing, and irresistibly indulgent—it’s more than just coffee; it’s an experience.`

		};
		
	break;

	default:
		today = "Something went wrong";
}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("body").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
	let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
	<h3 class="feature"><strong>${coffee.day}'s Special:</strong> 
	<strong>${coffee.name}.</strong><h3/>
	<p>${coffee.desc}</p>`; 

	return myReturn;

}