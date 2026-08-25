import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: /Flexible support/ })).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/Apply for a business loan today/)).toBeInTheDocument()
  })

  it('renders accordion items', () => {
    render(<About />)
    expect(screen.getByText('Starts the automated process.')).toBeInTheDocument()
    expect(screen.getByText('The automated process starts.')).toBeInTheDocument()
    expect(screen.getByText('Automated process starts.')).toBeInTheDocument()
    expect(screen.getByText('Process the automated magic.')).toBeInTheDocument()
  })

  it('expands and collapses accordion items on click', async () => {
    const user = userEvent.setup()
    render(<About />)
    const firstItem = screen.getByRole('button', { name: /Starts the automated process/ })
    await user.click(firstItem)
    expect(firstItem).toHaveAttribute('aria-expanded', 'true')
    await user.click(firstItem)
    expect(firstItem).toHaveAttribute('aria-expanded', 'false')
  })

  it('has second item expanded by default', () => {
    render(<About />)
    const secondItem = screen.getByRole('button', { name: /The automated process starts/ })
    expect(secondItem).toHaveAttribute('aria-expanded', 'true')
  })
})
