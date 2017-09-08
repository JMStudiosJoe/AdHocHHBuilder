// your code goes here ...
var persons = []
var addPersonButton = document.getElementsByClassName('add')[0]
addPersonButton.addEventListener('click', function(e) {
    var url = new URL(window.location.href)
    var age = url.searchParams.get('age')
    var rel = url.searchParams.get('rel')
    var smoker = url.searchParams.get('smoker')
    var message = 'age: ' + age + ' rel: ' + rel + ' smoker: ' + smoker 
    alert(message)
    var person = {
        'relationship': 'spouse',
        'smoker': false,
        'age': 27
    }
    addPerson(person)

}, false)
function addPerson(person) {
    console.log(person)
}
