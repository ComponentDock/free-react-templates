import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and subheading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/We.*Leader In Agricultural Market/)).toBeInTheDocument()
  })

  it('renders experience badge', () => {
    render(<About />)
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('Year Of Experienced')).toBeInTheDocument()
  })

  it('renders feature items', () => {
    render(<About />)
    expect(screen.getByText('Growing Fruits and Vegetables')).toBeInTheDocument()
    expect(screen.getByText('Tips for Ripening Fruits')).toBeInTheDocument()
  })

  it('renders learn more button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '#services')
  })

  it('renders images with alt text', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /greenfield farm/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /inset farming/i })).toBeInTheDocument()
  })
})
