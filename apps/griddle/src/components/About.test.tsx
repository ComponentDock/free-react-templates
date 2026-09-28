import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT_TEXT } from '../data'

describe('About', () => {
  it('renders the about section', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Burger Bachelor Restaurant/ })).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Burger Bachelor Restaurant/ })).toBeInTheDocument()
  })

  it('displays the about paragraph text', () => {
    render(<About />)
    expect(screen.getByText(ABOUT_TEXT)).toBeInTheDocument()
  })

  it('renders the signature image', () => {
    const { container } = render(<About />)
    const sigImg = container.querySelector('img[alt="Signature"]')
    expect(sigImg).toHaveAttribute('src', 'https://picsum.photos/seed/griddle-signature/200/60')
  })

  it('renders the about photo', () => {
    const { container } = render(<About />)
    const aboutImg = container.querySelector('img[alt="About Griddle restaurant"]')
    expect(aboutImg).toHaveAttribute('src', 'https://picsum.photos/seed/griddle-about/600/400')
  })
})
