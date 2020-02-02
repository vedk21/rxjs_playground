import { ReplaySubject } from 'rxjs';

// internal modules
import { addItemToList } from '../utils/helper';

/*
* ****** Subject as an observable and observer ******
NOTE: It will receive n number of last emitted message,
n is the number passed to ReplaySubject constructor
*/

export const replaySubjectCreation = () => {
  const buttonSubject = new ReplaySubject<string>(2);

  // subject as an observer
  buttonSubject.next('First message clicked');
  buttonSubject.next('Second message clicked');
  buttonSubject.next('Third message clicked');

  // subject as an observable
  buttonSubject.subscribe(msg => addItemToList(msg));

  buttonSubject.next('Final message clicked');
};

/*
* ****** END ******
*/