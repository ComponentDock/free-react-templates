import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Works } from './Works'

describe('Works', () => {
  it('renders the section heading', () => {
    render(<Works />)
    expect(screen.getByText('Recent Works')).toBeInTheDocument()
  })

  it('renders all six portfolio items', () => {
    render(<Works />)
    const titles = ['Shutterbug', 'Woodcraft', 'The Beetle', 'Grow Green', 'Guitarist', 'Palmeira']
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders images with correct alt text', () => {
    render(<Works />)
    expect(screen.getByRole('img', { name: 'Shutterbug' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Palmeira' })).toBeInTheDocument()
  })
})
