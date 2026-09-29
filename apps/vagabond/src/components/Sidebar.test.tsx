import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

describe('Sidebar', () => {
  it('renders the sidebar with brand identity', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
    expect(sidebar).toHaveTextContent('Travel')
    expect(sidebar).toHaveTextContent('Travel Agency')
  })

  it('renders all navigation items', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveTextContent('Home')
    expect(sidebar).toHaveTextContent('About')
    expect(sidebar).toHaveTextContent('Destination')
    expect(sidebar).toHaveTextContent('Blog')
    expect(sidebar).toHaveTextContent('Services')
    expect(sidebar).toHaveTextContent('Contacts')
  })

  it('renders six navigation links', () => {
    render(<App />)
    expect(screen.getByTestId('nav-home')).toBeInTheDocument()
    expect(screen.getByTestId('nav-about')).toBeInTheDocument()
    expect(screen.getByTestId('nav-destination')).toBeInTheDocument()
    expect(screen.getByTestId('nav-blog')).toBeInTheDocument()
    expect(screen.getByTestId('nav-services')).toBeInTheDocument()
    expect(screen.getByTestId('nav-contacts')).toBeInTheDocument()
  })

  it('highlights the active nav item (Home)', () => {
    render(<App />)
    const homeLink = screen.getByTestId('nav-home')
    expect(homeLink).toHaveClass('font-semibold')
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

  it('sidebar has gradient background overlay', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveStyle({
      backgroundImage: 'url(https://picsum.photos/seed/vagabond-landscape/600/1200)',
    })
  })

  it('sidebar has landscape image as background', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar.style.backgroundImage).toContain('picsum.photos')
  })

  it('sidebar has purple-to-pink gradient overlay', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    const gradientDiv = sidebar.querySelector('.absolute.inset-0')
    expect(gradientDiv).toBeInTheDocument()
    expect(gradientDiv).toHaveStyle({
      background: 'linear-gradient(180deg, #9b59b6 0%, #c471ed 50%, #e84393 100%)',
    })
  })

  it('renders subscribe button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('has copyright notice in footer', () => {
    render(<App />)
    expect(screen.getByText(/Copyright.*2024.*All rights reserved/)).toBeInTheDocument()
  })
})
