import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { aboutBlurb, aboutImageAlt, aboutItems, aboutTitle, learnMoreLabel } from '../data'

describe('About', () => {
  it('renders the heading, blurb and learn-more button', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: aboutTitle })).toBeInTheDocument()
    expect(screen.getByText(aboutBlurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: learnMoreLabel })).toBeInTheDocument()
  })

  it('renders the photo and the three icon items', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: aboutImageAlt })).toBeInTheDocument()
    for (const item of aboutItems) {
      expect(screen.getByRole('heading', { level: 5, name: item.title })).toBeInTheDocument()
    }
  })
})
