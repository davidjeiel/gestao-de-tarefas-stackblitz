import videoBg from '../assets/video/chuvinha-inversa.mp4';

export function Background(children) {
  return (
    <div class="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">{children}</div>
    </div>
  );
}
