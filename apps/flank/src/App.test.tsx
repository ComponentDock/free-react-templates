import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the sidebar and main content', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the Flank logo in sidebar', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Flank' })).toBeInTheDocument()
  })

  it('renders navigation links in sidebar', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Home/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Portfolio/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/ })).toBeInTheDocument()
  })

  it('toggles sidebar on hamburger click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByTestId('sidebar-toggle')
    const sidebar = screen.getByTestId('sidebar')

    // Sidebar starts hidden on mobile
    expect(sidebar).toHaveClass('-translate-x-full')

    await user.click(toggle)
    expect(sidebar).toHaveClass('translate-x-0')

    await user.click(toggle)
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  it('closes sidebar when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByTestId('sidebar-toggle')

    // Open sidebar
    await user.click(toggle)
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()

    // Close via overlay
    await user.click(screen.getByTestId('sidebar-overlay'))
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })

  it('renders content cards', () => {
    render(<App />)
    expect(screen.getByText('Responsive Design')).toBeInTheDocument()
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Customizable')).toBeInTheDocument()
    expect(screen.getByText('Well Documented')).toBeInTheDocument()
  })

  it('renders Component Dock link in sidebar', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders newsletter section', () => {
    render(<App />)
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('expands Services dropdown on click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const servicesLink = screen.getByRole('link', { name: /Services/ })

    // Children not visible initially
    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()

    await user.click(servicesLink)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()

    // Toggle closed
    await user.click(servicesLink)
    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Email address for newsletter')
    const button = screen.getByRole('button', { name: 'Subscribe' })

    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    await user.click(button)
    expect(input).toHaveValue('')
  })

  it('renders the page heading and subheading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Sidebar Navigation' }),
    ).toBeInTheDocument()
    expect(screen.getByText('A clean sidebar template')).toBeInTheDocument()
  })
})
