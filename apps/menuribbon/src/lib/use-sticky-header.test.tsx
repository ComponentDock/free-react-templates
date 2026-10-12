import { fireEvent, render, screen } from '@testing-library/react'
import { useStickyHeader } from './use-sticky-header'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value })
}

function setRectTop(element: HTMLElement, top: number) {
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({ top } as DOMRect)
}

function setWidth(element: HTMLElement, width: number) {
  Object.defineProperty(element, 'offsetWidth', { configurable: true, value: width })
}

function Harness() {
  const { wrapperRef, isStuck, headerWidth } = useStickyHeader()

  return (
    <div>
      <div ref={wrapperRef} data-testid="wrapper" />
      <span data-testid="state">{`${isStuck ? 'stuck' : 'flow'}:${headerWidth}`}</span>
    </div>
  )
}

/** A consumer that never attaches the ref it is handed. */
function Detached() {
  useStickyHeader()

  return <span data-testid="detached">detached</span>
}

describe('useStickyHeader', () => {
  it('starts in flow and pins once the page is scrolled past the wrapper offset', () => {
    render(<Harness />)

    const wrapper = screen.getByTestId('wrapper')
    const state = screen.getByTestId('state')

    expect(state).toHaveTextContent('flow:0')

    setWidth(wrapper, 1140)
    setRectTop(wrapper, -120)
    setScrollY(400)
    fireEvent.scroll(window)

    expect(state).toHaveTextContent('stuck:1140')

    setRectTop(wrapper, 60)
    setScrollY(0)
    fireEvent.scroll(window)

    expect(state).toHaveTextContent('flow:1140')
  })

  it('re-measures on resize, because the threshold moves with the layout', () => {
    render(<Harness />)

    const wrapper = screen.getByTestId('wrapper')

    expect(screen.getByTestId('state')).toHaveTextContent('flow:0')

    setWidth(wrapper, 960)
    setRectTop(wrapper, -500)
    setScrollY(900)
    fireEvent(window, new Event('resize'))

    expect(screen.getByTestId('state')).toHaveTextContent('stuck:960')
  })

  it('listens for scroll passively and drops both listeners on unmount', () => {
    const addEventListener = vi.spyOn(window, 'addEventListener')
    const removeEventListener = vi.spyOn(window, 'removeEventListener')

    const { unmount } = render(<Harness />)

    expect(addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
    expect(addEventListener).toHaveBeenCalledWith('resize', expect.any(Function))

    unmount()

    expect(removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
    expect(removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function))

    addEventListener.mockRestore()
    removeEventListener.mockRestore()
  })

  it('does nothing while it has no wrapper to measure', () => {
    render(<Detached />)

    fireEvent.scroll(window)
    fireEvent(window, new Event('resize'))

    expect(screen.getByTestId('detached')).toBeInTheDocument()
  })
})
