class User {
	constructor(firstName, lastName, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
};

let usersArr = [];

const addUser = () => {
	let firstName = document.getElementById('firstName').value;
	let lastName = document.getElementById('lastName').value;
	let email = document.getElementById('email').value;

	if(firstName !== '' && lastName !== '' && email !== ''){
		if(!validateEmail(email)) {
			alert('Invalid email')
		} else {
			let newUser = new User(firstName,lastName,email);
			usersArr.push(newUser)

			this.resetInput();

			let dateAdd = new Date();
			let h = dateAdd.getHours();
			let m = dateAdd.getMinutes();
			let s = dateAdd.getSeconds();
			let time = h + ":" + m + ":" + s;
			dateAdd = document.createElement('th');
			dateAdd.innerHTML = time;
			dateAdd.className = 'dateAdd';

			let listOfUsers = document.getElementById('listOfUsers');
			listOfUsers.className = 'listOfUsers';

			let elemtList = document.createElement('tr');

			let userFirstName = document.createElement('th');
			userFirstName.innerHTML = usersArr[0].firstName;
			elemtList.appendChild(userFirstName);

			let userLastName = document.createElement('th');
			userLastName.innerHTML = usersArr[0].lastName;
			elemtList.appendChild(userLastName);

			let userEmail = document.createElement('th');
			userEmail.innerHTML = usersArr[0].email;
			elemtList.appendChild(userEmail);

			elemtList.appendChild(dateAdd);

			let remove = document.createElement('button');
			remove.className = 'removeBtn';
			remove.innerText = "Remove";
			elemtList.appendChild(remove);

			remove.onclick = function() {
				let listItem = this.parentNode;
				listOfUsers = listItem.parentNode;
				listOfUsers.removeChild(listItem);
			}

			usersArr.forEach(item => {
				listOfUsers.appendChild(elemtList);
			});
			
			userFirstName.contentEditable = true;
			userLastName.contentEditable = true;
		}
	}else{
		alert("Заповніть всі поля")
	}
	
	usersArr.splice(-1);
}

function validateEmail(email){
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function resetInput(){
	document.getElementById('firstName').value="";
	document.getElementById('lastName').value="";
	document.getElementById('email').value="";
}