//forEach 1: lặp qua các phần tử trong mảng, không có return 
var courses = [
    'javascript',
    'python',
    'Ruby'
]
courses.length = 100;
// Phương thức hasOwnProperty trả về một giá trị boolean:

// true nếu đối tượng có chứa thuộc tính được chỉ định.
// false nếu đối tượng không có thuộc tính được chỉ định hoặc 
// thuộc tính được chỉ định là một thuộc tính kế thừa từ prototype của đối tượng.
Array.prototype.forEach1 = function (callback) {
    for (const key in this) {
        if (this.hasOwnProperty(key)){
            callback(this[key], key, this);
        }
    }
}

courses.forEach1((item) => {
    // console.log(item);
});





