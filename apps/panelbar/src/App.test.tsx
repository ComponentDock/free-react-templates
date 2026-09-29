import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    expect(screen.getByText('Panelbar')).toBeInTheDocument()
  })

  it('renders the main content heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sidebar #04')
  })

  it('renders all sidebar nav items', () => {
    render(<App />)
    expect(screen.getByText('Homepage')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Friends')).toBeInTheDocument()
    expect(screen.getByText('Subscription')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Information')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('toggles sidebar open and closed via hamburger button', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByTestId('desktop-toggle')
    const sidebar = screen.getByTestId('sidebar')

    // Click to open
    await user.click(toggle)
    expect(sidebar).toHaveClass('translate-x-0')

    // Click overlay to close
    await user.click(screen.getByTestId('sidebar-overlay'))
    expect(sidebar).toHaveClass('-translate-x-full')
  })
})
