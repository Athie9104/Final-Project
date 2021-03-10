
//subscription
function addSubscribers() {
    const list = document.getElementById('subscribe')
    const inputs = list.getElementsByTagName("input");
    console.log(inputs);
    const user = {
        name: inputs[0].value,
        lastname: inputs[1].value,
        email: inputs[2].value,
        cell: inputs[3].value,
    }

    console.log(user);

    fetch("https://sleepy-mountain-15774.herokuapp.com/add-new-subscriber/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        })
        .then((response)=> response.json())
        .then((json)=> {
            console.log(json);
            alert("You have successfully subscribed");
            document.getElementById("subscribe").reset();
        });  
}