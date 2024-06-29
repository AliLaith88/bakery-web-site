let cake = [
    {
        url: '../images/cake1.jpg',
        name: 'straw berry cake',
        cost: '12$'
    },
    {
        url: '../images/cake2.jpg',
        name: 'Chocolate cake',
        cost: '20$'
    },
    {
        url: '../images/cake3.jpg',
        name: 'fruits cupcake',
        cost: '20$'
    },
    {
        url: '../images/cake4.jpg',
        name: 'orange cake',
        cost: '20$'
    },

]
let bread = [
    {
        url: '../images/bread1.jpg',
        name: 'normal bread',
        cost: '3$'
    },
    {
        url: '../images/bread2.jpg',
        name: 'Oatmeal bread',
        cost: '5$'
    },
    {
        url: '../images/bread3.jpg',
        name: 'Baguette',
        cost: '3$'
    },
    {
        url: '../images/bread4.jpg',
        name: 'whole wheat bread',
        cost: '4$'
    },


]
let otherList = [
    {
        url: '../images/cookie.jpg',
        name: 'Chocolate cookie',
        cost: '4$'
    }, {
        url: '../images/cookie1.jpg',
        name: 'dates cookie',
        cost: '4$'
    }, {
        url: '../images/cookie2.jpg',
        name: 'Sweet chocolate cookie',
        cost: '3$'
    }, {
        url: '../images/cookie3.jpg',
        name: 'normal Chocolate cookie',
        cost: '3$'
    },
]

let div = document.createElement('div')
div.style.display = 'none';
div.style.marginTop = '3.3rem'
div.style.width = '100%'
div.style.minHeight = '130px'
// div.classList.add('hidden', 'm-12', 'w-full', 'h-32')

let categoryIconsList = document.querySelector('#category-iconsList-container');
categoryIconsList.appendChild(div);

const myIcons = document.querySelectorAll('.myIcon');
const icon1 = document.querySelector('li[icon="first"]');
const icon2 = document.querySelector('li[icon="second"]');
const icon3 = document.querySelector('li[icon="third"]');

((icon, myArray) => {
    icon.classList.add('border-b-4', 'border-red-500')

    // Clear previous content
    div.innerHTML = '';

    // Create and append the new content
    addContent(myArray)

    // Show the div
    showDiv(div)
})(icon1, cake);

function handleIconClick(icon, myArray) {
    icon.addEventListener('click', () => {
        // to shift the bottom border between icons
        myIcons.forEach(element => {
            element.classList.remove('border-b-4', 'border-red-500')
        });
        icon.classList.add('border-b-4', 'border-red-500')

        // Clear previous content
        div.innerHTML = '';

        // Create and append the new content
        addContent(myArray)

        // Show the div
        showDiv(div)

    });
}
function showDiv(div) {
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    div.style.justifyContent = 'center';
    div.style.gap = '1.5rem';
}
function addContent(myArray) {
    myArray.forEach(item => {
        let card = document.createElement('div');
        let img = document.createElement('img');
        let desc = document.createElement('div')


        card.classList.add('w-1/3', 'sm:w-1/4', 'bg-myOffWhite', 'rounded-md', 'overflow-hidden', 'shadow-lg', 'hover:scale-110', 'ease-in', 'duration-150');
        card.classList.add('lg:w-1/5');

        img.src = item.url
        img.classList.add('h-auto', 'w-full')
        card.append(img)

        desc.innerHTML = item.name + '<br/>' + item.cost
        desc.style.textAlign = 'center'
        desc.classList.add('p-1', 'text-sm', 'text-center')



        div.append(card)
        card.append(desc)
    })
}

handleIconClick(icon1, cake);
handleIconClick(icon2, bread);
handleIconClick(icon3, otherList);
