import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT_EYEBROW, ABOUT_PARAGRAPHS, ABOUT_TITLE } from '../data'

describe('About', () => {
  it('renders the eyebrow label, heading, and both paragraphs', () => {
    render(<About />)

    expect(screen.getByText(ABOUT_EYEBROW)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: ABOUT_TITLE })).toBeInTheDocument()
    for (const paragraph of ABOUT_PARAGRAPHS) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })

  it('renders the image with the accent panel and the learn-more button', () => {
    const { container } = render(<About />)

    expect(screen.getByAltText('Cargoly warehouse operations')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/cargoly-about/600/450',
    )
    expect(container.querySelector('.border-lavender')).not.toBeNull()
    expect(screen.getByRole('link', { name: /learn more/ })).toBeInTheDocument()
  })
})
