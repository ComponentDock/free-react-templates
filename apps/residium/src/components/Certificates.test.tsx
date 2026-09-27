import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Certificates } from './Certificates'

describe('Certificates', () => {
  it('renders section heading and certificate images', () => {
    render(<Certificates />)
    expect(screen.getByText(/Property/)).toBeInTheDocument()
    expect(screen.getByText(/Certificates/)).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
