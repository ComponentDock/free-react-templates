import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { VideoCta } from './VideoCta'
import { videoCta } from '../data'

describe('VideoCta', () => {
  it('renders the play button with its accessible label', () => {
    render(<VideoCta />)
    expect(screen.getByRole('button', { name: videoCta.playLabel })).toBeInTheDocument()
  })

  it('renders the heading, paragraph, and four check bullets', () => {
    render(<VideoCta />)
    expect(screen.getByRole('heading', { level: 2, name: videoCta.heading })).toBeInTheDocument()
    expect(screen.getByText(videoCta.paragraph)).toBeInTheDocument()
    for (const bullet of videoCta.bullets) {
      expect(screen.getByText(bullet)).toBeInTheDocument()
    }
  })

  it('renders the "Learn More About Us" button', () => {
    render(<VideoCta />)
    expect(screen.getByRole('link', { name: videoCta.ctaLabel })).toBeInTheDocument()
  })

  it('is a presentational control that does not navigate', async () => {
    const user = userEvent.setup()
    render(<VideoCta />)
    await user.click(screen.getByRole('button', { name: videoCta.playLabel }))
    expect(screen.getByRole('button', { name: videoCta.playLabel })).toBeInTheDocument()
  })
})
