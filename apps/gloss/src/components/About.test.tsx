import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

const serviceTypes = ['Daily makeup', 'Wedding makeup', 'Event makeup', 'Creative Makeup']

describe('About', () => {
  it('renders the professional makeup heading and four service types', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'Professional makeup' })).toBeInTheDocument()
    for (const service of serviceTypes) {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument()
    }
    expect(screen.getByText('From $20.0')).toBeInTheDocument()
    expect(screen.getByText('From $50.0')).toBeInTheDocument()
    expect(screen.getByText('From $30.0')).toBeInTheDocument()
    expect(screen.getByText('From $70.0')).toBeInTheDocument()
  })
})
