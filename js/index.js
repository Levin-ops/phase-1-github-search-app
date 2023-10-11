const init = ()=> {
    const searchForm = document.querySelector('form');

    searchForm.addEventListener('submit',(event)=>{
        event.preventDefault()
        const nameInput = document.querySelector('input#search');

        console.log(nameInput.value);


        fetch(`https://api.github.com/search/users/${nameInput.value}`)
        .then(response=>response.json())
        .then(data =>{
            const userList = document.querySelector(`ul#user-list`);
            const userRepo = document.querySelector(`ul#repos-list`);

            userList.innerText = data.userList;
            userRepo.innerText = data.userRepo;
        })
    })
}


document.addEventListener('DOMContentLoaded', init);