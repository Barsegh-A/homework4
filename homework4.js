//2
const char = function(n,c){
	let i = 0;
	let str = "";
	while(i < n){
		str += c;
		i++;
	}
	return str;
};

const row = function(m,n){
	console.log(char(m, " ") + char(n, "*"));
};

const triangleStars = function(h){
	let i = 0;
	let spaceCount = 0;
	let starCount = 2*h-1;
	while(i < h){
		row(spaceCount, starCount);
		spaceCount++;
		starCount -= 2;
		i++;
	}
};
/*
const triangleStars = function(n){
	let spaceNum = 0;
	let starsNum = 2*n -1;
	while(starsNum > 0){
		let line = '';
		let currentSpaceNum = spaceNum;
		let currentStarNum = starsNum;
		while(currentSpaceNum > 0){
			line = line + " ";
			currentSpaceNum--;
		}
		while(currentStarNum > 0){
			line = line + "*";
			currentStarNum--;
		}
		spaceNum++;
		starsNum -= 2;
		console.log(line);
	}
};*/

triangleStars(7);

//3
const multiToSingle = function(arr){
	const singleArr = [];
	let i = 0;
	while(i < arr.length){
		let currentArr = arr[i];
		let j = 0;
		while(j < currentArr.length){
			singleArr[singleArr.length] = currentArr[j];
			j++;
		}
		i++;
	}
	return singleArr;
};

console.log(multiToSingle([[1, 2, 3], [4, 5, 6]]));

//4
const findMinMax = function(arr,bool){
	let m = arr[0];
	let i = 1;
	while(i < arr.length){
		if(bool === true){
			if(m < arr[i]){
				m = arr[i];
			}
		}else if(bool === false){
			if(m > arr[i]){
				m = arr[i];
			}
		}else{
			console.log("Wrong Input!");
		}
		i++;
	}
	return m;
};

console.log(findMinMax([4, 2, 66, -44, 8], false));

//5
const forEach = function(arr, func){
	let i = 0;
	while(i < arr.length){
		func(arr[i]);
		i++;
	}
};

forEach([4, 3, 2], function(val) {

  console.log(val);

});

//6
const sum = function(arr){
	let sum = 0;
	let i = 0;
	while(i < arr.length){
		sum += arr[i];
		i++;
	}
	return sum;
};
console.log(sum([4,3,2]));

//7
const reverse = function(str){
	let revStr = "";
	let i = str.length-1;
	while(i >= 0){
		revStr += str[i];
		i--;
	}
	return revStr;
};
console.log(reverse("abcd"));

//8
const checkerboard = function(n){
	let i = 0;
	while(i < n){
		if(i%2 === 0){
			console.log(char(n,"* "));
		}else{
			console.log(char(n, " *"));
		}
		i++;
	}
};

/*const checkerboard = function(n){
	let i = 0;
	while(i < n){
		let line = "";
		let j = 0;
		while(j < 2*n){
			if(i%2 === 0){
				if(j%2 === 0){
					line += "*";
				}else{
					line += " ";
				}	
			}else{
				if(j%2 === 0){
					line += " ";
				}else{
					line += "*";
				}	
			}
			j++;
		}
		i++;
		console.log(line);
	}
};*/

checkerboard(5);
