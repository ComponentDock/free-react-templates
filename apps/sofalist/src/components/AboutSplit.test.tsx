import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSplit } from './AboutSplit'
import { ABOUT_SPLIT } from '../data'

describe('AboutSplit', () => {
  it('renders the heading, paragraph, and Watch Video link', () => {
    render(<AboutSplit />)
    expect(screen.getByRole('heading', { name: ABOUT_SPLIT.heading })).toBeInTheDocument()
    expect(screen.getByText(ABOUT_SPLIT.text)).toBeInTheDocument()
    const video = screen.getByRole('link', { name: ABOUT_SPLIT.videoLabel })
    expect(video).toHaveAttribute('href', ABOUT_SPLIT.videoUrl)
    expect(video).toHaveAttribute('target', '_blank')
  })
})
