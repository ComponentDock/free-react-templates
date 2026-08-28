import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('#08')
    expect(heading.textContent).toContain('Bootstrap 4 Buttons')
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Bevel — Button Showcase')
  })

  it('renders the size buttons section with Large, Medium, Small labels', () => {
    render(<App />)

    expect(screen.getByText('Large')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
  })

  it('renders the color buttons section with all 18 colors', () => {
    render(<App />)

    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Secondary')).toBeInTheDocument()
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('Info')).toBeInTheDocument()
    expect(screen.getByText('Warning')).toBeInTheDocument()
    expect(screen.getByText('Danger')).toBeInTheDocument()
    expect(screen.getByText('Light')).toBeInTheDocument()
    expect(screen.getByText('Orange')).toBeInTheDocument()
    expect(screen.getByText('Indigo')).toBeInTheDocument()
    expect(screen.getByText('Pink')).toBeInTheDocument()
    expect(screen.getByText('Deep Orange')).toBeInTheDocument()
    expect(screen.getByText('Aqua')).toBeInTheDocument()
    expect(screen.getByText('Dark')).toBeInTheDocument()
    expect(screen.getByText('Black')).toBeInTheDocument()
    expect(screen.getByText('Purple')).toBeInTheDocument()
    expect(screen.getByText('Blue')).toBeInTheDocument()
    expect(screen.getByText('Brown')).toBeInTheDocument()
    expect(screen.getByText('Blue Gray')).toBeInTheDocument()
  })

  it('renders the full-width block button', () => {
    render(<App />)

    const blockLabel = screen.getByText('Full width button')
    expect(blockLabel).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the contentinfo landmark', () => {
    render(<App />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Button Colors label', () => {
    render(<App />)

    expect(screen.getByText('Button Colors')).toBeInTheDocument()
  })
})
