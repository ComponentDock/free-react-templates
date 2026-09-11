import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders the Our Clients heading', () => {
    render(<Partners />)
    expect(screen.getByRole('heading', { name: 'Our Clients' })).toBeInTheDocument()
  })

  it('renders all five partner images', () => {
    render(<Partners />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
  })
})
