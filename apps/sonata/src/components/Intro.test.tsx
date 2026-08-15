import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the headline, supporting copy and Try it now CTA', () => {
    render(<Intro />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Unlimited Access to 100K tracks/)

    expect(screen.getByText(/Consectetur adipiscing elit/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Try it now' })).toBeInTheDocument()
  })
})
