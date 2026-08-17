import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'
import { steps, videoUrl } from '../data'

describe('HowItWorks', () => {
  it('renders the dark band heading and the video play link', () => {
    render(<HowItWorks />)

    expect(screen.getByText("Let's Find Out")).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument()

    const play = screen.getByRole('link', {
      name: 'Watch how Borough works (opens video)',
    })
    expect(play).toHaveAttribute('href', videoUrl)
    expect(play).toHaveAttribute('target', '_blank')
    expect(play.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/borough-video/1200/600',
    )
  })

  it('renders the four step cards with titles and copy', () => {
    render(<HowItWorks />)
    for (const step of steps) {
      expect(screen.getByRole('heading', { level: 3, name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.copy)).toBeInTheDocument()
    }
  })
})
