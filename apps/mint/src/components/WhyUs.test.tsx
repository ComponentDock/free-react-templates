import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the section heading and FAQ items', () => {
    render(<WhyUs />)
    expect(screen.getByRole('heading', { name: /Why Us/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /What Should I Do If My Interior Broken/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Is Your Location/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Robus Building/i })).toBeInTheDocument()
  })
})
