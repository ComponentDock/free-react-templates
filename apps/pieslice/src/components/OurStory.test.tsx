import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OurStory } from './OurStory'

describe('OurStory', () => {
  it('renders the section heading and two text columns', () => {
    render(<OurStory />)

    expect(screen.getByRole('heading', { name: 'Our Story' })).toBeInTheDocument()

    const paragraphs = screen.getAllByText(/Maecenas fermentum/)
    expect(paragraphs.length).toBe(2)
  })
})
