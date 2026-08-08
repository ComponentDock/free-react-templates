import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the heading and at least two reason items', () => {
    render(<WhyUs />)
    expect(
      screen.getByRole('heading', { name: /Curating a workplace that inspires all of us/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(2)
  })
})
