import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Scanbar — Quick City Search Form', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Quick Find Your City')
  })

  it('renders the what input with placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('ex: food, service, bar, hotel')).toBeInTheDocument()
  })

  it('renders the where select', () => {
    render(<App />)
    expect(screen.getByLabelText('Where')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the what field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('ex: food, service, bar, hotel')
    await user.type(input, 'restaurants')
    expect(input).toHaveValue('restaurants')
  })

  it('allows selecting a where option', async () => {
    const user = userEvent.setup()
    render(<App />)
    const select = screen.getByLabelText('Where')
    await user.selectOptions(select, '2 adults')
    expect(select).toHaveValue('2 adults')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Quick Find Your City')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Scanbar — Quick City Search Form')
  })
})
