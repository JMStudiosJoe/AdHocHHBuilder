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

    var rel = selectRel.value
    var smoker = smokerCheck.value == 'on' ? true: false
    var age = Number(inputAge.value)
    if (validateAge(age) && rel !== '') {
        var person = {
            'age': age,
            'rel': rel,
            'smoker': smoker
        }
        addPerson(person)
    }
    else {
        alert('Invalid age or relation please try again, age must be greater than 0')
    }

}, false)

function removePreviousPerson(e) {
    e.preventDefault()
    persons.pop()
    displayHousehold()
}

function validateAge(age) {
    return age > 0
}

function addPerson(person) {
    persons.push(person)
    displayHousehold()
}

function displayHousehold() {
    householdList.innerHTML = ''
    for (var person of persons) {
        var li = document.createElement('li')
        var personText = 'age: ' + person['age'] + '\nrelationship: ' + person['rel'] + '\nSmoker: ' + person['smoker']
        li.appendChild(document.createTextNode(personText))
        householdList.appendChild(li)
    }

    var removeButton = document.createElement('button')
    removeButton.addEventListener('click', removePreviousPerson, false)
    removeButton.appendChild(document.createTextNode('Remove Previous'))
    householdList.appendChild(removeButton)
}
