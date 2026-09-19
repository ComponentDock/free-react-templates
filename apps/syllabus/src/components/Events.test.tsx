import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()
  })

  it('renders three event items with titles', () => {
    render(<Events />)
    expect(screen.getByText('Digital Marketing Summit')).toBeInTheDocument()
    expect(screen.getByText('WordPress Workshop')).toBeInTheDocument()
    expect(screen.getByText('SEO Masterclass')).toBeInTheDocument()
  })

  it('displays event locations', () => {
    render(<Events />)
    expect(screen.getByText('New York, USA')).toBeInTheDocument()
    expect(screen.getByText('London, UK')).toBeInTheDocument()
    expect(screen.getByText('Sydney, Australia')).toBeInTheDocument()
  })

  it('displays date blocks', () => {
    render(<Events />)
    expect(screen.getByText('24')).toBeInTheDocument()
    expect(screen.getByText('Nov')).toBeInTheDocument()
  })
})
