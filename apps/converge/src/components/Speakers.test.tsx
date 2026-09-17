import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the Speakers heading', () => {
    render(<Speakers />)
    expect(screen.getByRole('heading', { name: /speakers/i })).toBeInTheDocument()
  })

  it('renders all 6 speaker names', () => {
    render(<Speakers />)
    expect(screen.getByText('Maria Smith')).toBeInTheDocument()
    expect(screen.getByText('Laura White')).toBeInTheDocument()
  })

  it('renders speaker roles', () => {
    render(<Speakers />)
    expect(screen.getByText('Marketing Director')).toBeInTheDocument()
    expect(screen.getByText('Analytics Expert')).toBeInTheDocument()
  })

  it('renders speaker images with alt text', () => {
    render(<Speakers />)
    expect(screen.getByAltText('Maria Smith')).toBeInTheDocument()
    expect(screen.getByAltText('James Williams')).toBeInTheDocument()
  })
})
