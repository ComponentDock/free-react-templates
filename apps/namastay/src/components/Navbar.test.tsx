import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Namastay')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<Navbar />)
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows desktop dropdown items when classes button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const classesButtons = screen.getAllByText('Classes')
    const desktopButton = classesButtons[0]
    if (!desktopButton) throw new Error('Classes button not found')
    await user.click(desktopButton)
    expect(screen.getByText('Health Mind Meditation')).toBeInTheDocument()
    expect(screen.getByText('Mind Balance Yoga')).toBeInTheDocument()
    expect(screen.getByText('Body Strength Pilates')).toBeInTheDocument()
  })

  it('toggles mobile menu and shows classes dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggleButton)
    const classesButtons = screen.getAllByText('Classes')
    const mobileButton = classesButtons[1]
    if (!mobileButton) throw new Error('Mobile classes button not found')
    await user.click(mobileButton)
    const meditationItems = screen.getAllByText('Health Mind Meditation')
    expect(meditationItems.length).toBeGreaterThanOrEqual(1)
  })
})
