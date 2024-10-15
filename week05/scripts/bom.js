const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
    });

button.addEventListener('click', () => {
    if (input.value != '') { //check if the input is empty, if not, then
      displayList(input.value); //call displayList with the input.value argument,
      chaptersArray.push(input.value); //push the input.value into the chaptersArray,
      setChapterList(); //update the localStorage with the new array by calling a function named setChapterList,
      input.value = ''; //set the input.value to nothing, and
      input.focus(); //set the focus back to the input.
    }
});

function displayList(item)
    {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        li.textContent = item;
        
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
}

function setChapterList() 
{
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() 
{
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter)
{
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
