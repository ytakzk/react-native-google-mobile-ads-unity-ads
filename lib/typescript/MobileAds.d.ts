import { Module } from './internal';
import { MobileAdsModuleInterface } from './types/MobileAdsModule.interface';
import { RequestConfiguration } from './types/RequestConfiguration';
import { App, Config } from './types/Module.interface';
declare class MobileAdsModule extends Module implements MobileAdsModuleInterface {
    constructor(app: App, config: Config);
    initialize(): Promise<import("./types").AdapterStatus[]>;
    setRequestConfiguration(requestConfiguration: RequestConfiguration): Promise<void>;
    openAdInspector(): Promise<void>;
}
export declare const MobileAds: () => MobileAdsModule;
export default MobileAds;
//# sourceMappingURL=MobileAds.d.ts.map