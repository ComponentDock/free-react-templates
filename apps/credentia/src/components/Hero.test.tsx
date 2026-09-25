import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByText('Maria Williams')).toBeInTheDocument()
  })

  it('renders the bio', () => {
    render(<Hero />)
    expect(screen.getByText(/digital designer in love with photography/)).toBeInTheDocument()
  })

  it('renders general info items', () => {
    render(<Hero />)
    expect(screen.getByText('Date of Birth')).toBeInTheDocument()
    expect(screen.getByText('Aug 25, 1988')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Rosia Road 55, Gibraltar, UK')).toBeInTheDocument()
    expect(screen.getByText('E-mail')).toBeInTheDocument()
    expect(screen.getByText('mariawilliams@company.com')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+43 5266 22 345')).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Maria Williams portrait')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
