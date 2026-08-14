import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { LatestSermon } from './LatestSermon'

describe('LatestSermon', () => {
  it('shows the centered heading with a gold underline accent', () => {
    render(<LatestSermon />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Latest Sermon' })
    expect(heading.querySelectorAll('.bg-accent')).toHaveLength(2)
  })

  it('shows the featured sermon line with the pastor name', () => {
    render(<LatestSermon />)
    expect(screen.getByText('“Thy Kingdom Come”', { selector: 'span' })).toBeInTheDocument()
    expect(screen.getByText('by Pastor Edward Cane')).toBeInTheDocument()
  })

  it('toggles the audio player between play and pause', async () => {
    const user = userEvent.setup()
    render(<LatestSermon />)
    const play = screen.getByRole('button', { name: 'Play sermon audio' })
    expect(screen.getByRole('progressbar', { name: 'Sermon progress' })).toHaveAttribute(
      'aria-valuenow',
      '0',
    )
    await user.click(play)
    expect(screen.getByRole('button', { name: 'Pause sermon audio' })).toBeInTheDocument()
    expect(screen.getByRole('progressbar', { name: 'Sermon progress' })).toHaveAttribute(
      'aria-valuenow',
      '35',
    )
    await user.click(screen.getByRole('button', { name: 'Pause sermon audio' }))
    expect(screen.getByRole('button', { name: 'Play sermon audio' })).toBeInTheDocument()
  })
})
