import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the selection section and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Galette — Item Selection Checkbox Template')

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #04')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders all three checkbox options', () => {
    render(<App />)
    expect(screen.getByRole('checkbox', { name: /notifications/i })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /newsletter/i })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /terms/i })).toBeInTheDocument()
  })
})
