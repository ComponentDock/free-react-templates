import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the heading, image, copy, and action button', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('We care your pet')
    expect(screen.getByText(/Working alongside animal welfare charities/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '#services')

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image?.getAttribute('alt')).toMatch(/happy dog/)
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/leopet-about/)
  })
})
