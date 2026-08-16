import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhoWeAre } from './WhoWeAre'
import { aboutImage } from '../data'

describe('WhoWeAre', () => {
  it('renders the section heading and copy', () => {
    render(<WhoWeAre />)
    expect(screen.getByRole('heading', { name: 'Who we are?' })).toBeInTheDocument()
    expect(screen.getByText(/charitable organization/i)).toBeInTheDocument()
  })

  it('renders the photo with alt text', () => {
    render(<WhoWeAre />)
    const img = screen.getByAltText(aboutImage.alt)
    expect(img).toHaveAttribute('src', aboutImage.src)
  })

  it('renders a Learn More pill button', () => {
    render(<WhoWeAre />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
  })
})
