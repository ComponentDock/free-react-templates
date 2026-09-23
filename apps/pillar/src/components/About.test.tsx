import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and content', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText('Learn To Know')).toBeInTheDocument()
  })

  it('renders bullet points', () => {
    render(<About />)
    expect(screen.getByText('Asperiores modi sed')).toBeInTheDocument()
    expect(screen.getByText('Enim cum voluptas')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Read More About Us/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /Architecture interior/i })).toBeInTheDocument()
  })
})
