import { Observable } from "rxjs/Observable";
import { merge } from "rxjs/observable/merge";

var observable = Observable.create((observer:any) => {
    observer.next('Hey Guys!');
});

var observable2 = Observable.create((observer:any) => {
    observer.next('Howdy Doody!');
});

var newObservable = merge(observable, observable2);

newObservable.subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node =  document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}