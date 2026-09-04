import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Toggly — Switch Toggle')
  })

  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Checkbox #06')
  })

  it('renders the sub-heading', () => {
    render(<App />)
    expect(screen.getByText('Switch Toggle')).toBeInTheDocument()
  })

  it('renders two toggle checkboxes', () => {
    render(<App />)
    expect(screen.getAllByRole('checkbox')).toHaveLength(2)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has a main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('has a contentinfo landmark for the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
