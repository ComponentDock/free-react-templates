import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the sidebar', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('renders the main content heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Railgate')
  })

  it('renders all sidebar nav items', () => {
    render(<App />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Download')).toBeInTheDocument()
    expect(screen.getByText('Gift Code')).toBeInTheDocument()
    expect(screen.getByText('Top Review')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Sign Out')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('toggles sidebar via the toggle button', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByTestId('sidebar-toggle')
    const sidebar = screen.getByTestId('sidebar')

    // Sidebar starts visible (ml-0)
    expect(sidebar).toHaveClass('ml-0')

    // Click to collapse
    await user.click(toggle)
    expect(sidebar).toHaveClass('-ml-[300px]')

    // Click to expand again
    await user.click(toggle)
    expect(sidebar).toHaveClass('ml-0')
  })

  it('closes sidebar via overlay click on mobile', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByTestId('sidebar-toggle')

    // Collapse first, then expand to show overlay
    await user.click(toggle)
    await user.click(toggle)

    const overlay = screen.getByTestId('sidebar-overlay')
    await user.click(overlay)

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-ml-[300px]')
  })
})
