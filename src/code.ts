import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import "rxjs/add/operator/skipUntil";

var observable1 = Observable.create((data:any) => {
    var i = 1;
    // emit events every 1 sec
    setInterval(() => {
        data.next(i++);
    }, 1000)
});

var observable2 = new Subject;

setTimeout(() => {
    observable2.next('Hey!');
}, 3000);

observable2.subscribe((val:any) => addItem(val));

var newObservable = observable1.skipUntil(observable2);

newObservable.subscribe((val:any) => addItem(val));


function addItem(val:any) {
    var node =  document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}