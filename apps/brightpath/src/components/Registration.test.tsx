import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useCountdown, Registration } from './Registration'

function CountdownDisplay({ days, h, m, s }: { days: number; h?: number; m?: number; s?: number }) {
  const time = useCountdown(days, h, m, s)
  return (
    <div>
      <span data-testid="days">{time.days}</span>
      <span data-testid="hours">{time.hours}</span>
      <span data-testid="minutes">{time.minutes}</span>
      <span data-testid="seconds">{time.seconds}</span>
    </div>
  )
}

describe('Registration', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders register heading', () => {
    render(<Registration />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Register Now')
  })

  it('renders countdown labels', () => {
    render(<Registration />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Secs')).toBeInTheDocument()
  })

  it('renders form fields and submit button', () => {
    render(<Registration />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('counts down seconds', () => {
    render(<CountdownDisplay days={5} />)
    expect(screen.getByTestId('seconds')).toHaveTextContent('59')
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByTestId('seconds')).toHaveTextContent('57')
  })

  it('rolls seconds into minutes', () => {
    render(<CountdownDisplay days={5} />)
    act(() => {
      vi.advanceTimersByTime(60_000)
    })
    expect(screen.getByTestId('minutes')).toHaveTextContent('46')
  })

  it('rolls minutes into hours', () => {
    render(<CountdownDisplay days={5} />)
    act(() => {
      vi.advanceTimersByTime(3_600_000)
    })
    expect(screen.getByTestId('hours')).toHaveTextContent('22')
  })

  it('rolls hours into days', () => {
    render(<CountdownDisplay days={2} />)
    act(() => {
      vi.advanceTimersByTime(24 * 3_600_000)
    })
    expect(screen.getByTestId('days')).toHaveTextContent('1')
  })

  it('floors days at zero', () => {
    render(<CountdownDisplay days={0} h={0} m={0} s={1} />)
    expect(screen.getByTestId('seconds')).toHaveTextContent('1')
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByTestId('days')).toHaveTextContent('0')
  })

  it('submits the registration form', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Registration />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Your Phone Number'), '123')
    await user.type(screen.getByPlaceholderText('Your Email Address'), 'a@b.com')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByPlaceholderText('Your Email Address')).toHaveValue('a@b.com')
  })
})
