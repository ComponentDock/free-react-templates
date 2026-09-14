import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders the Our Programs heading', () => {
    render(<Programs />)
    expect(screen.getByRole('heading', { name: /our programs/i })).toBeInTheDocument()
  })

  it('renders the What We Offer subtitle', () => {
    render(<Programs />)
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
  })

  it('renders the Aerobics program card', () => {
    render(<Programs />)
    expect(screen.getByRole('heading', { name: 'Aerobics' })).toBeInTheDocument()
    expect(screen.getByText(/high-energy group classes/i)).toBeInTheDocument()
  })

  it('renders the Pilates program card', () => {
    render(<Programs />)
    expect(screen.getByRole('heading', { name: 'Pilates' })).toBeInTheDocument()
    expect(screen.getByText(/strengthen your core/i)).toBeInTheDocument()
  })

  it('renders the Yoga program card', () => {
    render(<Programs />)
    expect(screen.getByRole('heading', { name: 'Yoga' })).toBeInTheDocument()
    expect(screen.getByText(/find balance between mind and body/i)).toBeInTheDocument()
  })

  it('renders duration and level for each program', () => {
    render(<Programs />)
    expect(screen.getByText('45 min')).toBeInTheDocument()
    expect(screen.getByText('60 min')).toBeInTheDocument()
    expect(screen.getByText('75 min')).toBeInTheDocument()
  })

  it('renders program images with alt text', () => {
    render(<Programs />)
    expect(screen.getByRole('img', { name: /aerobics class/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /pilates class/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /yoga class/i })).toBeInTheDocument()
  })

  it('renders Learn More links for each program', () => {
    render(<Programs />)
    const links = screen.getAllByRole('link', { name: /learn more/i })
    expect(links).toHaveLength(3)
  })

  it('has a section with id="programs"', () => {
    render(<Programs />)
    expect(document.getElementById('programs')).toBeInTheDocument()
  })
})
