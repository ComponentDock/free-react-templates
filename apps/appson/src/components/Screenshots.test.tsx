import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Screenshots } from './Screenshots'

describe('Screenshots', () => {
  it('renders the heading, blurb, and four screenshot placeholders', () => {
    render(<Screenshots />)

    expect(screen.getByRole('heading', { level: 2, name: 'Screenshots' })).toBeInTheDocument()

    for (let index = 1; index <= 4; index += 1) {
      expect(screen.getByRole('img', { name: `Appson screen ${index}` })).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/appson-screen-${index}/400/800`,
      )
    }
  })
})
