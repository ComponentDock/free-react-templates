import { render, screen } from '@testing-library/react'
import { Cases } from './Cases'

describe('Cases', () => {
  it('renders section heading', () => {
    render(<Cases />)
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    expect(screen.getByText('Our Cases')).toBeInTheDocument()
  })

  it('renders three case cards with titles', () => {
    render(<Cases />)
    expect(screen.getByText('Wildlife in Danger')).toBeInTheDocument()
    expect(screen.getByText('Our Green Projects')).toBeInTheDocument()
    expect(screen.getByText('Water Conservation')).toBeInTheDocument()
  })

  it('renders progress percentages', () => {
    render(<Cases />)
    expect(screen.getByText('70%')).toBeInTheDocument()
    expect(screen.getByText('25%')).toBeInTheDocument()
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('renders images for each case', () => {
    render(<Cases />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('renders descriptions for each case', () => {
    render(<Cases />)
    expect(screen.getByText(/anti-poaching programs/)).toBeInTheDocument()
    expect(screen.getByText(/reforestation goals/)).toBeInTheDocument()
    expect(screen.getByText(/clean water initiative/)).toBeInTheDocument()
  })

  it('renders progress labels', () => {
    render(<Cases />)
    expect(screen.getAllByText('Progress').length).toBeGreaterThanOrEqual(3)
  })

  it('does not animate when observer fires without intersection', () => {
    const orig = global.IntersectionObserver
    let capturedCb: IntersectionObserverCallback = () => {}
    global.IntersectionObserver = class {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
      constructor(cb: IntersectionObserverCallback) {
        capturedCb = cb
      }
    } as unknown as typeof IntersectionObserver

    render(<Cases />)
    // Fire the callback with isIntersecting: false
    capturedCb([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver)

    // Progress bars should still be at 0
    const bars = document.querySelectorAll('[style*="width"]')
    expect(bars.length).toBeGreaterThanOrEqual(1)
    bars.forEach((bar) => {
      expect(bar.getAttribute('style')).toContain('width: 0%')
    })

    global.IntersectionObserver = orig
  })
})
