import { act, render, screen } from '@testing-library/react'
import { useScrolled } from './use-scrolled'

function Probe({ threshold }: { threshold?: number }) {
  const scrolled = useScrolled(threshold)

  return <span>{scrolled ? 'scrolled' : 'top'}</span>
}

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('useScrolled', () => {
  afterEach(() => setScrollY(0))

  it('starts at the top and flips once the page passes the default threshold', () => {
    render(<Probe />)

    expect(screen.getByText('top')).toBeInTheDocument()

    setScrollY(81)
    expect(screen.getByText('scrolled')).toBeInTheDocument()

    setScrollY(10)
    expect(screen.getByText('top')).toBeInTheDocument()
  })

  it('honours a custom threshold and stops listening after unmount', () => {
    const { unmount } = render(<Probe threshold={10} />)

    setScrollY(11)
    expect(screen.getByText('scrolled')).toBeInTheDocument()

    unmount()
    setScrollY(500)

    expect(screen.queryByText('scrolled')).toBeNull()
  })
})
