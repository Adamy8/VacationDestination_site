(function(){
    'use strict';

    const  detailsForm = document.querySelector('#destinations_details_form')
    detailsForm.addEventListener('submit',handleFormSubmit);

    function handleFormSubmit(evt){
        evt.preventDefault();

        // step one, get the value from the form
        const destName = evt.target.elements["name"].value;
        const destLocation = evt.target.elements["location"].value;
        const destPhoto = evt.target.elements["photo"].value;
        const destDesc = evt.target.elements["description"].value;
        // step two, clear the form
        for (let i=0;i<detailsForm.length;i++){
            detailsForm.elements[i].value = '';
        }
        // step three, run a function that creates new card
        const destCard = createDestinationCard(destName,destLocation,destPhoto,destDesc);
        
        // step four, change the header at the top of the destination list
        const wishListContainer = document.querySelector('#destination_container');
        if(wishListContainer.children.length === 0){
            document.querySelector('#title').innerText = "My Wish List";
        }

        document.querySelector('#destination_container').appendChild(destCard);

        // step five, add the card
        function createDestinationCard(name,location,photoURL,desc){
            // card
            const card = document.createElement('div');
            card.className = "card";

            const image = document.createElement('img');
            image.setAttribute('alt',name)
            const generalPhotoURL = "images/signpost.jpg";
            if(photoURL === ''){
                image.setAttribute('src',generalPhotoURL);
            }
            else{
                image.setAttribute('src',photoURL);
            }
            card.appendChild(image);

            // card-body
            const card_body = document.createElement('div');
            card_body.className = "card-body";
            card.appendChild(card_body);

            const head3 = document.createElement('h3');
            head3.innerText = name;
            card_body.appendChild(head3);//apendChild
            const head4 = document.createElement('h4');
            head4.innerText = location;
            card_body.appendChild(head4);//apendChild

            if(desc != ""){
                const card_text = document.createElement('p');
                card_text.className = 'card-text';
                card_text.innerText = desc;
                card_body.appendChild(card_text);//apendChild
            }

            const removeBtn = document.createElement('button');
            removeBtn.innerText = 'Remove';
            removeBtn.addEventListener('click',function(evt){
                (evt.target.parentElement.parentElement).remove();
            });
            card_body.appendChild(removeBtn);//apendChild

            return card;
        }
    }

    // document.querySelector('#destination_container').addEventListener('click', function(event) {
    //     // Check if a remove button was clicked
    //     if (event.target.classList.contains('remove-btn')) {
    //         // Get the card element to remove
    //         var card = event.target.closest('.card');
    //         if (card) {
    //             card.remove();
    //         }
    //     }
    // });

})();