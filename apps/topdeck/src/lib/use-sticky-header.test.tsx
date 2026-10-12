import { fireEvent, render, screen } from '@testing-library/react'
import { useStickyHeader } from './use-sticky-header'

/** The nav row's document offset this harness emulates, in px. */
const ROW_TOP = 52

function Harness() {
  const { wrapperRef, rowRef, isSticky, height } = useStickyHeader()

  return (
    <div
      ref={wrapperRef}
      data-testid="wrapper"
      style={height > 0 ? { height: `${height}px` } : undefined}
    >
      <div ref={rowRef} data-testid="row">
        {isSticky ? 'pinned' : 'flow'}
      </div>
    </div>
  )
}

/** A real browser's rect: the element's document offset minus the current scroll. */
function mockLayout() {
  return vi
    .spyOn(Element.prototype, 'getBoundingClientRect')
    .mockImplementation(() => ({ top: ROW_TOP - window.scrollY }) as DOMRect)
}

describe('useStickyHeader', () => {
  it('leaves the row in the flow until the page passes it, then pins it and holds its height', () => {
    const scrollY = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)
    const rect = mockLayout()

    render(<Harness />)

    expect(screen.getByText('flow')).toBeInTheDocument()
    expect(screen.getByTestId('wrapper').style.height).toBe('')

    const row = screen.getByTestId('row')
    Object.defineProperty(row, 'offsetHeight', { configurable: true, value: 83 })

    scrollY.mockReturnValue(400)
    fireEvent.scroll(window)

    expect(screen.getByText('pinned')).toBeInTheDocument()
    expect(screen.getByTestId('wrapper').style.height).toBe('83px')

    scrollY.mockReturnValue(0)
    fireEvent.scroll(window)

    expect(screen.getByText('flow')).toBeInTheDocument()
    expect(screen.getByTestId('wrapper').style.height).toBe('')

    scrollY.mockRestore()
    rect.mockRestore()
  })

  it('re-measures on a resize and drops both listeners when it unmounts', () => {
    const scrollY = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)
    const rect = mockLayout()
    const remove = vi.spyOn(window, 'removeEventListener')

    const { unmount } = render(<Harness />)

    fireEvent(window, new Event('resize'))
    expect(screen.getByText('flow')).toBeInTheDocument()

    unmount()

    expect(remove.mock.calls.map(([type]) => type)).toEqual(
      expect.arrayContaining(['scroll', 'resize']),
    )
    expect(() => fireEvent.scroll(window)).not.toThrow()

    remove.mockRestore()
    scrollY.mockRestore()
    rect.mockRestore()
  })
})
