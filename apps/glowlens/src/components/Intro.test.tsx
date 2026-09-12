import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Intro } from './Intro'
import { introSubtitle, introHeading, introText, introButtonLabel } from '../data'

describe('Intro', () => {
  it('renders the subtitle, heading, paragraph, button, and image', () => {
    render(<Intro />)
    expect(screen.getByText(introSubtitle)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(introHeading)
    expect(screen.getByText(introText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: introButtonLabel })).toHaveAttribute('href', '#about')
    const img = screen.getByRole('img', { name: 'Studio photography' })
    expect(img).toHaveAttribute('src', expect.stringContaining('glowlens-intro'))
  })
})
