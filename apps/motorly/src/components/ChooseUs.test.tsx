import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the experience heading, blurb, about button, and image', () => {
    render(<ChooseUs />)
    expect(
      screen.getByRole('heading', { name: /We Have 20 Years Of Experience In Auto Car/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /garage workshop/i })).toBeInTheDocument()
  })
})
