import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders the heading and CTA button', () => {
    render(<Banner />)
    expect(screen.getByText(/effective sleek and clean design/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Banner />)
    const section = screen.getByText(/effective sleek and clean design/i).closest('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
