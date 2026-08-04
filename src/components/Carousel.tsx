import { useRef, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'

/**
 * NOTE: Tailwind has no built-in "scrollbar-hide" utility.
 * The inline style below already hides the scrollbar in Firefox (scrollbarWidth)
 * and old IE/Edge (msOverflowStyle). For Chrome/Safari, add this once globally
 * (e.g. in your index.css), or install the `tailwind-scrollbar-hide` plugin
 * and swap the inline style for the `scrollbar-hide` class:
 *
 *   .scrollbar-hide::-webkit-scrollbar { display: none; }
 */

interface CarouselProps {
  children: ReactNode[]
  className?: string
}

export default function Carousel({ children, className = '' }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  // Recompute whether we can scroll further left/right
  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 4)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    updateScrollState()

    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    // Also catch cases where content loads/resizes after mount
    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(el)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
      resizeObserver.disconnect()
    }
  }, [updateScrollState])

  // Scroll by exactly one item's width (its "step")
  const scrollByStep = (direction: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return

    const firstItem = el.firstElementChild as HTMLElement | null
    if (!firstItem) return

    // item width + gap, read from actual layout so it stays correct responsively
    const style = window.getComputedStyle(el)
    const gap = parseFloat(style.columnGap || style.gap || '0')
    const step = firstItem.getBoundingClientRect().width + gap

    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`relative ${className}`}>
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children.map((child, i) => (
          <div key={i} className="shrink-0 snap-start">
            {child}
          </div>
        ))}
      </div>

      {/* Controls, bottom right — Apple style */}
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => scrollByStep('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition
                     hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left-icon lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByStep('right')}
          suppressHydrationWarning
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition
                     hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right-icon lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
