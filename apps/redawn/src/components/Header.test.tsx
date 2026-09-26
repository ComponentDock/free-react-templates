import { render, screen, act } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the logo and brand name', () => {
    render(<Header />)
    expect(screen.getByText('R')).toBeInTheDocument()
    expect(screen.getByLabelText('Redawn home')).toBeInTheDocument()
  })

  it('renders the static headline text', () => {
    render(<Header />)
    expect(screen.getByText(/pixel precise/)).toBeInTheDocument()
    expect(screen.getByText('to suit all your needs.')).toBeInTheDocument()
  })

  it('shows the first word by default', () => {
    render(<Header />)
    expect(screen.getByText('web resources')).toBeInTheDocument()
  })

  it('cycles to the next word after 3 seconds', () => {
    render(<Header />)
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('psd files')).toBeInTheDocument()
  })

  it('cycles through all words and wraps around', () => {
    render(<Header />)
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('psd files')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('mockups')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('web resources')).toBeInTheDocument()
  })

  it('renders children (hamburger toggle)', () => {
    render(
      <Header>
        <button>Toggle</button>
      </Header>,
    )
    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })
})
