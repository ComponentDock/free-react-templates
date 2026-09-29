import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('SidePanel')).toBeInTheDocument()
  })

  it('composes sidebar and main content', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('SidePanel')
  })

  it('toggles sidebar open and closed', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toHaveClass('-translate-x-full')

    await user.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('translate-x-0')

    await user.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('-translate-x-full')
  })

  it('has accessible navigation landmarks', () => {
    render(<App />)
    expect(screen.getByLabelText('Sidebar navigation')).toBeInTheDocument()
    expect(screen.getByLabelText('Top navigation')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('SidePanel')
  })
})
