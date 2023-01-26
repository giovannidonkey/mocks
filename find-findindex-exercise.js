//Find Findindexof Prac

function findUserByUsername(uArr, username){
	return uArr.find(function(user){ return user.username === username;});
}

function removeUser(uArr, username){
	let kick = uArr.findIndex(function(user){ return user.username === username;});
	if(kick === -1){ 
		return;
	}else{
		return uArr.splice(kick,1)[0];
	}
}