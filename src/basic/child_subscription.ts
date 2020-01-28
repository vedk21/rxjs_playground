import { Observable } from 'rxjs';

// internal modules
import { addItemToList } from '../utils/helper'



/*
* ****** Observable add or remove subscription to another as a child ******
*/

export const childSubscription = () => {

  const observable = Observable.create((observer: any) => {
    observer.next('1st Step');
    observer.next('2nd Step');
    setInterval(() => {
      observer.next('Interval text');
    }, 2000);
  });

  const observer1 = observable.subscribe(
    (info: any) => {
      addItemToList(`${info} child1`);
    }
  );

  const observer2 = observable.subscribe(
    (info: any) => {
      addItemToList(`${info} child2`);
    }
  );

  // add observer2 to observer1
  observer1.add(observer2);

  setTimeout(() => {
    observer1.unsubscribe();
  }, 6001);

}

/*
* ****** END ******
*/
