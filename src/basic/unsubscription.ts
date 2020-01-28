import { Observable } from 'rxjs';

// internal modules
import { addItemToList } from '../utils/helper'



/*
* ****** Observable unsubscibe method ******
*/

export const observableUnsubscibe = () => {

  const observable = Observable.create((observer: any) => {
    observer.next('1st Step');
    observer.next('2nd Step');
    setInterval(() => {
      observer.next('Interval text');
    }, 2000);
  });

  const observer = observable.subscribe(
    (info: any) => {
      addItemToList(info);
    },
    (error: any) => {
      addItemToList(error);
    },
    () => {
      addItemToList('Steps completed!!!');
    }
  );

  setTimeout(() => {
    observer.unsubscribe();
  }, 6001);

}

/*
* ****** END ******
*/
