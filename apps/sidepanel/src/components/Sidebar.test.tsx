import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

describe('Sidebar', () => {
  it('renders the sidebar with profile image', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
    const profileImg = screen.getByAltText('Profile photo')
    expect(profileImg).toBeInTheDocument()
  })

  it('renders all navigation items in sidebar', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveTextContent('Home')
    expect(sidebar).toHaveTextContent('About')
    expect(sidebar).toHaveTextContent('Pages')
    expect(sidebar).toHaveTextContent('Portfolio')
    expect(sidebar).toHaveTextContent('Contact')
  })

  it('highlights the active nav item (Home)', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    const homeLink = sidebar.querySelector('a[href="#home"]')
    expect(homeLink).toHaveClass('border-accent')
  })

  it('expands dropdown items when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    const pagesLink = sidebar.querySelector('a[href="#pages"]')!
    await user.click(pagesLink)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('collapses expanded items on second click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    const pagesLink = sidebar.querySelector('a[href="#pages"]')!
    await user.click(pagesLink)
    expect(screen.getByText('Services')).toBeInTheDocument()
    await user.click(pagesLink)
    expect(screen.queryByText('Services')).not.toBeInTheDocument()
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

  it('handles click on non-dropdown nav item', async () => {
    const user = userEvent.setup()
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    const aboutLink = sidebar.querySelector('a[href="#about"]')!
    await user.click(aboutLink)
    // No dropdown should appear
    expect(screen.queryByText('Services')).not.toBeInTheDocument()
  })

  it('sidebar has dark background', () => {
    render(<App />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('bg-sidebar-bg')
  })
})
