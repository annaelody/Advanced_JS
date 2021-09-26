const init = () => {

  const array = [1, 2, 3, 4, 5]
  array.forEach(element => {
    console.log(element)
  })


  const obj = {
    name: 'Ovik',
    age: '25',
    stack: {
      frontend: 'React',
      backend: 'Node',
    },
  }
  const {
    name,
    age,
    stack: { frontend, backend },
  } = obj
  console.log(frontend, backend)
  const newObj = { ...obj, name: 'Yura', }
  console.log(newObj)



  const arrayWithNames = ['Ovik', 'Vlad', 'Maria']
  const [firstName, secondName] = arrayWithNames
  console.log(firstName)


  const newArrayWithNames = ['Yura', ...arrayWithNames, 'Sveta', ...arrayWithNames, 'Andrey']
  arrayWithNames[0] = 'Katya'
  console.log(newArrayWithNames)




  function newFunc () {
    let varA = 10;
    const constB = 12

    
    console.log(varA)
  }

  const thirdObj = {a: 'a'}
  thirdObj.a = 'b'
  thirdObj.c = 'c'
  console.log(thirdObj)

  const thirdArray = [1,2,3]
  thirdArray[0] = 10
  console.log(thirdArray)


  const carName = 'Audi'
  const plateNumber = 'ABC123'

  // const c = 'Car with a ' + carName +' have plate number ' + plateNumber
  const c = `Car with a ${carName} have plate number ${plateNumber}`
  console.log(c)

}

window.onload = init
