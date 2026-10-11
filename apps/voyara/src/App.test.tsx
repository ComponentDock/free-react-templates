import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section of the template in reference order', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'voyara' })).toBeInTheDocument()
    expect(screen.getByText('Enjoy Holidays')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1, name: 'Superb Facilities' })).toHaveLength(2)
    expect(screen.getByText('A very Lovely Welcome')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Book a Room' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Visit Our Office' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Instagram Feed' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
