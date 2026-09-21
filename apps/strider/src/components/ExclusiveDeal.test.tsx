import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExclusiveDeal } from './ExclusiveDeal'

describe('ExclusiveDeal', () => {
  it('renders the section heading', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('Fashion Up To 50% Off')).toBeInTheDocument()
  })

  it('renders the exclusive offer label', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('Exclusive Offer')).toBeInTheDocument()
  })

  it('renders the countdown items', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
  })

  it('renders the Shop Now button', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('renders the deal image', () => {
    render(<ExclusiveDeal />)
    expect(screen.getByAltText('Exclusive deal on sneakers')).toBeInTheDocument()
  })
})
