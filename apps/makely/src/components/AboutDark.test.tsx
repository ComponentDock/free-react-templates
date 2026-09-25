import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutDark } from './AboutDark'

describe('AboutDark', () => {
  it('renders all four service items', () => {
    render(<AboutDark />)
    expect(screen.getByRole('heading', { name: 'Strategy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Web Development' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Art Direction' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Copywriting' })).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<AboutDark />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(4)
  })

  it('renders the about image', () => {
    render(<AboutDark />)
    expect(screen.getByRole('img', { name: /About our agency/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
