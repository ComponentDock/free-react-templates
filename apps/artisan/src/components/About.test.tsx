import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the photo, heading, paragraphs and both buttons', () => {
    const { container } = render(<About />)
    expect(screen.getByRole('heading', { name: 'About Myself' })).toBeInTheDocument()
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('alt', 'About Kenedy Jackson')
    expect(screen.getByRole('link', { name: 'More Info' })).toHaveAttribute('href', '#portfolio')
    const resume = screen.getByRole('link', { name: 'Resume' })
    expect(resume).toHaveAttribute('href', '#contact')
    expect(resume.className).toContain('bg-brand')
  })
})
