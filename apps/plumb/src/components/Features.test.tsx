import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders 4 feature items with numbers 1 through 4', () => {
    render(<Features />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('renders a Read more link for each feature', () => {
    render(<Features />)

    const links = screen.getAllByRole('link', { name: 'Read more' })
    expect(links).toHaveLength(4)
  })

  it('has the correct section landmark', () => {
    render(<Features />)

    expect(screen.getByRole('region', { name: 'Features' })).toBeInTheDocument()
  })
})
