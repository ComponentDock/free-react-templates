import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the section heading and host name', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Meet Your Host' })
    expect(heading).toBeInTheDocument()
    expect(screen.getByText('About the Host')).toBeInTheDocument()
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
  })

  it('renders the host photo with descriptive alt text', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'Portrait of host Alex Morgan' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/soundbite-host/800/1000',
    )
  })

  it('renders the bio and blockquote', () => {
    render(<About />)
    expect(screen.getByText(/Serial entrepreneur, angel investor/)).toBeInTheDocument()
    expect(screen.getByText(/Every founder has a story worth sharing/)).toBeInTheDocument()
  })

  it('renders social buttons with accessible names', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'X (Twitter)' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})
