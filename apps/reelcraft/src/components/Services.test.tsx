import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What We do\?/i })).toBeInTheDocument()
  })

  it('renders all four service titles', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Motion graphics' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Scriptwriting and editing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Video distribution' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Video hosting' })).toBeInTheDocument()
  })

  it('renders the View all services button', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /View all services/i })).toBeInTheDocument()
  })

  it('has the services section with an ID', () => {
    render(<Services />)
    expect(document.getElementById('services')).toBeInTheDocument()
  })
})
