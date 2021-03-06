import { Canvas, useFrame } from '@react-three/fiber';
import { FC, useMemo, useRef} from 'react';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface SphereProps {
  position: number[];
  speed?: number;
}

const Sphere: FC<SphereProps> = ({ position, speed = 0.5 }) => {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      if (meshRef.current.position.z > 10) {
        meshRef.current.position.z = -300;
      }

      meshRef.current.position.z += speed;
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereBufferGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  );
};

interface Props {
  particlesNumber?: number;
  speed?: number;
}

const StarWarp: FC<Props> = ({ particlesNumber = 5000, speed = 0.5 }) => {
  const positionsArray: any = useMemo(() => {
    return new Array(particlesNumber)
      .fill([])
      .map(() => [
        getRandomInt(-500, 500),
        getRandomInt(-500, 500),
        getRandomInt(-300, 5),
      ]);
  }, [particlesNumber]);

  return (
    <div
      style={{
        width: '100%',
        height: '300px',
      }}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {positionsArray.map((position: number[]) => (
          <Sphere
            position={position}
            key={'N' + position[0] + position[1] + position[2]}
            speed={speed}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default StarWarp;
