import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders sidebar, top bar, main content, and footer', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('topbar')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('toggles sidebar on hamburger click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByTestId('sidebar-toggle')
    const sidebar = screen.getByTestId('sidebar')
    // On desktop sidebar is visible; on mobile it starts hidden
    // The sidebar always renders, just hidden via transform on mobile
    expect(sidebar).toBeInTheDocument()
    await user.click(toggle)
    // After toggle, overlay should appear on mobile
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()
  })

  it('closes sidebar when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByTestId('sidebar-toggle')
    await user.click(toggle)
    const overlay = screen.getByTestId('sidebar-overlay')
    await user.click(overlay)
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })
})
