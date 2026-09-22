import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section title', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About Sportium/ })).toBeInTheDocument()
  })

  it('renders the subtitle and description', () => {
    render(<About />)
    expect(screen.getByText('welcome to sportium')).toBeInTheDocument()
    expect(screen.getByText(/Morbi sed varius risus/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Join Now' })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /About Sportium/ })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
