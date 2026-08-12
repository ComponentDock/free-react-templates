import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SOCIALS } from '../data'
import { About } from './About'

describe('About', () => {
  it('renders the black about section with portrait, heading, and paragraphs', () => {
    const { container } = render(<About />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-black')
    expect(screen.getByAltText('Portrait of the photographer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(1)
    expect(screen.getAllByText(/A small river named Duden/)).toHaveLength(1)
  })

  it('renders four circular social buttons with brand icons', () => {
    render(<About />)
    for (const social of SOCIALS) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link.className).toContain('rounded-full')
      expect(link.className).toContain('text-brand')
      expect(link.querySelector('svg path')).toHaveAttribute('d', social.path)
    }
  })
})
