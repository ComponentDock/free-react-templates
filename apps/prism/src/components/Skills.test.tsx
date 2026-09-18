import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the skills heading and all 4 progress bars', () => {
    render(<Skills />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Tools Expertness' }),
    ).toBeInTheDocument()

    expect(screen.getByText('Adobe Photoshop CC')).toBeInTheDocument()
    expect(screen.getByText('Adobe Illustrator CC')).toBeInTheDocument()
    expect(screen.getByText('Adobe InDesign CC')).toBeInTheDocument()
    expect(screen.getByText('Adobe After Effects CC')).toBeInTheDocument()

    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(4)
    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '70')
    expect(progressBars[1]).toHaveAttribute('aria-valuenow', '60')
    expect(progressBars[2]).toHaveAttribute('aria-valuenow', '50')
    expect(progressBars[3]).toHaveAttribute('aria-valuenow', '40')
  })

  it('renders the View More link', () => {
    render(<Skills />)
    expect(screen.getByRole('link', { name: /View More/i })).toBeInTheDocument()
  })
})
