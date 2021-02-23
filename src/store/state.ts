import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { IVideoListProps, IVideoProps } from '../components/VideoList/typings';

export enum VIDEO_ACTIONS {
  SEARCH_VIDEOS = 'SEARCH_VIDEOS',
  LOAD_VIDEO = 'LOAD_VIDEO',
}

export interface IVideoStoreProps {
  videos?: IVideoListProps;
  activeVideoId?: string;
}

const initialState: IVideoStoreProps = {
  videos: [],
  activeVideoId: undefined,
};

export default function reducers(
  state: IVideoStoreProps = initialState,
  action: any
) {
  switch (action.type) {
    case VIDEO_ACTIONS.SEARCH_VIDEOS:
      console.log({ action });
      return {
        ...state,
        videos: action.payload,
      };

    case VIDEO_ACTIONS.LOAD_VIDEO:
      return {
        ...state,
        activeVideoId: action.payload,
      };

    default:
      return state;
  }
}

const middleware = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
