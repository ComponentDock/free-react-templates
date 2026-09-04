import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the demo section and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Ticktag — Checkbox UI Template')

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #03')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders both checkbox chips', () => {
    render(<App />)
    expect(screen.getByRole('checkbox', { name: 'Confirm Order One' })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: 'Confirm Order Two' })).toBeInTheDocument()
  })
})
