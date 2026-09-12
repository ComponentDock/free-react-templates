import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the photo band as a full-width cover image', () => {
    render(<App />)
    const band = screen.getByRole('main').firstElementChild!
    expect(band).toHaveClass('h-[200px]', 'w-full', 'bg-cover', 'bg-center')
  })

  it('renders the straddling form card', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 3, name: 'Register' })
    const card = heading.closest('div')!
    expect(card.className).toContain('-mt-[300px]')
    expect(card.className).toContain('bg-white')
  })

  it('renders the form area with the correct background', () => {
    render(<App />)
    const section = document.querySelector('section')!
    expect(section.className).toContain('bg-[var(--color-area)]')
    expect(section.className).toContain('min-h-[700px]')
  })

  it('renders the registration form inside the card', () => {
    render(<App />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Re-type Password')).toBeInTheDocument()
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
