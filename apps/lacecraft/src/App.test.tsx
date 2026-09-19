import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Lacecraft — Premium Footwear')
  })

  it('renders the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the banner (navbar header)', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders the contentinfo (footer)', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the hero heading (h1)', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Step Into Your Style/ }),
    ).toBeInTheDocument()
  })

  it('contains the Component Dock link in the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
