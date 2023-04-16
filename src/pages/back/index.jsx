import videoBg from '../assets/videoBg.mp4'

export default function Background(children)
{
  return(
    <>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
    </>
  )
}