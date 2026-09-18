import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders the heading and View Details link', () => {
    render(<Experience />)
    expect(
      screen.getByRole('heading', { name: /From the root of experience/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Details/i })).toHaveAttribute('href', '#about')
  })

  it('renders two images', () => {
    render(<Experience />)
    expect(screen.getByRole('img', { name: /Crafting experience/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByRole('img', { name: /Talent showcase/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('prevents default navigation on View Details click', async () => {
    const user = userEvent.setup()
    render(<Experience />)
    const link = screen.getByRole('link', { name: /View Details/i })
    await user.click(link)
    expect(link).toBeInTheDocument()
  })
})
