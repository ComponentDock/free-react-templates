import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Screenshots } from './Screenshots'

describe('Screenshots', () => {
  it('renders the heading, screenshot placeholders, and learn-more button', () => {
    render(<Screenshots />)

    expect(screen.getByRole('heading', { level: 2, name: 'Screenshot 01' })).toBeInTheDocument()

    for (let index = 1; index <= 3; index += 1) {
      expect(screen.getByRole('img', { name: `Appy screenshot ${index}` })).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/appy-screen-${index}/400/800`,
      )
    }

    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#features')
  })
})
