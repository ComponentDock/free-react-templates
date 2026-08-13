import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('shows the headline, paragraph, and Get Started CTA', () => {
    render(<Banner />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Dedicated hosting solutions only \$129\.99\/month/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#pricing')
  })
})
