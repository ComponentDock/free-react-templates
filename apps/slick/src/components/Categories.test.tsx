import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('shows the heading and both For Hair / For Beard panels', () => {
    render(<Categories />)

    expect(screen.getByRole('heading', { name: 'All We Do for You' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'For Hair' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'For Beard' })).toBeInTheDocument()

    expect(screen.getAllByText('Trim your Hair')).toHaveLength(2)
    expect(screen.getByText('Special Beard Treatment')).toBeInTheDocument()
    expect(screen.getByText('Color your Beard')).toBeInTheDocument()
    expect(screen.getByText('Wax your Beard')).toBeInTheDocument()
    expect(screen.getAllByText('From $10.00').length).toBeGreaterThanOrEqual(4)
  })

  it('shows a photo per panel', () => {
    render(<Categories />)

    expect(screen.getByRole('img', { name: 'For Hair services' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByRole('img', { name: 'For Beard services' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
