var age;
getAge(new Date(1994, 01, 03), function (result) {
    age = result.toString();
    console.log(age);
});

exports.data = {
	"title": "Mitch Andrews | Game Developer",
	"age": age
};

function getAge(birthdate, callback)
{
    var date = new Date();
    var age = date.getFullYear() - birthdate.getFullYear();
    if (birthdate.getMonth() > date.getMonth() || (birthdate.getMonth() >= date.getMonth() && birthdate.getDay() > date.getDay()))
    {
        age -= 1;
    }
    callback(age);
}