import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('More Features')).toBeInTheDocument()
  })

  it('renders 3 feature items', () => {
    render(<Features />)
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText('Listen To Our Sermons')).toBeInTheDocument()
    expect(screen.getByText('Testimonies')).toBeInTheDocument()
  })

  it('has Read More links for each feature', () => {
    render(<Features />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })
})
