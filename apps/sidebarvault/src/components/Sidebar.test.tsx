import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

describe('Sidebar', () => {
  it('renders the profile image', () => {
    render(<App />)
    const profileImg = screen.getByAltText('Profile photo')
    expect(profileImg).toBeInTheDocument()
  })

  it('displays profile name and location', () => {
    render(<App />)
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument()
  })

  it('displays stats (Posts, Followers, Following)', () => {
    render(<App />)
    expect(screen.getByText('892')).toBeInTheDocument()
    expect(screen.getByText('22.5k')).toBeInTheDocument()
    expect(screen.getByText('150')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
    expect(screen.getByText('Followers')).toBeInTheDocument()
    expect(screen.getByText('Following')).toBeInTheDocument()
  })

  it('renders all navigation items', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveTextContent('Feed')
    expect(sidebar).toHaveTextContent('Explore')
    expect(sidebar).toHaveTextContent('Notifications')
    expect(sidebar).toHaveTextContent('Direct')
    expect(sidebar).toHaveTextContent('Stats')
    expect(sidebar).toHaveTextContent('Sign out')
  })

  it('highlights Feed as the active nav item', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    const feedLink = sidebar.querySelector('a[href="#feed"]')
    expect(feedLink).toHaveClass('border-accent')
  })

  it('switches active nav item when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    const exploreLink = sidebar.querySelector('a[href="#explore"]')!
    await user.click(exploreLink)
    expect(exploreLink).toHaveClass('border-accent')
  })

  it('hides sidebar on mobile by default', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  it('shows hamburger button on mobile', () => {
    render(<App />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toHaveAttribute('aria-label', 'Open sidebar')
  })

  it('opens sidebar via hamburger', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    await user.click(toggleBtn)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('translate-x-0')
  })

  it('shows close button when sidebar is open', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    await user.click(toggleBtn)
    const closeBtn = screen.getByTestId('sidebar-close')
    expect(closeBtn).toHaveAttribute('aria-label', 'Close sidebar')
  })

  it('closes sidebar via close button', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    await user.click(toggleBtn)
    const closeBtn = screen.getByTestId('sidebar-close')
    await user.click(closeBtn)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-translate-x-full')
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

  it('renders Component Dock link in footer', () => {
    render(<App />)
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('sidebar has white background', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('bg-sidebar-bg')
  })
})
