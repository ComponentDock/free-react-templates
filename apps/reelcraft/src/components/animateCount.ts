/** Animate a count from 0 to target over duration ms using rAF. */
export function animateCount(
  target: number,
  duration: number,
  onFrame: (value: number) => void,
): void {
  const start = performance.now()
  const step = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    onFrame(Math.floor(progress * target))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
