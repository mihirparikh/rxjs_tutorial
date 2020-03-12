import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

Observable.create((observer:any) => {
    observer.next('Hey Guys!');
    observer.complete();
})
.map((val:any) => val.toUpperCase())
.subscribe(
    (x:any) => addItem(x),
    (err:any) => addItem(err),
    () => addItem('Completed!')
);

function addItem(val:any) {
    var node =  document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}