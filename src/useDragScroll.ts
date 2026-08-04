import type React from "react";
import { useRef } from "react";

const DRAG_THRESHOLD = 5;

export default function useDragScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const state = useRef({ down: false, dragging: false, startX: 0, startScroll: 0, pointerId: -1 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    state.current = { down: true, dragging: false, startX: e.clientX, startScroll: el.scrollLeft, pointerId: e.pointerId };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = state.current;
    const el = ref.current;
    if (!s.down || !el) return;
    const dx = e.clientX - s.startX;
    if (!s.dragging) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      s.dragging = true;
      el.style.scrollSnapType = "none";
      el.setPointerCapture(s.pointerId);
    }
    el.scrollLeft = s.startScroll - dx;
  };

  const end = () => {
    const s = state.current;
    const el = ref.current;
    if (!s.down || !el) return;
    if (s.dragging) {
      if (el.hasPointerCapture(s.pointerId)) el.releasePointerCapture(s.pointerId);
      el.style.scrollSnapType = "x mandatory";
    }
    s.down = false;
    s.dragging = false;
  };

  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (state.current.dragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (state.current.dragging) e.preventDefault();
  };

  return {
    ref,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: end,
      onPointerCancel: end,
      onPointerLeave: end,
      onClickCapture,
      onDragStart,
    },
  };
}
