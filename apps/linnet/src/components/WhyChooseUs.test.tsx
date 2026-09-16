import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading and default tab content', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(screen.getByText(/Delivering Excellence/i)).toBeInTheDocument()
  })

  it('switches tab content on click', async () => {
    render(<WhyChooseUs />)
    await userEvent.click(screen.getByRole('button', { name: /Our Vision/i }))
    expect(screen.getByText(/Shaping the Future/i)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /Our Support/i }))
    expect(screen.getByText(/Dedicated Support/i)).toBeInTheDocument()
  })
})
