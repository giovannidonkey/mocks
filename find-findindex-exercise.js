//Find Findindexof Prac

function findUserByUsername(uArr, username){
	return uArr.find(function(user){ return user.username === username;});
}

function removeUser(uArr, username){
	let kicked = uArr.findIndex(function(user){ return user.username === username;});
	if(kicked === -1){ 
		return;
	}else{
		return uArr.splice(kicked,1)[0];
	}
}
