import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders the photo band with gradient overlay and centered copy', () => {
    render(<VideoCta />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Being unique is the preference',
    )
    expect(screen.getByText('Youtube video will appear in popover')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play showreel video' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Sunset over a coastal road' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/alpinora-video'),
    )
  })

  it('opens the video popover from the play link and closes it accessibly', () => {
    render(<VideoCta />)
    fireEvent.click(screen.getByRole('button', { name: 'Play showreel video' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
