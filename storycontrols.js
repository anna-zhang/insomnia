// story sections
var storyPart1 = document.getElementById('part-1')
var storyPart2 = document.getElementById('part-2')
var storyPart3 = document.getElementById('part-3')
var storyPart4 = document.getElementById('part-4')
var storyParts = [storyPart1, storyPart2, storyPart3, storyPart4];

// starting index
var i = 0;

// buttons
var prevButton = document.getElementById('left-button')
var nextButton = document.getElementById('right-button')

// change part in story based on keyboard controls
function changePages(event)
{
    if (i + 1 < storyParts.length && event.key == "ArrowRight"){
        storyParts[i].style.display = "none";
        i++;
        window.scrollTo(0, 0);
        storyParts[i].style.display = "block";
        if (i + 1 == storyParts.length)
        {
            nextButton.style.display = "none";
        }
        else
        {
            nextButton.style.display = "block";
            prevButton.style.display = "block";
        }
    }
    if (i >= 1 && event.key == "ArrowLeft"){
        storyParts[i].style.display = "none";
        i--;
        window.scrollTo(0, 0);
        storyParts[i].style.display = "block";
        if (i == 0)
        {
            prevButton.style.display = "none";
        }
        else
        {
            nextButton.style.display = "block";
            prevButton.style.display = "block";
        }
    }
}

function nextPage()
{
    if (i + 1 < storyParts.length)
    {
        storyParts[i].style.display = "none";
        i++;
        window.scrollTo(0, 0);
        storyParts[i].style.display = "block";
        if (i + 1 == storyParts.length)
        {
            nextButton.style.display = "none";
        }
        else
        {
            nextButton.style.display = "block";
            prevButton.style.display = "block";
        }
    }
}

function prevPage()
{
    if (i >= 1)
    {
        storyParts[i].style.display = "none";
        i--;
        window.scrollTo(0, 0);
        storyParts[i].style.display = "block";
    }
    if (i == 0)
    {
        prevButton.style.display = "none";
    }
    else
    {
        prevButton.style.display = "block";
        nextButton.style.display = "block";
    }
}