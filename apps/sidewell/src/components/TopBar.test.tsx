import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders navigation links', () => {
    render(<TopBar onToggle={vi.fn()} />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders hamburger toggle button', () => {
    render(<TopBar onToggle={vi.fn()} />)
    expect(screen.getByTestId('topbar-toggle')).toBeInTheDocument()
  })
})
