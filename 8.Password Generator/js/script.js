let keyList = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'
let password = ''

let generatePass = (plength) => {

    password = ''

    for (i = 0; i < plength; i++){

        password += keyList.charAt(Math.floor(Math.random() * keyList.length))

    }
    return password;
}

let passwordGen = (passL) => {
    document.output.password.value = generatePass(passL)
}

// console.log(keyList.charAt(0));