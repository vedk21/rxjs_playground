import { Observable } from 'rxjs';

// internel modules

// basic
import { childSubscription } from './basic/child_subscription';
import { createSubscription } from './basic/create_subscription';
import { observableUnsubscibe } from './basic/unsubscription';
// hot_vs_cold
import { createOnHoverHotObservable, createBasicTextHotObservable } from './hot_vs_cold/hot_observable';
import { createBasicTextColdObservable } from './hot_vs_cold/cold_observable';
// subjects
import { basicSubjectCreation } from './subjects/subject'
import { behaviorSubjectCreation } from './subjects/behavior_subject'
import { replaySubjectCreation } from './subjects/reply_subject'
import { asyncSubjectCreation } from './subjects/async_subject'



/*
* ****** Main Function ******
*/

// basic
// createSubscription();
// observableUnsubscibe();
// childSubscription();

// hot_vs_cold
// createHotObservable();
// createBasicTextHotObservable();
// createBasicTextColdObservable();
// basicSubjectCreation();
// behaviorSubjectCreation();
// replaySubjectCreation();
asyncSubjectCreation();

/*
* ****** END ******
*/
