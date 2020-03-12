import { from } from "rxjs/Observable/from";
import "rxjs/add/operator/pluck";

from([
    { first: "Mihir", last: "Parikh", age: 44},
    { first: "Deepti", last: "Agrawal", age: 42},
    { first: "Ami", last: "Parikh", age: 11}
])
.pluck('first')
.subscribe(
    (val:any) => addItem(val),
    (err:any) => addItem(err),
    () => addItem('Done')
);

function addItem(val:any) {
    var node =  document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}