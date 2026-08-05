import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurbs, feature list, and screen image', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Work the way you live' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Appson is built for the way you actually work/)).toBeInTheDocument()

    for (const feature of ['Fully Responsive Design', 'Android Platform', 'Strategy Solutions']) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }

    expect(screen.getByRole('img', { name: 'Appson app screen' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/appson-about/500/900',
    )

    expect(screen.getByRole('link', { name: 'Download Now' })).toHaveAttribute('href', '#download')
  })
})
