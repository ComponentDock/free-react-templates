import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.body).toBeInTheDocument()
  })

  it('contains Navbar', () => {
    render(<App />)
    expect(screen.getByText('Oathmark')).toBeInTheDocument()
  })

  it('contains Hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /notary public/i })).toBeInTheDocument()
  })

  it('contains PracticeAreas section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Practice Areas' })).toBeInTheDocument()
  })

  it('contains About section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /reliable.*effective legal solutions/i }),
    ).toBeInTheDocument()
  })

  it('contains Testimonials section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Customers' })).toBeInTheDocument()
  })

  it('contains LegalSolutions section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /we have legal solutions/i }),
    ).toBeInTheDocument()
  })

  it('contains Footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('sets document.title', async () => {
    render(<App />)
    expect(document.title).toBe('Oathmark — Notary Public & Legal Solutions')
  })
})
