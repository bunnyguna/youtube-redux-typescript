import React from 'react';
import { connect } from 'react-redux';
import {
  store,
  getVideoList,
  VIDEO_ACTIONS,
  IVideoStoreProps,
} from '../src/store';
import SearchBox from '../src/components/SearchBox';
import {
  VideoPlayer,
  VideoList,
  IVideoProps,
} from '../src/components/VideoList';

function VideoStore(props: IVideoStoreProps) {
  console.log({ props });

  const getUserEnteredValue = async (value: string = '') => {
    // console.log({ result });

    const result = await getVideoList(value);

    await store.dispatch({
      type: VIDEO_ACTIONS.SEARCH_VIDEOS,
      payload: result?.data?.items,
    });
    // console.log(store.getState());
  };

  const onVideoSelect = (video: IVideoProps = {}) => {
    console.log({ video });
    store.dispatch({
      type: VIDEO_ACTIONS.LOAD_VIDEO,
      payload: video?.id?.videoId,
    });
  };

  return (
    <>
      <SearchBox onUserSearch={getUserEnteredValue} />
      <div className="video-details">
        <VideoPlayer id={props.activeVideoId} />
        <VideoList list={props.videos || []} onSelectItem={onVideoSelect} />
      </div>
    </>
  );
}

const mapStateToProps = (state: IVideoStoreProps) => {
  return {
    videos: state.videos,
    activeVideoId: state.activeVideoId,
  };
};

export default connect(mapStateToProps)(VideoStore);
