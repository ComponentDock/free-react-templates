import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Cart Dropdown Menu')
  })

  it('renders the cart dropdown trigger', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Cart/ })).toBeInTheDocument()
  })

  it('opens the cart dropdown on click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Cartwell')).toBeInTheDocument()
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cartwell — Cart Dropdown Menu')
  })
})
