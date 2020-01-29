import { Observable, fromEvent } from 'rxjs';
import { share } from 'rxjs/operators';

// internal modules
import { addItemToList } from '../utils/helper'



/*
* ****** Hot Observable for mouseover event ******
*/

export const createOnHoverHotObservable = () => {

  const hotObservable = fromEvent(document, 'mouseover');

  setTimeout(() => {
    hotObservable.subscribe(
      (evt: any) => addItemToList(evt)
    );
  }, 5000);
};

export const createBasicTextHotObservable = () => {

  const textObservable = Observable.create((observer: any) => {
    observer.next('1st message');
    observer.next('2nd message');
    setTimeout(() => {
      observer.next('3rd delayed message');
    }, 3000);
  }).pipe(share());

  const sub1 = textObservable.subscribe(
    (msg: any) => addItemToList(`Subscriber 1: ${msg}`)
  );

  setTimeout(() => {
    const sub2 = textObservable.subscribe(
      (msg: any) => addItemToList(`Subscriber 2: ${msg}`)
    );
  }, 2000);
};

/*
* ****** END ******
*/
