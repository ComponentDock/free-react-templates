import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /contact form #04/i })).toBeInTheDocument()
  })

  it('renders the Contact Card', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })

  it('has light gray page background', () => {
    const { container } = render(<App />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('bg-bg-page')
  })
})
