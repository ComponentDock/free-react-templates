import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading "FoldKit Widget"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /foldkit widget/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<App />)
    expect(screen.getByText(/interactive profile and settings accordion/i)).toBeInTheDocument()
  })

  it('renders all four accordion toggle buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Profile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Messages' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Settings' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('FoldKit — Interactive Accordion Widget')
  })

  it('profile accordion item is expanded by default', () => {
    render(<App />)
    const profileButton = screen.getByRole('button', { name: 'Profile' })
    expect(profileButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('page has light gray background', () => {
    const { container } = render(<App />)
    const outerDiv = container.firstElementChild!
    expect(outerDiv.className).toContain('bg-[#efefef]')
  })
})
