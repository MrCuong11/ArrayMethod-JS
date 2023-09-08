//forEach 1: lặp qua các phần tử trong mảng
var courses = [
    'javascript',
    'python',
    'Ruby'
]
Array.prototype.forEach1 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

courses.forEach1((item) => {
    console.log(item);
});




//my Find: trả về phần tử đầu tiên thỏa mãn điều kiện
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}
let Arrayss = [1, 2, 3, 4, 5];
var result = Arrayss.myFind((num) => {
    return num > 2;
});

console.log(result);





//filter1: trả về mảng gồm các phần tử thỏa mãn điều kiện 

Array.prototype.filter1 = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        // hàm callback trả về true tức là thỏa mãn điều kiện bên dưới (num % 2 == 0)
        if (callback(this[i], i, this) === true) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
var Arrays = [1, 2, 3, 4, 5, 6, 7, 8];

// num == callback  
var result = Arrays.filter1(num => {
    return num % 2 == 0;
});
console.log(result.join(', '));






//map2: trả về mảng mới chứa các phần tử tự chỉnh ở return
Array.prototype.map2 = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

var courses = [
    'javascript',
    'python',
    'Ruby'
];
var htmls = courses.map2((course, index) => {
    return (course + ' ' + index);
})
console.log(htmls.join(', '));




// some: chỉ một điều kiện thỏa mãn => true
Array.prototype.some1 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'typescript',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    }
]

var result = courses.some1((course) => {
    return course.coin == 0;
});
console.log(result);


//every: chỉ một điều kiện không thỏa mãn => false
Array.prototype.every2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
}


var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'typescript',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    }
]

var result = courses.every2((course) => {
    return course.coin == 0;
});
console.log(result);





// ví dụ về reduce 
var arrays = [1, 2, 3, [3, 4], 5, 6, [5, 6, 0, 8], 7, 8];

var result = arrays.reduce((flat, item) => {
    return flat.concat(item);
}, []);
console.log(result);


//reduce2
Array.prototype.reduce2 = function(callback, results){
    var i = 0;
    if(arguments.length < 2){
        i = 1;
        results = this[0];
    }
    for(i; i < this.length; i++){
        results = callback(results, this[i], i, this);
    }
    return results;
}
const number =[1,2,3,4,5];
var output = number.reduce2((total, num)=>{
    return total + num;
})
console.log(output);