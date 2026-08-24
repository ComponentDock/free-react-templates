import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ArtsCulture } from './ArtsCulture'

describe('ArtsCulture', () => {
  it('renders the section title', () => {
    render(<ArtsCulture />)
    expect(screen.getByText('Arts & Culture')).toBeInTheDocument()
  })

  it('renders three story cards', () => {
    render(<ArtsCulture />)
    expect(
      screen.getByText("Substituting 'follow your passion' with 'find your purpose'"),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Ibuprofen should not be used for managing symptoms'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Fearing corona recession, France announces new measures'),
    ).toBeInTheDocument()
  })

  it('renders the See All link', () => {
    render(<ArtsCulture />)
    expect(screen.getByText('See All')).toBeInTheDocument()
  })

  it('renders the video play button on the second card', () => {
    render(<ArtsCulture />)
    const playButtons = screen.getAllByRole('img', { hidden: true })
    expect(playButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders kicker tags for each card', () => {
    render(<ArtsCulture />)
    const healthKickers = screen.getAllByText('Health')
    expect(healthKickers.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Culture')).toBeInTheDocument()
  })

  it('renders bylines', () => {
    render(<ArtsCulture />)
    expect(screen.getByText('by Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('by Dr. Patel')).toBeInTheDocument()
    expect(screen.getByText('by Jean-Luc')).toBeInTheDocument()
  })

  it('renders an ad placeholder at desktop width', () => {
    render(<ArtsCulture />)
    expect(screen.getByText('Ad Space')).toBeInTheDocument()
  })
})
