


const getUser = function() {
	
    fetch('https://randomuser.me/api/?results=10')
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
        //assigning data
        let showUserData = data.results;
        let container = `<div></div> `
        //loop the data
        showUserData.map(userData => {
            container += `
    
                    <div class="col-lg-4 pb-5 mb-5">
                    <div class="div_card card_frame text-center">
                        <div class="card m-4 bg-light">
                                <div class="d-flex justify-content-center border-bottom">
                                    <img id="image" class="w-25 rounded-pill py-2" src="${userData.picture.large}">
                                </div>
                            
                            <div class="card-body">
                                <h4>Name: ${userData.name.first}<br></h4>
                                <h4>Surname: ${userData.name.lastname}</h4>
                                <h4 class="card-text">Age: ${userData.dob.age}</h4>
                                <h4 class="card-text">Email: ${userData.email}</h4>
                                <h4 class="card-text">Location: ${userData.location.country}</h4>
                            </div>
                        </div>
                    </div>
                    </div>`;
        });
        //display users in your page
        
        document.getElementById('container').innerHTML = container;

    });

}
getUser();







// ........................................................

// function getUser () {
//     fetch("https://randomuser.me/api/")
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data)
//         showUser(data)
//     })
// } 
// getUser();



// // let url = "https://randomuser.me/api/"
//  function getUser () {
//     fetch("https://randomuser.me/api/?10")
//     .then((response) => {
//         return response.json();
//     }).then(function(data) => {
//         console.log(data)
//        let displayUser = data.results;
//        let container = `<div></div>`
        
//         // loop
//     displayUser.map(user => {
//         container +=`
//         <div class="row">
//         <div class="col-md-12 bg-light m-4">
//             <header class="text-center bg-dark display-1 mt-4 mb-3">
//               <h1>Random User</h1>
//             </header>
//             <div class="card font-weight-bold   text-dark">
//                 <img class="card-img-top w-100" id="img">
//                 <div class="card-body">
//                  <p class="text-capitalize" id="name">${user.name}</p>
//                  <p id="lastname">${user.lastname}</p> 
//                   <p class="text-title" id="title">${user.title}</p>
//                  <p class=" " id="age">${user.age}</p> 
//                  <p class="" id="dob">${user.dob}</p> 
//                  <h3 class="" id="gender">${user.gender}</h3>
//                  <p class=" " id="phone">${user.phone}</p>
//                  <p class="" id="location">${user.location}</p>
//                 <p class=" " id="country">${user.country}</p>
//                 <p class="" id="email">${user.email}</p>
//                 </div>
//               </div>
    
//         </div>`;
//     });

//         document.getElementsById('container').innerHTML = container;

//    });
// } 
// getUser();






// showUser = function (user) {
    
// }

// showUser = function (user) {
//     document.getElementById('img').src =`
//     ${user.results[0].picture.large} `

//     document.getElementById('name').innerText=
//      `name: ${user.results[0].name.first} `

//      document.getElementById('lastname').innerText=
//      `lastname: ${user.results[0].name.last} `

//      document.getElementById('title').innerText=
//      `title: ${user.results[0].name.title}`

//     document.getElementById('age').innerText=
//     `age: ${user.results[0].dob.age}`

//     document.getElementById('dob').innerText=
//     `dob: ${user.results[0].dob.date}`

//     document.getElementById('gender').innerText=
//     `gender: ${user.results[0].gender}`
    
//     document.getElementById('phone').innerText=
//     `phone: ${user.results[0].phone}`

//     document.getElementById('email').innerText=
//     `email: ${user.results[0].email}`

//     document.getElementById('location').innerText=
//     `location: ${user.results[0].location.city}`

//     document.getElementById('country').innerText=
//     `country: ${user.results[0].location.country}`
// }




// showUser = function (user) {
//     document.getElementById('img').src =`
//     ${user.results[0].picture.large} `

//     document.getElementById('name').innerText=
//      `name: ${user.results[0].name.first} `

//      document.getElementById('lastname').innerText=
//      `lastname: ${user.results[0].name.last} `

//      document.getElementById('title').innerText=
//      `title: ${user.results[0].name.title}`

//     document.getElementById('age').innerText=
//     `age: ${user.results[0].dob.age}`

//     document.getElementById('dob').innerText=
//     `dob: ${user.results[0].dob.date}`

//     document.getElementById('gender').innerText=
//     `gender: ${user.results[0].gender}`
    
//     document.getElementById('phone').innerText=
//     `phone: ${user.results[0].phone}`

//     document.getElementById('email').innerText=
//     `email: ${user.results[0].email}`

//     document.getElementById('location').innerText=
//     `location: ${user.results[0].location.city}`

//     document.getElementById('country').innerText=
//     `country: ${user.results[0].location.country}`
// }
