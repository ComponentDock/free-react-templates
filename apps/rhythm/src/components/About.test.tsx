import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { aboutCopy } from '../data'

describe('About', () => {
  it('renders the photo, title pair, paragraph and CONTACT ME button', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: 'DJ Rhythm performing live' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/DJ Alexandra Rud/)
    // The giant watermark h1 is decorative and hidden from the a11y tree.
    expect(screen.getByText('About me')).toBeInTheDocument()
    expect(screen.getByText(aboutCopy)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', '#contact')
  })
})
