import { EmitterSubscription } from 'react-native';
import { AdEventType } from '../AdEventType';
import { RewardedAdEventType } from '../RewardedAdEventType';
import { AdEventListener } from '../types/AdEventListener';
import { AdEventsListener } from '../types/AdEventsListener';
import { AdShowOptions } from '../types/AdShowOptions';
import { RequestOptions } from '../types/RequestOptions';
import { MobileAdInterface } from '../types/MobileAd.interface';
import { MobileAdsModuleInterface } from '../types/MobileAdsModule.interface';
import { RewardedAdReward } from '../types/RewardedAdReward';
import { GAMAdEventType } from '../GAMAdEventType';
import { AppEvent } from '../types/AppEvent';
declare type EventType = AdEventType | RewardedAdEventType | GAMAdEventType;
export declare abstract class MobileAd implements MobileAdInterface {
    protected _type: 'app_open' | 'interstitial' | 'rewarded' | 'rewarded_interstitial';
    protected _googleMobileAds: MobileAdsModuleInterface;
    protected _requestId: number;
    protected _adUnitId: string;
    protected _requestOptions: RequestOptions;
    protected _loaded: boolean;
    protected _isLoadCalled: boolean;
    protected _adEventsListeners: Map<number, AdEventsListener<EventType>>;
    protected _adEventListenersMap: Map<EventType, Map<number, AdEventListener<EventType>>>;
    protected _adEventsListenerId: number;
    protected _adEventListenerId: number;
    protected _nativeListener: EmitterSubscription;
    protected constructor(type: 'app_open' | 'interstitial' | 'rewarded' | 'rewarded_interstitial', googleMobileAds: MobileAdsModuleInterface, requestId: number, adUnitId: string, requestOptions: RequestOptions);
    protected _handleAdEvent(event: {
        body: {
            type: EventType;
            error?: {
                code: string;
                message: string;
            };
            data?: RewardedAdReward | AppEvent;
        };
    }): void;
    protected _addAdEventsListener<T extends EventType>(listener: AdEventsListener<T>): () => void;
    protected _addAdEventListener<T extends EventType>(type: T, listener: AdEventListener<T>): () => void;
    protected _getAdEventListeners<T extends EventType>(type: T): Map<number, AdEventListener<T>>;
    protected get _className(): string;
    protected get _camelCaseType(): "appOpen" | "interstitial" | "rewarded" | "rewardedInterstitial";
    load(): void;
    show(showOptions?: AdShowOptions): Promise<void>;
    abstract addAdEventsListener<T extends never>(listener: AdEventsListener<T>): () => void;
    abstract addAdEventListener<T extends never>(type: T, listener: AdEventListener<T>): void;
    removeAllListeners(): void;
    get adUnitId(): string;
    get loaded(): boolean;
}
export {};
//# sourceMappingURL=MobileAd.d.ts.map