import { Observable } from 'rxjs';

// internal modules
import { addItemToList } from '../utils/helper'



/*
* ****** Observable create method and observer different methods ******
*/

export const createSubscription = () => {

  const observable = Observable.create((observer: any) => {
    try {
      observer.next('1st Step');
      observer.next('2nd Step');
      // once this error is thrown it will not complete
      throw 'Found an error';
      observer.complete();
      observer.next('This step will not print');
    } catch(err) {
      observer.error(err);
    }
  });

  observable.subscribe(
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
}

/*
* ****** END ******
*/
