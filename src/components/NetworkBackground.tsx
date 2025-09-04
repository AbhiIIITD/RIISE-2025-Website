import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const nearbyNodes = nodes
        .map((otherNode, j) => ({ node: otherNode, index: j, distance: Math.hypot(node.x - otherNode.x, node.y - otherNode.y) }))
        .filter(({ distance, index }) => distance < 150 && index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3);
      
      node.connections = nearbyNodes.map(({ index }) => index);
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          const distance = Math.hypot(node.x - connectedNode.x, node.y - connectedNode.y);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.15;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default NetworkBackground;