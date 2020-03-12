import { Observable } from "rxjs/Observable";
import { formEvent, fromEvent } from "rxjs/Observable/fromEvent";

var observable = fromEvent(document, "mousemove");

setTimeout(() => {
    var subscription = observable.subscribe((x:any) => addItem(x))
}, 2000);

// Phase I stuff
// let observable = Observable.create((observer:any) => {
//     try {
//         observer.next('Hello 1');
//         observer.next('Hello 2');
//         setInterval(() => {
//             observer.next("Ping")
//         }, 2000);
//     } catch(err) {
//         observer.error(err);
//     }
// });

// var observer = observable.subscribe(
//     (x:any) => addItem(x),
//     (error:any) => addItem(error),
//     () => addItem("completed")
// );

// setTimeout(() => {
//     var observer2 = observable.subscribe(
//         (x:any) => addItem('Subscriber 2: ' + x)
//     )
// }, 1000);

function addItem(val:any) {
    var node =  document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}