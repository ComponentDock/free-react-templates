import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatWeDo } from './WhatWeDo'

describe('WhatWeDo', () => {
  it('renders the section label and heading', () => {
    render(<WhatWeDo />)

    expect(screen.getByText('What We do')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /The technology for the future generation/,
      }),
    ).toBeInTheDocument()
  })

  it('renders three feature cards with images and Learn More links', () => {
    render(<WhatWeDo />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)

    const learnMoreLinks = screen.getAllByRole('link', { name: 'Learn More' })
    expect(learnMoreLinks.length).toBe(3)
  })

  it('renders the subtitle paragraph', () => {
    render(<WhatWeDo />)

    expect(screen.getByText(/Reiciendis provident eius ratione/)).toBeInTheDocument()
  })
})
