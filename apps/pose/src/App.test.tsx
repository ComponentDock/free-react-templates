import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders every section of the Pose template in order', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Pose' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pose')
    expect(
      screen.getByRole('heading', { level: 2, name: 'A Professional Model Agency' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Hello! Pose' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: "Our Tops Model's" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Request a Quote' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Pose' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Pose — Model Agency')
  })
})
