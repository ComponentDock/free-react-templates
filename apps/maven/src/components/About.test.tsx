import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the experience headline, eyebrow, title, text, and CTA', () => {
    const { container } = render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: '25 Years Working Experience' }),
    ).toBeInTheDocument()
    expect(screen.getByText('About our company')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Make the customer the hero of your story' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '#services')

    expect(container.querySelectorAll('img')).toHaveLength(2)
  })
})
