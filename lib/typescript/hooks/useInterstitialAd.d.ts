import { AdHookReturns } from '../types/AdStates';
import { RequestOptions } from '../types/RequestOptions';
/**
 * React Hook for Interstitial Ad.
 *
 * @param adUnitId The Ad Unit ID for the Interstitial Ad. You can find this on your Google Mobile Ads dashboard. You can destroy ad instance by setting this value to null.
 * @param requestOptions Optional RequestOptions used to load the ad.
 */
export declare function useInterstitialAd(adUnitId: string | null, requestOptions?: RequestOptions): Omit<AdHookReturns, 'reward' | 'isEarnedReward'>;
//# sourceMappingURL=useInterstitialAd.d.ts.map