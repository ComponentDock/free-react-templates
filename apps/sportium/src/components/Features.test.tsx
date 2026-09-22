import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders 3 feature boxes with titles', () => {
    render(<Features />)
    expect(screen.getByText('Pilates with trainer')).toBeInTheDocument()
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
    expect(screen.getByText('Healthy diet plan')).toBeInTheDocument()
  })

  it('renders learn-more links for each feature', () => {
    render(<Features />)
    const links = screen.getAllByRole('link', { name: /Learn more about/ })
    expect(links).toHaveLength(3)
  })
})
