import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the Draped site name', () => {
    render(<App />)
    expect(screen.getByText('Draped')).toBeInTheDocument()
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Madewell')
  })

  it('renders product grid section', () => {
    render(<App />)
    expect(screen.getAllByText('The Shoe').length).toBeGreaterThanOrEqual(1)
  })

  it('renders featured banners', () => {
    render(<App />)
    expect(screen.getByText('Jacket')).toBeInTheDocument()
    expect(screen.getByText('New Denim Coat')).toBeInTheDocument()
  })

  it('renders collections section', () => {
    render(<App />)
    expect(screen.getByText('Collections')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('toggles dark mode class on html element', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(toggleButton)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Draped — Fashion E-Commerce Landing')
  })
})
