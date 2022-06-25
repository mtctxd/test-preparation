import { useEffect, useRef } from 'react';

const CanvasParticles = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
    }
  }, [window.innerWidth]);

  useEffect(() => {
    if (canvasRef.current) {
      const field = canvasRef.current;
      const canvasContext = field.getContext('2d');

      const makeStars = (count: number) => {
        const out = [];
        for (let i = 0; i < count; i++) {
          const s = {
            x: Math.random() * 1600 - 800,
            y: Math.random() * 900 - 450,
            z: Math.random() * 1000,
          };
          out.push(s);
        }
        return out;
      };

      let stars = makeStars(10000);

      const clear = () => {
        canvasContext!.fillStyle = 'black';
        canvasContext!.fillRect(0, 0, field.width, field.height);
      };

      const putPixel = (x: number, y: number, brightness: number) => {
        const intensity = brightness * 255;
        const rgb =
          'rgb(' + intensity + ',' + intensity + ',' + intensity + ')';
        canvasContext!.fillStyle = rgb;
        canvasContext!.fillRect(x, y, 1, 1);
      };

      const moveStars = (distance: number) => {
        const count = stars.length;
        for (var i = 0; i < count; i++) {
          const s = stars[i];
          s.z -= distance;
          while (s.z <= 1) {
            s.z += 1000;
          }
        }
      };

      let prevTime: any;

      const init = (time: any) => {
        prevTime = time;
        requestAnimationFrame(tick);
      };

      const tick = (time: any) => {
        let elapsed = time - prevTime;
        prevTime = time;

        moveStars(elapsed * 0.1);

        clear();

        const cx = window.innerWidth / 2;
        const cy = 200 / 2;

        const count = stars.length;
        for (var i = 0; i < count; i++) {
          const star = stars[i];

          const x = cx + star.x / (star.z * 0.001);
          const y = cy + star.y / (star.z * 0.001);

          if (x < 0 || x >= window.innerWidth || y < 0 || y >= 200) {
            continue;
          }

          const d = star.z / 1000.0;
          const b = 1 - d * d;

          putPixel(x, y, b);
        }

        requestAnimationFrame(tick);
        moveStars(elapsed * 0.1);
      };

      requestAnimationFrame(init);
    }
  }, []);

  return (
    <canvas ref={canvasRef} width={window.innerWidth} height={200}></canvas>
  );
};

export default CanvasParticles;
