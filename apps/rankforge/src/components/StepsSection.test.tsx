import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepsSection } from './StepsSection'

describe('StepsSection', () => {
  it('renders the heading, description, Contact Us button, and image', () => {
    render(<StepsSection />)

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading.textContent).toMatch(/We Create a Steps/)

    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()

    const image = screen.getByRole('img', { name: /digital product/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
