import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { aboutDetails } from '../data'

describe('About', () => {
  it('shows the portrait, count-up stat, and Download CV button', () => {
    render(<About />)
    const portrait = screen.getByAltText('Portrait of Alex Rivera')
    expect(portrait).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(screen.getByText('Project complete')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Download CV' })).toBeInTheDocument()
  })

  it('shows the heading, paragraph, and every detail row', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
    for (const row of aboutDetails) {
      expect(screen.getByText(`${row.label}:`)).toBeInTheDocument()
      expect(screen.getByText(row.value)).toBeInTheDocument()
    }
  })
})
