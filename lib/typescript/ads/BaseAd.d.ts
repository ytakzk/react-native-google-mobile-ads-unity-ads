import React from 'react';
import { NativeMethods } from 'react-native';
import { GAMBannerAdProps } from '../types/BannerAdProps';
import { RequestOptions } from '../types/RequestOptions';
declare type NativeEvent = {
    type: 'onAdLoaded' | 'onSizeChange';
    width: number;
    height: number;
} | {
    type: 'onAdOpened' | 'onAdClosed';
} | {
    type: 'onAdFailedToLoad';
    code: string;
    message: string;
} | {
    type: 'onAppEvent';
    name: string;
    data?: string;
};
export declare const BaseAd: React.ForwardRefExoticComponent<GAMBannerAdProps & React.RefAttributes<GoogleMobileAdsBannerView>>;
interface NativeBannerProps {
    sizes: GAMBannerAdProps['sizes'];
    style: {
        width?: number | string;
        height?: number | string;
    };
    unitId: string;
    request: RequestOptions;
    manualImpressionsEnabled: boolean;
    onNativeEvent: (event: {
        nativeEvent: NativeEvent;
    }) => void;
}
export declare type GoogleMobileAdsBannerView = React.Component<NativeBannerProps> & NativeMethods;
export {};
//# sourceMappingURL=BaseAd.d.ts.map