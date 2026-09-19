import { render, screen, act } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()
    expect(screen.getByText('Agents')).toBeInTheDocument()
  })

  it('animates counters to target values', () => {
    render(<Stats />)
    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getByText('1,200')).toBeInTheDocument()
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByText('85')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
  })
})
