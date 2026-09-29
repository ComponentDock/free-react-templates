import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Find For A Jobs')
  })

  it('renders the search form', () => {
    render(<App />)

    expect(screen.getByRole('search', { name: /job search/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('has the blue brand background', () => {
    const { container } = render(<App />)

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('bg-brand-500')
  })
})
