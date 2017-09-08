// your code goes here ...
var persons = []
var addPersonButton = document.getElementsByClassName('add')[0]
var householdList = document.getElementsByClassName('household')[0]
var form = document.forms[0]
var inputAge = document.getElementsByName('age')[0]
var selectRel = document.getElementsByName('rel')[0]
var smokerCheck = document.getElementsByName('smoker')[0]

addPersonButton.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(form)
    console.log(inputAge.value)
    console.log(selectRel.value)
    console.log(smokerCheck.value)

    var url = new URL(window.location.href)
    var rel = url.searchParams.get('rel')
    var smoker = url.searchParams.get('smoker') == 'on' ? true: false
    var age = url.searchParams.get('age')
    if (validateAge(Number(age))) {
        var person = {
            'age': age,
            'rel': rel,
            'smoker': smoker
        }
        addPerson(person)
    }
    else {
        //alert('Invalid age please try again, age must be greater than 0')
    }

}, false)

function validateAge(age) {
    return age > 0
}

function addPerson(person) {
    persons.push(person)
}

function displayHousehold() {
    householdList.innerHTML = ''
    console.log('display householdlist with persons: ', persons.length)
    for (var person of persons) {
        var li = document.createElement('li')
        var personText = 'age: ' + person['age'] + '\nrelationship: ' + person['rel'] + '\nSmoker: ' + person['smoker']
        li.appendChild(document.createTextNode(personText))
        householdList.appendChild(li)
    }
}
