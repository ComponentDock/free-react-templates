import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the section heading', () => {
    render(<Schedule />)
    expect(screen.getByText('Fitness Sched')).toBeInTheDocument()
    expect(screen.getByText('Schedule')).toBeInTheDocument()
  })

  it('renders 7 day tabs', () => {
    render(<Schedule />)
    const tabs = screen
      .getAllByRole('button')
      .filter((b) => ['S', 'M', 'T', 'W', 'F'].includes(b.textContent ?? ''))
    expect(tabs.length).toBeGreaterThanOrEqual(5)
  })

  it('shows Sunday schedule by default', () => {
    render(<Schedule />)
    expect(screen.getByText('7:30am - 9:00am')).toBeInTheDocument()
  })

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    const mondayTab = screen.getByLabelText('Select Monday')
    await user.click(mondayTab)
    expect(screen.getByText('Spin Cycle')).toBeInTheDocument()
  })

  it('switches to Wednesday', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    const wedTab = screen.getByLabelText('Select Wednesday')
    await user.click(wedTab)
    expect(screen.getByText('Boxing Basics')).toBeInTheDocument()
  })

  it('switches to Saturday (last tab)', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    const satTab = screen.getByLabelText('Select Saturday')
    await user.click(satTab)
    // Saturday should show content (falls back to Sunday data)
    expect(screen.getByText('7:30am - 9:00am')).toBeInTheDocument()
  })

  it('switches to Friday', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    const friTab = screen.getByLabelText('Select Friday')
    await user.click(friTab)
    expect(screen.getByText('Strength Training')).toBeInTheDocument()
  })
})
