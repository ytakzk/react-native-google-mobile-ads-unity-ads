import { App, Config } from '../types/Module.interface';
import { GoogleMobileAdsNativeModule } from '../types/GoogleMobileAdsNativeModule';
export declare class AppModule {
    _app: App;
    _nativeModule: unknown;
    _config: Config;
    static __extended__: {};
    constructor(app: App, config: Config);
    get app(): App;
    get emitter(): import("react-native").EventEmitter;
    eventNameForApp(...args: string[]): string;
    get native(): GoogleMobileAdsNativeModule;
}
//# sourceMappingURL=Module.d.ts.map