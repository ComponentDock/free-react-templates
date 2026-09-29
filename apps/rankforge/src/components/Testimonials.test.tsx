import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, quote, name, role, and avatar', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Client Say About Us' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
    expect(screen.getByText('Olivia James')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()

    const avatar = screen.getByRole('img', { name: /olivia james/i })
    expect(avatar).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
