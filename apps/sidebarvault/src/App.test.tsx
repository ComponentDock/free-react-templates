import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('has a screen-reader heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('SidebarVault')
  })

  it('composes sidebar and post grid', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    const cards = screen.getAllByTestId('post-card')
    expect(cards.length).toBe(8)
  })

  it('toggles sidebar open and closed on mobile', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toHaveClass('-translate-x-full')

    await user.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('translate-x-0')
  })

  it('has accessible navigation landmarks', () => {
    render(<App />)
    expect(screen.getByLabelText('Sidebar navigation')).toBeInTheDocument()
  })
})
