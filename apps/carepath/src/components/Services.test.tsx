import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: /awesome health service/i }),
    ).toBeInTheDocument()
  })

  it('renders three service cards with Learn More links', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 3, name: /neurology service/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /dental clinic/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /plastic surgery/i })).toBeInTheDocument()

    const learnMoreLinks = screen.getAllByRole('link', { name: /learn more/i })
    expect(learnMoreLinks).toHaveLength(3)
  })
})
