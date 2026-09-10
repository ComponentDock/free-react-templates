import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SecondaryServices } from './SecondaryServices'

describe('SecondaryServices', () => {
  it('renders 2 secondary service cards', () => {
    render(<SecondaryServices />)
    expect(screen.getByRole('heading', { name: 'Financial Advisory' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Operational Excellence' })).toBeInTheDocument()
  })

  it('renders service images', () => {
    render(<SecondaryServices />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })
})
