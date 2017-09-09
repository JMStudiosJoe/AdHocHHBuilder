// your code goes here ...
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

function removePreviousPerson(e) {
    e.preventDefault()
    persons.pop()
    displayHousehold()
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

function addPerson(person) {
    persons.push(person)
    displayHousehold()
}

function createRemoveButtonForHousholdList() {
    var removeButton = document.createElement('button')
    removeButton.addEventListener('click', removePreviousPerson, false)
    removeButton.appendChild(document.createTextNode('Remove Previous'))
    return removeButton
}

function displayPersonDetails(person) {
    return 'age: ' + 
           person['age'] + 
           ' | relationship: ' + 
           person['rel'] + 
           ' | smoker: ' + 
           person['smoker']
}

function displayHousehold() {
    householdList.innerHTML = ''
    for (var person of persons) {
        var li = document.createElement('li')
        var personDetails = displayPersonDetails(person)
        li.appendChild(document.createTextNode(personDetails))
        householdList.appendChild(li)
    }
    var removeButton = createRemoveButtonForHousholdList()
    householdList.appendChild(removeButton)
}

function submitPersons(e) {
    e.preventDefault()
    var jsonPersons = {
        'householdPersons': persons
    }
    displaySubmission(JSON.stringify(jsonPersons))
}

function displaySubmission(submitted) {
    pre.innerHTML += submitted
    pre.style.display = 'block'
    document.body.appendChild(pre)
}
