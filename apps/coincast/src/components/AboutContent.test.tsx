import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutContent } from './AboutContent'

describe('AboutContent', () => {
  it('renders the About heading with Coincast accent', () => {
    render(<AboutContent />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('About')
    expect(heading).toHaveTextContent('Coincast')
  })

  it('renders feature list items', () => {
    render(<AboutContent />)
    expect(screen.getByText('Professional cryptocurrency consulting')).toBeInTheDocument()
    expect(screen.getByText('24/7 market monitoring and alerts')).toBeInTheDocument()
    expect(screen.getByText('Secure blockchain development')).toBeInTheDocument()
    expect(screen.getByText('Custom trading strategy design')).toBeInTheDocument()
  })

  it('renders a Learn More button', () => {
    render(<AboutContent />)
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<AboutContent />)
    expect(
      screen.getByAltText('Coincast team working on cryptocurrency analysis'),
    ).toBeInTheDocument()
  })
})
