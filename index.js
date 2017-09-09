var persons = []
var addPersonButton = document.getElementsByClassName('add')[0]
var householdList = document.getElementsByClassName('household')[0]
var form = document.forms[0]
var inputAge = document.getElementsByName('age')[0]
var selectRel = document.getElementsByName('rel')[0]
var smokerCheck = document.getElementsByName('smoker')[0]
var submitButton = form[form.length - 1]
var pre = document.getElementsByTagName('pre')[0]

submitButton.addEventListener('click', submitPersons, false)
addPersonButton.addEventListener('click', handleAddPersonClick, false)

function handleAddPersonClick(e) {
    e.preventDefault()

    var rel = selectRel.value
    var smoker = smokerCheck.checked
    var age = Number(inputAge.value)

    var errorMessage = validateAge(age)
    errorMessage += validateRel(rel)

    if (errorMessage.length ==  0) {
        var person = {
            'age': age,
            'rel': rel,
            'smoker': smoker
        }
        addPerson(person)
    }
    else {
        alert(errorMessage)
    }
}

function addPerson(person) {
    persons.push(person)
    displayHousehold()
}

function removePerson(e) {
    e.preventDefault()
    var indexToRemove = e.target.id
    persons.splice(indexToRemove, 1)

    displayHousehold()
}

function submitPersons(e) {
    e.preventDefault()
    var jsonPersons = {
        'householdPersons': persons
    }
    displaySubmission(JSON.stringify(jsonPersons))
}

function validateAge(age) {
    if (age > 0) {
        return ''
    }
    else {
        return 'Invalid age, must be greater than 0'
    }
}

function validateRel(rel) {
    switch (rel) {
        case '':
            return ' Invalid relationship'

        default:
            return ''
    }
}

function displayHousehold() {
    householdList.innerHTML = ''
    for (var index = 0; index < persons.length; index++) {
        var person = persons[index]
        var li = document.createElement('li')
        var personDetails = formatPersonDetails(person)
        var removeButton = createRemoveButtonForHousholdList(index)
        li.appendChild(document.createTextNode(personDetails))
        li.appendChild(removeButton)
        householdList.appendChild(li)
    }
}

function displaySubmission(submitted) {
    pre.innerHTML += submitted
    pre.style.display = 'block'
    pre.style.whiteSpace = 'pre-wrap'
    pre.style.wordBreak = 'keep-all'
    document.body.appendChild(pre)
}

function formatPersonDetails(person) {
    return 'age: ' + person['age'] + ' | relationship: ' + person['rel'] + ' | smoker: ' + person['smoker']
}

function createRemoveButtonForHousholdList(index) {
    var removeButton = document.createElement('button')
    removeButton.addEventListener('click', removePerson, false)
    removeButton.id = index
    removeButton.appendChild(document.createTextNode(' | X |'))
    return removeButton
}
