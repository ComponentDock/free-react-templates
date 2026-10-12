import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

function withMotionChoice(reduce: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: reduce,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
    withMotionChoice(false)
  })

  it('renders three slides with the navy headline, sub-line and pink action', () => {
    render(<HeroSlider />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Hosting that runs on its own grid' }),
    ).toHaveClass('min-[1200px]:text-[65px]', 'text-white', 'font-heading')
    expect(
      screen.getByText('Automated control panel · 50% off your first year · plans from $2.50/month'),
    ).toBeInTheDocument()

    const slides = ['slide-grid', 'slide-slice', 'slide-support']
    for (const id of slides) {
      expect(screen.getByTestId(id)).toBeInTheDocument()
    }
    expect(screen.getByTestId('slide-grid')).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByTestId('slide-slice')).toHaveAttribute('aria-hidden', 'true')
  })

  it('moves between slides from the vertical dot rail', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    const dots = screen.getAllByRole('tab')
    expect(dots).toHaveLength(3)
    expect(screen.getByRole('tab', { name: '1 of 3' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: '1 of 3' })).toHaveClass('h-[34px]', 'bg-dot-active')
    expect(screen.getByRole('tab', { name: '2 of 3' })).toHaveClass('h-[20px]', 'bg-dot-idle')

    await user.click(screen.getByRole('tab', { name: '3 of 3' }))

    expect(screen.getByRole('tab', { name: '3 of 3' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByTestId('slide-support')).toHaveAttribute('aria-hidden', 'false')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Support that answers before you refresh' }),
    ).toBeInTheDocument()
  })

  it('auto-advances while motion is allowed', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByTestId('slide-slice')).toHaveAttribute('aria-hidden', 'false')

    act(() => {
      vi.advanceTimersByTime(6000)
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByTestId('slide-grid')).toHaveAttribute('aria-hidden', 'false')
  })

  it('stands still when the visitor reduced motion', () => {
    vi.useFakeTimers()
    withMotionChoice(true)
    render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(18000)
    })

    expect(screen.getByTestId('slide-grid')).toHaveAttribute('aria-hidden', 'false')
  })

  it('shows the illustration and the rotated social rail', () => {
    render(<HeroSlider />)

    expect(
      screen.getByRole('img', { name: 'Isometric illustration of two server racks beside a cloud' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gridhost on Facebook' })).toHaveAttribute(
      'href',
      'https://www.facebook.com/',
    )
  })
})
