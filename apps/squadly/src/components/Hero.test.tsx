import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and CTA buttons', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Lease The Right Equipment/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request A Quote' })).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })
})
