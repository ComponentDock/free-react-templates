import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the section heading and the coral email link with underline', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: 'HOW WE MAKE USER EXPERIENCES' }),
    ).toBeInTheDocument()
    const email = screen.getByRole('link', { name: 'hire@exposure.example' })
    expect(email).toHaveAttribute('href', 'mailto:hire@exposure.example')
    expect(email.className).toContain('after:w-[144px]')
  })

  it('renders the Dali quote, attribution and experience stat', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: "You can't use up creativity. The more you use, the more you have in your signifant mind.",
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('SALVADOR DALI')).toBeInTheDocument()
    expect(screen.getByText('Digital Artisit')).toBeInTheDocument()
    expect(screen.getByText('05')).toBeInTheDocument()
    expect(screen.getByText(/YEARS OF/)).toBeInTheDocument()
    expect(screen.getByText(/DIGITAL EXPERIENCE/)).toBeInTheDocument()
  })
})
