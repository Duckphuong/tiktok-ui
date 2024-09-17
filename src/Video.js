import { forwardRef, useImperativeHandle, useRef } from 'react';
import download from './video/download.mp4';

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));
    return <video ref={videoRef} src={download} width={300} />;
}

export default forwardRef(Video);
