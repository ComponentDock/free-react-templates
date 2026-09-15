import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders heading and four feature items', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Top Reason Why We Need/i)).toBeInTheDocument()
    expect(screen.getByText('Get decided business results')).toBeInTheDocument()
    expect(screen.getByText('Save time with qualified assistants')).toBeInTheDocument()
    expect(screen.getByText('Work & Life Balance')).toBeInTheDocument()
    expect(screen.getByText('Quick formulate your all plans')).toBeInTheDocument()
  })

  it('renders the section image', () => {
    render(<WhyChooseUs />)
    const img = screen.getByRole('img', { name: /virtual assistant working/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
