(()=> {

    // make an ajax request using the fetch API (streamlined ajax)
    let userSection = document.querySelector(".profPanel"),
        textmuted = document.querySelector(".text-muted").content;
        textprimary = document.querySelector(".text-primary").content;
        timeslot = document.querySelector(".list-inline").content;
        
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => { 
        function handleDataSet(data){
            for (let user in data) {

    debugger;
                let currentUser = textmuted.cloneNode(true),
                    currentUserText = currentUser.querySelector('.panel').children;
    
                currentUserText[1].textContent = data[user].coursename;
                currentUserText[2].textContent = data[user].coursecode;
                currentUserText[3].textContent = data[user].profname;
                currentUserText[4].textContent = data[user].classtime;
    
                userSection.appendChild(currentUser);
     }
    }
       
})

    .catch((err) => {
        console.log(err);})


})();