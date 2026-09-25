import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Curelink — Health & Medical Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero heading
    const heroHeading = screen.getByRole('heading', { level: 1 })
    expect(heroHeading.textContent).toMatch(/most valuable thing is your/)

    // Section headings
    expect(screen.getByRole('heading', { name: 'Our Departments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Doctors' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What Our Patients Say' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'From Our Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe to Our Newsletter' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
