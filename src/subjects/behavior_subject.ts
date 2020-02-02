import { BehaviorSubject } from 'rxjs';

// internal modules
import { addItemToList } from '../utils/helper';

/*
* ****** Subject as an observable and observer ******
NOTE: It will receive last emitted message
*/

export const behaviorSubjectCreation = () => {
  const buttonSubject = new BehaviorSubject<string>('Initial Message');

  // subject as an observer
  buttonSubject.next('First message clicked');
  buttonSubject.next('Second message clicked');

  // subject as an observable
  buttonSubject.subscribe(msg => addItemToList(msg));

  buttonSubject.next('Final message clicked');
};

/*
* ****** END ******
*/