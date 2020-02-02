import { Subject } from 'rxjs';

// internal modules
import { addItemToList } from '../utils/helper';

/*
* ****** Subject as an observable and observer ******
*/

export const basicSubjectCreation = () => {
  const buttonSubject = new Subject<string>();

  // subject as an observable
  buttonSubject.subscribe(msg => addItemToList(msg));

  // subject as an observer
  buttonSubject.next('First message clicked');
};

/*
* ****** END ******
*/