"use client";

import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  wobble: number;
  wobbleSpeed: number;
  rot: number;
  rotSpeed: number;
  alpha: number;
  depth: number;
  tilt: number;
};

type Blossom = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  rotation: number;
  centerTint: string;
};

const PETAL_COUNT = 70;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function CherryBlossomBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let rafId = 0;
    let lastTs = performance.now();
    let prevScrollY = window.scrollY;
    let prevScrollT = performance.now();
    let scrollVelocity = 0;

    const petals: Petal[] = [];
    const floatingBlossoms: Blossom[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const randomPetal = (topOnly = false): Petal => {
      const x = Math.random() * w;
      const y = topOnly ? -20 - Math.random() * h * 0.2 : Math.random() * h;
      const depth = 0.7 + Math.random() * 0.7;
      return {
        x,
        y,
        size: 5 + Math.random() * 10,
        vx: (-0.4 + Math.random() * 1.1) * depth,
        vy: (20 + Math.random() * 44) * depth,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.8 + Math.random() * 1.5,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: -0.7 + Math.random() * 1.4,
        alpha: 0.35 + Math.random() * 0.5,
        depth,
        tilt: -0.2 + Math.random() * 0.4,
      };
    };

    const initFloatingBlossoms = () => {
      floatingBlossoms.length = 0;
      for (let i = 0; i < 12; i += 1) {
        floatingBlossoms.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: 5 + Math.random() * 8,
          alpha: 0.12 + Math.random() * 0.18,
          rotation: Math.random() * Math.PI * 2,
          centerTint: Math.random() > 0.5 ? "#ffe8c6" : "#fff1d6",
        });
      }
    };

    const initPetals = () => {
      petals.length = 0;
      for (let i = 0; i < PETAL_COUNT; i += 1) {
        petals.push(randomPetal(false));
      }
    };

    const drawFlower = (b: Blossom, alphaBoost: number) => {
      const x = b.x;
      const y = b.y;
      const size = b.size;
      const alpha = b.alpha * alphaBoost;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(b.rotation);
      ctx.globalAlpha = alpha;

      for (let i = 0; i < 5; i += 1) {
        ctx.rotate((Math.PI * 2) / 5);
        const g = ctx.createRadialGradient(0, -size * 0.68, 0.2, 0, -size * 0.66, size * 1.18);
        g.addColorStop(0, "#ffe7f1");
        g.addColorStop(0.55, "#f6b9d2");
        g.addColorStop(1, "#e68eb4");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(0, -size * 0.7, size * 0.52, size * 0.92, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = b.centerTint;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(179, 104, 73, 0.45)";
      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI * 2 * i) / 6 + size * 0.03;
        ctx.beginPath();
        ctx.arc(Math.cos(angle) * size * 0.15, Math.sin(angle) * size * 0.15, size * 0.025, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const drawFloatingBlossoms = () => {
      for (let i = 0; i < floatingBlossoms.length; i += 1) {
        drawFlower(floatingBlossoms[i], 1);
      }
    };

    const drawPetal = (p: Petal, boost: number) => {
      const wobbleX = Math.sin(p.wobble) * (3 + boost * 4) * p.depth;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x + wobbleX, p.y);
      ctx.rotate(p.rot + p.tilt);

      const g = ctx.createRadialGradient(-p.size * 0.15, -p.size * 0.36, p.size * 0.2, 0, 0, p.size * 1.15);
      g.addColorStop(0, "#ffe9f3");
      g.addColorStop(0.48, "#f7bed5");
      g.addColorStop(1, "#e891b3");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 1.08);
      ctx.bezierCurveTo(p.size * 0.88, -p.size * 0.34, p.size * 0.76, p.size * 0.72, 0, p.size * 0.92);
      ctx.bezierCurveTo(-p.size * 0.69, p.size * 0.73, -p.size * 0.99, -p.size * 0.35, 0, -p.size * 1.08);
      ctx.fill();

      ctx.strokeStyle = "rgba(255,241,246,0.58)";
      ctx.lineWidth = Math.max(0.55, p.size * 0.075);
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.66);
      ctx.bezierCurveTo(-p.size * 0.05, -p.size * 0.12, -p.size * 0.03, p.size * 0.34, 0, p.size * 0.62);
      ctx.stroke();

      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.beginPath();
      ctx.ellipse(-p.size * 0.2, -p.size * 0.28, p.size * 0.14, p.size * 0.22, -0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const step = (ts: number) => {
      const dt = Math.min((ts - lastTs) / 1000, 0.035);
      lastTs = ts;

      const currentY = window.scrollY;
      const currentT = performance.now();
      const deltaY = currentY - prevScrollY;
      const deltaT = Math.max(currentT - prevScrollT, 1);
      const instantVelocity = Math.abs(deltaY / deltaT); // px/ms
      scrollVelocity = scrollVelocity * 0.86 + instantVelocity * 0.14;
      prevScrollY = currentY;
      prevScrollT = currentT;

      const speedBoost = clamp(scrollVelocity * 8, 0, 2.8);
      ctx.clearRect(0, 0, w, h);
      drawFloatingBlossoms();

      for (let i = 0; i < petals.length; i += 1) {
        const p = petals[i];
        p.wobble += p.wobbleSpeed * dt;
        p.rot += p.rotSpeed * dt;
        p.x += p.vx * (1 + speedBoost * 0.58) + Math.sin(p.wobble) * 10 * dt;
        p.y += p.vy * (1 + speedBoost * 0.85) * dt;

        if (p.y > h + 30 || p.x < -50 || p.x > w + 50) {
          petals[i] = randomPetal(true);
        }
      }

      for (let i = 0; i < petals.length; i += 1) {
        drawPetal(petals[i], speedBoost);
      }

      rafId = window.requestAnimationFrame(step);
    };

    resize();
    initFloatingBlossoms();
    initPetals();
    rafId = window.requestAnimationFrame(step);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}

