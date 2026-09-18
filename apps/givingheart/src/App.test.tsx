import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('GivingHeart')).toBeInTheDocument()
    expect(screen.getByText('Waiting for Help')).toBeInTheDocument()
    expect(screen.getByText(/Please Help them and Donate now/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByText('A very Lovely Welcome to our Company')).toBeInTheDocument()
    expect(screen.getByText('Our Volunteers')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Donate Now' })).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('GivingHeart — Charity & Donation Template')
  })
})
