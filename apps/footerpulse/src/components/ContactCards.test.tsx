import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCards } from './ContactCards'

describe('ContactCards', () => {
  it('renders a section with contact information label', () => {
    render(<ContactCards />)
    const section = screen.getByRole('region', { name: /contact information/i })
    expect(section).toBeInTheDocument()
    expect(section.tagName).toBe('SECTION')
  })

  it('renders three contact cards', () => {
    render(<ContactCards />)
    expect(screen.getByText('(+00) 1234 5678')).toBeInTheDocument()
    expect(screen.getByText('info@email.com')).toBeInTheDocument()
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
  })

  it('applies blue background to phone card', () => {
    render(<ContactCards />)
    const phoneCard = screen.getByText('(+00) 1234 5678').closest('div')?.parentElement
    expect(phoneCard).not.toBeNull()
    expect(phoneCard!.className).toContain('bg-card-blue')
  })

  it('applies green background to email card', () => {
    render(<ContactCards />)
    const emailCard = screen.getByText('info@email.com').closest('div')?.parentElement
    expect(emailCard).not.toBeNull()
    expect(emailCard!.className).toContain('bg-card-green')
  })

  it('applies orange background to address card', () => {
    render(<ContactCards />)
    const addressCard = screen
      .getByText('203 Fake St. Mountain View, San Francisco, California, USA')
      .closest('div')?.parentElement
    expect(addressCard).not.toBeNull()
    expect(addressCard!.className).toContain('bg-card-orange')
  })

  it('renders responsive grid layout', () => {
    render(<ContactCards />)
    const section = screen.getByRole('region', { name: /contact information/i })
    const grid = section.querySelector('.grid')
    expect(grid).not.toBeNull()
    expect(grid!.className).toContain('md:grid-cols-3')
    expect(grid!.className).toContain('grid-cols-1')
  })

  it('renders card icons with aria-hidden', () => {
    render(<ContactCards />)
    const icons = document.querySelectorAll('[aria-hidden="true"]')
    expect(icons.length).toBeGreaterThanOrEqual(3)
  })

  it('renders card text with white color', () => {
    render(<ContactCards />)
    const phoneText = screen.getByText('(+00) 1234 5678')
    expect(phoneText.className).toContain('text-white')
  })
})
