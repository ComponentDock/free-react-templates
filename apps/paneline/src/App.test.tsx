import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the sidebar, main content, and footer', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('main-content')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders the Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders category headings in sidebar', () => {
    render(<App />)
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Tag Cloud')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('toggles sidebar when mobile toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Initially sidebar overlay is not visible
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()

    // Click main toggle to open sidebar
    await user.click(screen.getByTestId('main-toggle'))
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()

    // Click overlay to close sidebar
    await user.click(screen.getByTestId('sidebar-overlay'))
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })
})
