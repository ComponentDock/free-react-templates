import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four widgets on the dark ground', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-foot')

    const headings = screen.getAllByRole('heading', { level: 6 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'About Us',
      'Newsletter',
      'Instragram Feed',
      'Follow Us',
    ])

    expect(screen.getByText('Stay update with our latest')).toBeInTheDocument()
    expect(screen.getByText('Let us be social')).toBeInTheDocument()
  })

  it('renders the eighth-thumbnail feed grid in four columns', () => {
    const { container } = render(<Footer />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(8)
    images.forEach((image, index) => {
      expect(image.getAttribute('src')).toContain(
        `picsum.photos/seed/wanderport-insta-${index + 1}`,
      )
    })
    expect(images[0]!.closest('ul')?.className).toContain('grid-cols-4')
  })

  it('carries the social marks and the newsletter submit', () => {
    render(<Footer />)

    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', '#contact')
      expect(link.className).toContain('text-[#cccccc]')
    }

    const newsletter = screen.getByRole('form', { name: 'Newsletter' })
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
    expect(fireEvent.submit(newsletter)).toBe(false)

    const subscribe = screen.getByRole('button', { name: 'Subscribe' })
    expect(subscribe).toHaveAttribute('type', 'submit')
    expect(subscribe.className).toContain('brand-gradient')
  })

  it('credits Component Dock in the aqua bottom line', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit).toHaveAttribute('rel', 'noopener noreferrer')
    expect(credit.className).toContain('text-aqua')

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
