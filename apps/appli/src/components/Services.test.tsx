import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading, supporting paragraph, and six service cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Finally focus on my marketing strategy and delegate',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/In the old days, your website was the same for everyone/),
    ).toBeInTheDocument()

    const titles = [
      'Design & creatives',
      'Telecommunication',
      'Restaurant',
      'Programing',
      'Architecture',
      'Photography',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(
      screen.getByText(/Craft pixel-perfect interfaces that turn visitors into loyal customers/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Showcase portfolios in a gallery your audience will love/),
    ).toBeInTheDocument()
  })
})
