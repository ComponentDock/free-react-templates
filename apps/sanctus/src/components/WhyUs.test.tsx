import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyUs } from './WhyUs'
import { whyUs } from '../data'

describe('WhyUs', () => {
  it('renders the section header and four feature blocks', () => {
    render(<WhyUs />)
    expect(screen.getByText(whyUs.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: whyUs.heading })).toBeInTheDocument()
    expect(screen.getByText(whyUs.paragraph)).toBeInTheDocument()
    for (const feature of whyUs.features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
      expect(screen.getByText(feature.copy)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: whyUs.ctaLabel })).toBeInTheDocument()
  })

  it('shows the video-bg image with a play icon', () => {
    render(<WhyUs />)
    const image = screen.getByRole('img', { name: whyUs.imageAlt })
    expect(image).toHaveAttribute('src', whyUs.image)
    expect(screen.getByRole('button', { name: whyUs.playLabel })).toBeInTheDocument()
  })
})
