import  seniorsData  from "./seniors.json" assert { type: "json" };
const seniors = JSON.parse(JSON.stringify(seniorsData));
const flippedCards = []
const matchedCards = []

const initGame = () => {
  console.log("game started");
  createCards();
  hideCards()
};


const createCards = () => {
  console.log("creating cards");
  const container = document.querySelector(".container");
  let cards = ""

  seniors.forEach((senior) => {
    cards += `<div onclick="myFunction(this, ${senior.flipped}, ${senior.id})" class="card">
         <img id=${senior.id} class="senior-pic" src="${senior.image}" alt="${senior.name}">
 </div>`;
   });

  container.insertAdjacentHTML('beforeend', cards)
};

const hideCards = () => {
    const images = document.querySelectorAll('.senior-pic')
    setTimeout(() => {
        images.forEach((img) => {
            img.alt = 'question-mark'
            img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEX///8AAAD6+vrX19fp6enS0tLf39/39/dzc3PIyMjx8fG1tbWRkZHc3NyhoaF2dnYgICB+fn6oqKhdXV1UVFQwMDC/v79ubm6FhYVFRUUPDw88PDyZmZk2Njavr69kZGQZGRkoKChMTEw9S6tzAAAFE0lEQVR4nO1a2dqqIBR1K2kSTmmWaZm9/0MeBv1l8B8P4o3rqg8NFux5o+ft2LFjx44dO3asgggldUqy6/VakHOcIN/x+n5dVDnIyMtb7JBFfYRlFAdHBC6fEGB41OsTCKovCDBUAX8PRWsxOH9DgIGwF9MKr0LA75W1GlKHCIVxqg5Di+i7cR6uwAC/5YXKZH6CbgqHnKklypNPZ/ozWmmV10l9FjxkDnfO4W79HK7yGkLpvCg+pyf+O5IJArDVD7llfUjlFRAf+jAPggwObPVza5VB+JLmF1LoqELc0vRWDpDTkUSh0LM3SmKTQiZNX40MqlHYKM3h6XlE4fBkvMfjsoLwLs0es5EDvOfHOKODkUJhYKLIensUOmnyB9/aEQL5hSfdcKFwSOkoAnthQw4MfGcRXFR9T6/eSaEAbPRt7RiUM76KkVILzuSA7goFJq+nNW2If0DBTzw1h2DmgOC0MN1fIKsCvFkU9IeH6XgGhULFODalJQqqvXE9zMD0v4qXBmBUC7BEQQ1DRzZ0AtPvaBSYGpxtKYNKAXhu9DLDkCoIfkyx8CLWKUDCJ290hVTVkfuEwJY+dhqFO9sagVJNz8L7EoWnHQo16CA+O5uH4iE118QFEcDZDgVsUMiF44FM0rZMe4c9OtiioDkdeHXCKVBjvczqptNkYqqt+SbVMfRzynKcT0GXw5tpa2rLIqhIZ7RiUhqgoZICod9oFG5stF/wYH/EXMKkYoCWFINyxkaNwZ+2trwjUyuBRuw7KOkulSAR5joFJocAbMUIb0qgj8ITUNVoA/W5UenxgJpa00YKzPyOcDOsaNBNTXdeYzC7v2wWEzUMXAg+PYKrHqhjg8FR/Mdi8kjR8QotbCA3fK6S4nPw3ftvi7njB6jel0b4xQ/jELgKnMZ83ypKWNAvvzUYcJ9AzyYwXv5vHCpzUv9qMBCWWEFmnwFdzxwqDAZVJMaHdfocP2HAeZ7BWnj4NQNujoyBRa/0FYjBQGS1qem9VkJqMBBtv+4jnK0NIzq2wmcUE5XVYbhlIQRcwbBCr2sJSCPwEN44uUDjyBr9t8qgED6DZtuZq474bekI/MyZMeq1BREbDy8TFwdQqrcxo/We94U4uhrkNKkQ6RzuATpnBBRrGF0AlczgTAieHBouInxHdOTqTgisxz0xGPNTms+5FIInRyexcddC8KSWzmFiVKx2FbSMqbYaw2HmLC7OmGK0qBKODh3iB6bqjUejDNaoFr6DLIZuEwYTBaaBibMMTcHYFed5am+zfP858OyYMdi/iPsRZgpn0UfYigKzxJut1uZvIT4fePJfjhJVHSJ17rak4PHMlaXsN1cFg4HgPupCCsVGFLykHHh6gKB1VDN8jmYrk5iBiN2m2t/g+psmGVGdEnJ21EtZAu7GbuPgPmERCKWq9ug4cRRQL6h5i9PxYejtTpY73NxmDkaT6cAqXasfjnwDrN8C8Ubr02XMCnQGMNCyCl8cuqmnQYFfgxXgzjTMSxjedLd3K/k9zJYnVwO08EXBWjAvsXmJjR1mD6HBgH9egl3m071OgScweJ1LkGUcdArcFEKHumDYhIjYxG0KpdyFiMo2asBtIjkbZj51Pte4FPwSiPAObJOOLhFt02lAc6sR5eJ60iG078+DB/Suk6cYeunelFrI231RE75gIHWIcVizVugmjQafzDf2zVblLTqV7WW4NMd4kxx6AkabF7Y7duzYsWPHjlXxD7GcMG1LRrdAAAAAAElFTkSuQmCC"
        })
    }, 1550);
}


// const flipOnClick = (cardId, element) => {
//     console.log(`CARD: ${element}`)
//     const seniors = JSON.parse(JSON.stringify(seniorsData));
//     const card = seniors.filter((senior) => senior.id === cardId)
//     if(element.firstChild().alt === 'question-mark') {
//         element.firstChild().alt = card.name
//         element.firstChild().src = card.image
//     }
// }

// window.flipOnClick = (cardId, flipped, seniorPic) => {
//   console.log(`CARD: ${cardId}`)
//   // const images = document.querySelectorAll('.senior-pic')
//   // return flipped &&  images.forEach((img) => {
//   //   if(img.id === cardId) {
//   //       console.log
//   //   }
//   // })
// }


window.myFunction = (e, isFlipped, id) => {
  if(matchedCards.includes(id)){
    return 0;
  }
  console.log('Button clicked', e.firstChild, isFlipped, id);
  const images = document.querySelectorAll('.senior-pic')
  const card = seniors.filter((senior) => senior.id === id)
  if(images[id].alt === 'question-mark') {
    images[id].src = card[0].image
    images[id].alt = card[0].name
    flippedCards.push(card[0].name)
      flippedCards.length === 2 && isMatch()

  } else if(flippedCards.includes(card[0].id)){
    images[id].alt = 'question-mark'
    images[id].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEX///8AAAD6+vrX19fp6enS0tLf39/39/dzc3PIyMjx8fG1tbWRkZHc3NyhoaF2dnYgICB+fn6oqKhdXV1UVFQwMDC/v79ubm6FhYVFRUUPDw88PDyZmZk2Njavr69kZGQZGRkoKChMTEw9S6tzAAAFE0lEQVR4nO1a2dqqIBR1K2kSTmmWaZm9/0MeBv1l8B8P4o3rqg8NFux5o+ft2LFjx44dO3asgggldUqy6/VakHOcIN/x+n5dVDnIyMtb7JBFfYRlFAdHBC6fEGB41OsTCKovCDBUAX8PRWsxOH9DgIGwF9MKr0LA75W1GlKHCIVxqg5Di+i7cR6uwAC/5YXKZH6CbgqHnKklypNPZ/ozWmmV10l9FjxkDnfO4W79HK7yGkLpvCg+pyf+O5IJArDVD7llfUjlFRAf+jAPggwObPVza5VB+JLmF1LoqELc0vRWDpDTkUSh0LM3SmKTQiZNX40MqlHYKM3h6XlE4fBkvMfjsoLwLs0es5EDvOfHOKODkUJhYKLIensUOmnyB9/aEQL5hSfdcKFwSOkoAnthQw4MfGcRXFR9T6/eSaEAbPRt7RiUM76KkVILzuSA7goFJq+nNW2If0DBTzw1h2DmgOC0MN1fIKsCvFkU9IeH6XgGhULFODalJQqqvXE9zMD0v4qXBmBUC7BEQQ1DRzZ0AtPvaBSYGpxtKYNKAXhu9DLDkCoIfkyx8CLWKUDCJ290hVTVkfuEwJY+dhqFO9sagVJNz8L7EoWnHQo16CA+O5uH4iE118QFEcDZDgVsUMiF44FM0rZMe4c9OtiioDkdeHXCKVBjvczqptNkYqqt+SbVMfRzynKcT0GXw5tpa2rLIqhIZ7RiUhqgoZICod9oFG5stF/wYH/EXMKkYoCWFINyxkaNwZ+2trwjUyuBRuw7KOkulSAR5joFJocAbMUIb0qgj8ITUNVoA/W5UenxgJpa00YKzPyOcDOsaNBNTXdeYzC7v2wWEzUMXAg+PYKrHqhjg8FR/Mdi8kjR8QotbCA3fK6S4nPw3ftvi7njB6jel0b4xQ/jELgKnMZ83ypKWNAvvzUYcJ9AzyYwXv5vHCpzUv9qMBCWWEFmnwFdzxwqDAZVJMaHdfocP2HAeZ7BWnj4NQNujoyBRa/0FYjBQGS1qem9VkJqMBBtv+4jnK0NIzq2wmcUE5XVYbhlIQRcwbBCr2sJSCPwEN44uUDjyBr9t8qgED6DZtuZq474bekI/MyZMeq1BREbDy8TFwdQqrcxo/We94U4uhrkNKkQ6RzuATpnBBRrGF0AlczgTAieHBouInxHdOTqTgisxz0xGPNTms+5FIInRyexcddC8KSWzmFiVKx2FbSMqbYaw2HmLC7OmGK0qBKODh3iB6bqjUejDNaoFr6DLIZuEwYTBaaBibMMTcHYFed5am+zfP858OyYMdi/iPsRZgpn0UfYigKzxJut1uZvIT4fePJfjhJVHSJ17rak4PHMlaXsN1cFg4HgPupCCsVGFLykHHh6gKB1VDN8jmYrk5iBiN2m2t/g+psmGVGdEnJ21EtZAu7GbuPgPmERCKWq9ug4cRRQL6h5i9PxYejtTpY73NxmDkaT6cAqXasfjnwDrN8C8Ubr02XMCnQGMNCyCl8cuqmnQYFfgxXgzjTMSxjedLd3K/k9zJYnVwO08EXBWjAvsXmJjR1mD6HBgH9egl3m071OgScweJ1LkGUcdArcFEKHumDYhIjYxG0KpdyFiMo2asBtIjkbZj51Pte4FPwSiPAObJOOLhFt02lAc6sR5eJ60iG078+DB/Suk6cYeunelFrI231RE75gIHWIcVizVugmjQafzDf2zVblLTqV7WW4NMd4kxx6AkabF7Y7duzYsWPHjlXxD7GcMG1LRrdAAAAAAElFTkSuQmCC"
  }
};

const isMatch = () => {
  const [firstName, secondName] = flippedCards
  if(firstName === secondName) {
      console.log(`it's a match: ${firstName}`)
   seniors.filter((senior, id) => {
        if(senior.name === firstName) {
          console.log(`senior name: ${senior.name} senior ID: ${senior.id}`)
            matchedCards.push(senior.id)
        }
      })
      console.log(`id's: ${matchedCards}`)
      flippedCards.length = 0
      matched()
      showStory(firstName)
  } else {
    Toastify({
      text: "isn't a match, please try again",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #a71d31, #3f0d12)",
        fontSize: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      },
    }).showToast();
    reset()
  }
}

const reset = () => {
  flippedCards.length = 0
  const images = document.querySelectorAll('.senior-pic')
  setTimeout(() => {
      images.forEach((img, id) => {
        console.log(`reset by id. current id: ${id}. matched cards id's: ${matchedCards}`)
         if(!matchedCards.includes(id))
         {
          img.alt = 'question-mark'
          img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEX///8AAAD6+vrX19fp6enS0tLf39/39/dzc3PIyMjx8fG1tbWRkZHc3NyhoaF2dnYgICB+fn6oqKhdXV1UVFQwMDC/v79ubm6FhYVFRUUPDw88PDyZmZk2Njavr69kZGQZGRkoKChMTEw9S6tzAAAFE0lEQVR4nO1a2dqqIBR1K2kSTmmWaZm9/0MeBv1l8B8P4o3rqg8NFux5o+ft2LFjx44dO3asgggldUqy6/VakHOcIN/x+n5dVDnIyMtb7JBFfYRlFAdHBC6fEGB41OsTCKovCDBUAX8PRWsxOH9DgIGwF9MKr0LA75W1GlKHCIVxqg5Di+i7cR6uwAC/5YXKZH6CbgqHnKklypNPZ/ozWmmV10l9FjxkDnfO4W79HK7yGkLpvCg+pyf+O5IJArDVD7llfUjlFRAf+jAPggwObPVza5VB+JLmF1LoqELc0vRWDpDTkUSh0LM3SmKTQiZNX40MqlHYKM3h6XlE4fBkvMfjsoLwLs0es5EDvOfHOKODkUJhYKLIensUOmnyB9/aEQL5hSfdcKFwSOkoAnthQw4MfGcRXFR9T6/eSaEAbPRt7RiUM76KkVILzuSA7goFJq+nNW2If0DBTzw1h2DmgOC0MN1fIKsCvFkU9IeH6XgGhULFODalJQqqvXE9zMD0v4qXBmBUC7BEQQ1DRzZ0AtPvaBSYGpxtKYNKAXhu9DLDkCoIfkyx8CLWKUDCJ290hVTVkfuEwJY+dhqFO9sagVJNz8L7EoWnHQo16CA+O5uH4iE118QFEcDZDgVsUMiF44FM0rZMe4c9OtiioDkdeHXCKVBjvczqptNkYqqt+SbVMfRzynKcT0GXw5tpa2rLIqhIZ7RiUhqgoZICod9oFG5stF/wYH/EXMKkYoCWFINyxkaNwZ+2trwjUyuBRuw7KOkulSAR5joFJocAbMUIb0qgj8ITUNVoA/W5UenxgJpa00YKzPyOcDOsaNBNTXdeYzC7v2wWEzUMXAg+PYKrHqhjg8FR/Mdi8kjR8QotbCA3fK6S4nPw3ftvi7njB6jel0b4xQ/jELgKnMZ83ypKWNAvvzUYcJ9AzyYwXv5vHCpzUv9qMBCWWEFmnwFdzxwqDAZVJMaHdfocP2HAeZ7BWnj4NQNujoyBRa/0FYjBQGS1qem9VkJqMBBtv+4jnK0NIzq2wmcUE5XVYbhlIQRcwbBCr2sJSCPwEN44uUDjyBr9t8qgED6DZtuZq474bekI/MyZMeq1BREbDy8TFwdQqrcxo/We94U4uhrkNKkQ6RzuATpnBBRrGF0AlczgTAieHBouInxHdOTqTgisxz0xGPNTms+5FIInRyexcddC8KSWzmFiVKx2FbSMqbYaw2HmLC7OmGK0qBKODh3iB6bqjUejDNaoFr6DLIZuEwYTBaaBibMMTcHYFed5am+zfP858OyYMdi/iPsRZgpn0UfYigKzxJut1uZvIT4fePJfjhJVHSJ17rak4PHMlaXsN1cFg4HgPupCCsVGFLykHHh6gKB1VDN8jmYrk5iBiN2m2t/g+psmGVGdEnJ21EtZAu7GbuPgPmERCKWq9ug4cRRQL6h5i9PxYejtTpY73NxmDkaT6cAqXasfjnwDrN8C8Ubr02XMCnQGMNCyCl8cuqmnQYFfgxXgzjTMSxjedLd3K/k9zJYnVwO08EXBWjAvsXmJjR1mD6HBgH9egl3m071OgScweJ1LkGUcdArcFEKHumDYhIjYxG0KpdyFiMo2asBtIjkbZj51Pte4FPwSiPAObJOOLhFt02lAc6sR5eJ60iG078+DB/Suk6cYeunelFrI231RE75gIHWIcVizVugmjQafzDf2zVblLTqV7WW4NMd4kxx6AkabF7Y7duzYsWPHjlXxD7GcMG1LRrdAAAAAAElFTkSuQmCC"
         }
      })
  }, 500);
}

const matched = () => {
  Toastify({
    text: "OMG, It's a match, you finally found your senior!",
    duration: 2000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #5aff15, #00b712)",
      fontSize: "2rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
  }).showToast();
}

const showStory = (seniorName) => {
  console.log(seniorName)
 const getSeniorDetails = seniorsData.filter((senior) => senior.name === seniorName)[0]
 
  openModal(getSeniorDetails)
}

const openModal = (seniorDeatails) => {
  const modal = document.querySelector('#myModal')
  const storyParagraph = document.querySelector('.senior-story')
  const seniorPicElem = document.querySelector('.modal-senior-pic')
  const seniorNameElem = document.querySelector('.modal-senior-name')
  modal.style.display = "block"
  storyParagraph.textContent = seniorDeatails.story + "😶"
  seniorPicElem.src = seniorDeatails.image
  seniorNameElem.textContent = seniorDeatails.name
}

window.onclick = function(event) {
  const modal = document.querySelector('#myModal')

  if (event.target == modal) {
    modal.style.display = "none";
  }
}

initGame();
