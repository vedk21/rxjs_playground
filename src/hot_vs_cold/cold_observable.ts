import { Observable } from 'rxjs';

// internal modules
import { addItemToList } from '../utils/helper'



/*
* ****** Cold Observable ******
*/

export const createBasicTextColdObservable = () => {

  const textObservable = Observable.create((observer: any) => {
    observer.next('1st message');
    observer.next('2nd message');
    setTimeout(() => {
      observer.next('3rd delayed message');
    }, 3000);
  });

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
