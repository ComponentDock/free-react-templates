import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the step indicator with all steps', () => {
    render(<App />)
    expect(screen.getByText('Account Setup')).toBeInTheDocument()
    expect(screen.getByText('Social Profiles')).toBeInTheDocument()
    expect(screen.getByText('Personal Details')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Onboardly — Account Setup Wizard')
  })

  it('shows step 1 fields by default', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Eg: aucreative@gmail.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
  })

  it('navigates to step 2 when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    expect(screen.getByText('Social profiles')).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Eg: aucreative@gmail.com')).not.toBeInTheDocument()
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
    expect(screen.getByPlaceholderText('Eg: aucreative@gmail.com')).toBeInTheDocument()
  })

  it('navigates to step 3 when Next is clicked on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    await user.click(screen.getByText('Next'))
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByText('Finish')).toBeInTheDocument()
  })

  it('shows completion screen when Finish is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    await user.click(screen.getByText('Next'))
    await user.click(screen.getByText('Finish'))
    expect(screen.getByText('Account Created!')).toBeInTheDocument()
    expect(screen.getByText(/Your account has been set up successfully/)).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('updates email field when typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('Eg: aucreative@gmail.com'), 'a')
    expect(screen.getByPlaceholderText('Eg: aucreative@gmail.com')).toHaveValue('a')
  })
})
