import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the style-code label, the headline and the primary CTA', () => {
    render(<Hero />)

    expect(screen.getByText('85055')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'New Collection' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Collection' })).toHaveAttribute('href', '#shop')
  })

  it('uses a background photo placeholder', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle('background-image: url(https://picsum.photos/id/64/1600/600)')
  })
})
