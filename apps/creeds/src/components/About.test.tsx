import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { aboutImage } from '../data'

describe('About', () => {
  it('renders the photo, heading, paragraphs and Read Full Story link', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { name: 'Welcome to Creeds Church' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read Full Story' })).toHaveAttribute('href', '#')

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', aboutImage)
  })
})
