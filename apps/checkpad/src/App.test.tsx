import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the checkbox showcase and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Checkpad — Bootstrap Checkbox Demo')

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #19')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders checkbox options', () => {
    render(<App />)
    expect(screen.getByRole('checkbox', { name: /first checkbox/i })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /second checkbox/i })).toBeInTheDocument()
    expect(screen.getAllByRole('checkbox')).toHaveLength(4)
  })
})
