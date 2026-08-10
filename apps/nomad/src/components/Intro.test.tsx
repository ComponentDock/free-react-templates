import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the centered intro statement with emphasis', () => {
    render(<Intro />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Traveler & Blogger')
    expect(heading.textContent).toContain('Paris, Italy')
    expect(screen.getByText('Traveler & Blogger').tagName).toBe('STRONG')
  })
})
