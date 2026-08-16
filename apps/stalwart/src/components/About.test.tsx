import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders inside a red-bordered box with photo, heading and button', () => {
    render(<About />)
    const box = document.querySelector('#about > div > div')
    expect(box).toHaveClass('border-brand')
    expect(
      screen.getByRole('heading', { level: 2, name: /Unique Apartment Formats/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '#contact')
    const image = document.querySelector('img[alt^="Modern apartment"]')
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/stalwart-about'),
    )
  })
})
