import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sportium — Fitness & Gym Template')
  })

  it('composes every section in demo order with the right landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const main = screen.getByRole('main')
    const sections = main.querySelectorAll('section')
    expect(sections).toHaveLength(7)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Get fit with us')
    expect(screen.getByText('Pilates with trainer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Sportium/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Courses' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Blog' })).toBeInTheDocument()
  })
})
