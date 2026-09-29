import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

describe('Sidebar', () => {
  it('renders the sidebar with brand header', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
    expect(sidebar).toHaveTextContent('Sidelane')
    expect(sidebar).toHaveTextContent('Portfolio Agency')
  })

  it('renders all navigation items in sidebar', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveTextContent('Home')
    expect(sidebar).toHaveTextContent('About')
    expect(sidebar).toHaveTextContent('Works')
    expect(sidebar).toHaveTextContent('Blog')
    expect(sidebar).toHaveTextContent('Gallery')
    expect(sidebar).toHaveTextContent('Services')
    expect(sidebar).toHaveTextContent('Contacts')
  })

  it('highlights the active nav item (Home)', () => {
    render(<App />)
    const homeLink = screen.getByTestId('nav-home')
    expect(homeLink).toHaveClass('border-accent')
  })

  it('renders newsletter subscribe section', () => {
    render(<App />)
    expect(screen.getByText('Subscribe for newsletter')).toBeInTheDocument()
    expect(screen.getByTestId('newsletter-input')).toBeInTheDocument()
  })

  it('allows typing in newsletter email input', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByTestId('newsletter-input')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears email input on form submit', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByTestId('newsletter-input')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(input)
    await user.keyboard('{Enter}')
    expect(input).toHaveValue('')
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('hides sidebar on mobile by default', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  it('toggles sidebar via hamburger button', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toHaveAttribute('aria-label', 'Toggle sidebar')
    await user.click(toggleBtn)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('translate-x-0')
  })

  it('closes sidebar when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    await user.click(toggleBtn)
    const overlay = screen.getByTestId('sidebar-overlay')
    await user.click(overlay)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  it('sidebar is always visible on desktop', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('lg:translate-x-0')
  })

  it('sidebar has blue background', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('bg-sidebar-bg')
  })
})
