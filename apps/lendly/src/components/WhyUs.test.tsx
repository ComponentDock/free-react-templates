import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the heading and three icon cards', () => {
    const { container } = render(<WhyUs />)
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose us?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Money in 1 Hour!' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Helpfull Staff' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Credit History Considered' }),
    ).toBeInTheDocument()
    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })

  it('renders the Apply Now pill', () => {
    render(<WhyUs />)
    expect(screen.getByRole('link', { name: 'Apply Now!' })).toHaveAttribute('href', '#apply')
  })
})
