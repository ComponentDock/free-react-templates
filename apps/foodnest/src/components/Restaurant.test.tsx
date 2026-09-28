import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Restaurant } from './Restaurant'

describe('Restaurant', () => {
  it('renders heading and description', () => {
    render(<Restaurant />)

    expect(screen.getByRole('heading', { level: 2, name: 'The Restaurant' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeInTheDocument()
  })

  it('renders images', () => {
    const { container } = render(<Restaurant />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('has about section id', () => {
    const { container } = render(<Restaurant />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })
})
