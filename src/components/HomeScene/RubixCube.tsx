import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import styles from './RubixCube.module.css';

interface CubePieceProps {
  position: [number, number, number];
  colors: string[];
}

// Individual cube piece
const CubePiece: React.FC<CubePieceProps> = ({ position, colors }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Materials for each face of the cube piece
  const materials = [
    new THREE.MeshStandardMaterial({ color: colors[0] || 'black' }), // Right
    new THREE.MeshStandardMaterial({ color: colors[1] || 'black' }), // Left
    new THREE.MeshStandardMaterial({ color: colors[2] || 'black' }), // Top
    new THREE.MeshStandardMaterial({ color: colors[3] || 'black' }), // Bottom
    new THREE.MeshStandardMaterial({ color: colors[4] || 'black' }), // Front
    new THREE.MeshStandardMaterial({ color: colors[5] || 'black' }), // Back
  ];

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      {materials.map((material, index) => (
        <meshStandardMaterial key={index} attach={`material-${index}`} {...material} />
      ))}
    </mesh>
  );
};

// Complete Rubik's Cube
const RubiksCube: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Colors for the Rubik's Cube
  const colors: Record<string, string> = {
    red: '#ff0000',
    orange: '#ff7700',
    white: '#ffffff',
    yellow: '#ffff00',
    blue: '#0000ff',
    green: '#00ff00',
    black: '#222222'
  };

  // Animation loop
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(t / 4) * 1.5;
    groupRef.current.rotation.y = t / 2;
    groupRef.current.rotation.z = Math.sin(t / 3) * 0.5;
  });

  // Create 3x3x3 cube positions
  const cubePositions: [number, number, number][] = [];
  const cubeColors: string[][] = [];

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        // Skip the inner cube (not visible)
        if (x === 0 && y === 0 && z === 0) continue;

        cubePositions.push([x, y, z]);

        // Assign colors to faces
        const pieceColors = [
          x === 1 ? colors.red : colors.black,      // Right face
          x === -1 ? colors.orange : colors.black,  // Left face
          y === 1 ? colors.white : colors.black,    // Top face
          y === -1 ? colors.yellow : colors.black,  // Bottom face
          z === 1 ? colors.blue : colors.black,     // Front face
          z === -1 ? colors.green : colors.black,   // Back face
        ];

        cubeColors.push(pieceColors);
      }
    }
  }

  return (
    <group ref={groupRef}>
      {cubePositions.map((position, index) => (
        <CubePiece
          key={index}
          position={position}
          colors={cubeColors[index]}
        />
      ))}
    </group>
  );
};

// Main component with Canvas
const RubiksCubeScene: React.FC = () => {
  return (
    <div className={styles.cubeScene}>
      <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RubiksCube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default RubiksCubeScene;
