import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading, subtitle, description, and contact button', () => {
    render(<About />)

    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /The electro vibe/ })).toBeInTheDocument()
    expect(screen.getByText(/Born from the underground music scene/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
  })

  it('shows an artist image', () => {
    render(<About />)

    const img = screen.getByRole('img', { name: /artist performing/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
