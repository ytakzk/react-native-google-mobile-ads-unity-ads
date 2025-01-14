/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { useCallback, useEffect, useReducer } from 'react';
import { AdEventType } from '../AdEventType';
import { RewardedAdEventType } from '../RewardedAdEventType';
const initialState = {
  isLoaded: false,
  isOpened: false,
  isClicked: false,
  isClosed: false,
  error: undefined,
  reward: undefined,
  isEarnedReward: false
};
export function useFullScreenAd(ad) {
  const [state, setState] = useReducer((prevState, newState) => ({
    ...prevState,
    ...newState
  }), initialState);
  const isShowing = state.isOpened && !state.isClosed;
  const load = useCallback(() => {
    if (ad) {
      setState(initialState);
      ad.load();
    }
  }, [ad]);
  const show = useCallback(showOptions => {
    if (ad) {
      ad.show(showOptions);
    }
  }, [ad]);
  useEffect(() => {
    setState(initialState);
    if (!ad) {
      return;
    }
    const unsubscribe = ad.addAdEventsListener(_ref => {
      let {
        type,
        payload
      } = _ref;
      switch (type) {
        case AdEventType.LOADED:
          setState({
            isLoaded: true
          });
          break;
        case AdEventType.OPENED:
          setState({
            isOpened: true
          });
          break;
        case AdEventType.CLOSED:
          setState({
            isClosed: true,
            isLoaded: false
          });
          break;
        case AdEventType.CLICKED:
          setState({
            isClicked: true
          });
          break;
        case AdEventType.ERROR:
          setState({
            error: payload
          });
          break;
        case RewardedAdEventType.LOADED:
          setState({
            isLoaded: true,
            reward: payload
          });
          break;
        case RewardedAdEventType.EARNED_REWARD:
          setState({
            isEarnedReward: true,
            reward: payload
          });
          break;
      }
    });
    return () => {
      unsubscribe();
    };
  }, [ad]);
  return {
    ...state,
    isShowing,
    load,
    show
  };
}
//# sourceMappingURL=useFullScreenAd.js.map