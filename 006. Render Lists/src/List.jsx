function List(props) {
    const fruits = [{
        id: 1,
        name: "Apple",
        calories: 95
    },
    {
        id: 2,
        name: "Orange",
        calories: 45
    },
    {
        id: 3,
        name: "Banana",
        calories: 105
    },
    {
        id: 4,
        name: "Coconut",
        calories: 159
    },
    {
        id: 5,
        name: "Pineapple",
        calories: 37
    }];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // sorts them in alphabetical order by their name
    fruits.sort((a, b) => a.calories - b.calories) // sorts them by calories (numeric order)

    // filter everything that is below 100 calories
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // filter everything that is above 100 calories
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = fruits.map(fruit => <li key={fruit.id/*they're gonna have unique keys*/}>
        {fruit.name}:&nbsp; <b>{fruit.calories} </b>
    </li>); // turning each array items in an list item

    const listItems2 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id/*they're gonna have unique keys*/}>
        {lowCalFruit.name}:&nbsp; <b>{lowCalFruit.calories} </b>
    </li>);

    const listItems3 = highCalFruits.map(highCalFruit => <li key={highCalFruit.id/*they're gonna have unique keys*/}>
        {highCalFruit.name}:&nbsp; <b>{highCalFruit.calories} </b>
    </li>);

    return (
        <>

            <ul>
                {listItems}
            </ul>

            <h5>Fruits with calories below 100</h5>
            <ul>
                {listItems2}
            </ul>

            <h5>Fruits with calories above 100</h5>
            <ul>
                {listItems3}
            </ul>
        </>
    );
}

export default List;