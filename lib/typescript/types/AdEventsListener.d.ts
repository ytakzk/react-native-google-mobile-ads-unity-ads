import { AdEventType } from '../AdEventType';
import { GAMAdEventType } from '../GAMAdEventType';
import { RewardedAdEventType } from '../RewardedAdEventType';
import { AdEventPayload } from './AdEventListener';
export declare type AdEventsListener<T extends AdEventType | RewardedAdEventType | GAMAdEventType = never> = (eventInfo: {
    type: T;
    payload: AdEventPayload<T>;
}) => void;
//# sourceMappingURL=AdEventsListener.d.ts.map