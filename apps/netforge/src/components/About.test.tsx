import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and highlights', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()
    expect(screen.getByText('10+ years of industry experience')).toBeInTheDocument()
    expect(screen.getByText('Dedicated project managers')).toBeInTheDocument()
    expect(screen.getByText('24/7 technical support')).toBeInTheDocument()
    expect(screen.getByText('Agile development methodology')).toBeInTheDocument()
  })

  it('shows an office image', () => {
    render(<About />)

    const img = screen.getByRole('img', { name: /netforge team/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
