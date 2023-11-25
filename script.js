//your code here!
const sc = document.getElementById("infi-list");
let ct = 1;
for(;ct<=10; ct++){
	const li = document.createElement("li");
	li.innerText = 'item ' +ct;
	li.className = "item";
	sc.appendChild(li);
}

sc.addEventListener("scroll",()=>{
	let sh = sc.scrollTop;
	let mxSH= sc.scrollHeight-sc.clientHeight;

	if (mxSH-sh<=5) {
		aTMI();
	}
})
function aTMI() {
	const li1 = document.createElement("li");
	li1.innerText = 'item ' +ct++;
	li1.className = "item";
	const li2 = document.createElement("li");
	li2.innerText = 'item ' +ct++;
	li2.className = "item";
	sc.append(li1,li2)
}