/** LESSON 15 **/
$(document).ready(function () {


    const addItems = $('.add-items');
    const itemsList = $('.plates');
    const items = JSON.parse(localStorage.getItem('items')) || [];

    function addItem(e) {
        e.preventDefault();
        const text = $(this).children('[name=item]')[0].value;
        const item = {
            text,
            done: false
        };
        items.push(item);
        populateList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        this.reset();
    }

    function populateList(plates = [], platesList) {
        platesList.html(plates.map((plate, i) => {
            return `
                <li>
                    <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}>
                    <label for="item${i}">${plate.text}</label>
                </li>
            `;
        }).join(''));
    }

    function toggleChecking(e) {
        if(!e.target.matches('input')) return;
        const index = e.target.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }


    addItems.on('submit', addItem);
    itemsList.on('click', toggleChecking);

    populateList(items, itemsList);


});