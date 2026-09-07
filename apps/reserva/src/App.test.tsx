import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the step indicator with all steps', () => {
    render(<App />)
    expect(screen.getByText('Account')).toBeInTheDocument()
    expect(screen.getByText('Room type')).toBeInTheDocument()
    expect(screen.getByText('Extra details')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Reserva — Room Booking Wizard Template')
  })

  it('shows step 1 fields by default', () => {
    render(<App />)
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Country')).toBeInTheDocument()
    expect(screen.getByLabelText('Your password')).toBeInTheDocument()
    expect(screen.getByLabelText('Daily budget')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe to our newsletter')).toBeInTheDocument()
  })

  it('navigates to step 2 when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    expect(screen.getByText('What type of room would you want?')).toBeInTheDocument()
    expect(screen.queryByLabelText('Your Email')).not.toBeInTheDocument()
  })

  it('shows Previous button on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    expect(screen.getByText('Previous')).toBeInTheDocument()
  })

  it('navigates back to step 1 when Previous is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    await user.click(screen.getByText('Previous'))
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
  })

  it('navigates to step 3 when Next is clicked on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    await user.click(screen.getByText('Next'))
    expect(screen.getByLabelText('Room description')).toBeInTheDocument()
    expect(screen.getByText('Finish')).toBeInTheDocument()
  })

  it('shows completion screen when Finish is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    await user.click(screen.getByText('Next'))
    await user.click(screen.getByText('Finish'))
    expect(screen.getByText('Booking Submitted!')).toBeInTheDocument()
    expect(screen.getByText(/Your room booking request has been received/)).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('updates email field when typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Your Email'), 'a')
    expect(screen.getByLabelText('Your Email')).toHaveValue('a')
  })

  it('pre-selects Business room on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    expect(screen.getByLabelText('Business room')).toBeChecked()
  })
})
