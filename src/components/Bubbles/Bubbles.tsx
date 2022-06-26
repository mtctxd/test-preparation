import { Canvas, useFrame } from '@react-three/fiber';
import { FC, useMemo, useRef } from 'react';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

interface BubleProps {
  position: number[];
  size?: {
    initial?: number;
    multiplyer?: number;
  };
}

const Buble: FC<BubleProps> = ({
  position,
  size = {
    initial: getRandomInt(0.5, 1),
    multiplyer: getRandomInt(1, 1.5),
  },
}) => {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      if (meshRef.current.position.y === 50) {
        meshRef.current.position.y = -50;
        meshRef.current.position.x = getRandomInt(-50, 50);
        meshRef.current.position.z = getRandomInt(-20, -5);
      }

      meshRef.current.position.y += 0.5;
      meshRef.current.scale.set(
        size.initial,
        size.initial,
        size.initial,
      )

        // console.log(meshRef.current.scale);
    }
  });

  return (
    <mesh position={position} scale={size.initial} ref={meshRef}>
      <sphereBufferGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  );
};

interface BublesProps {
  particlesNumber?: number;
}

const Bubles: FC<BublesProps> = ({ particlesNumber = 100 }) => {
  const positionsArray: any = useMemo(() => {
    return new Array(particlesNumber)
      .fill([])
      .map(() => [
        getRandomInt(-100, 100),
        getRandomInt(-50, 50),
        getRandomInt(-20, -5),
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
          <Buble
            position={position}
            key={'N' + position[0] + position[1] + position[2]}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Bubles;
