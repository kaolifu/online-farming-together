import React, { useRef, useState } from 'react'
import s from './VideoPlayer.module.scss'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded'
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded'

interface VideoPlayerProps {
  source: string
  poster?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ source, poster }) => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(true)

  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    videoRef.current?.play()
    setIsVideoPlayed(true)
  }
  const handlePause = () => {
    videoRef.current?.pause()
    setIsVideoPlayed(false)
  }

  return (
    <div className={s.player}>
      <video ref={videoRef} poster={poster} autoPlay>
        <source src={source} type='video/mp4' />
      </video>
      <div className={s.mask}></div>
      {isVideoPlayed === false && (
        <button onClick={handlePlay} className={s.btn}>
          <PlayCircleOutlineRoundedIcon sx={{ fontSize: '120px' }} />
        </button>
      )}
      {isVideoPlayed === true && (
        <button onClick={handlePause} className={s.btn}>
          <PauseCircleOutlineRoundedIcon sx={{ fontSize: '120px' }} />
        </button>
      )}
    </div>
  )
}
export default VideoPlayer
