import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four light-grey widgets with the turquoise social circles', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer')!
    expect(footer.className).toContain('bg-panel')
    expect(footer.className).toContain('text-muted')
    expect(footer).toHaveAttribute('id', 'contact')

    for (const heading of ['About Trekvoyage', 'Pages', 'Resources', 'Contact']) {
      expect(screen.getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }

    for (const social of ['Twitter', 'Instagram']) {
      const link = screen.getByRole('link', { name: social })
      expect(link.className).toContain('bg-brand')
      expect(link.className).toContain('social-shadow')
      expect(link.querySelector('svg')).not.toBeNull()
    }

    expect(screen.getByRole('link', { name: 'hello@trekvoyage.example' })).toHaveAttribute(
      'href',
      'mailto:hello@trekvoyage.example',
    )
    expect(screen.getByRole('link', { name: '+1 222 212 3819' })).toHaveAttribute(
      'href',
      'tel:+12222123819',
    )
    expect(screen.getByText('43 Raymouth Rd. Baltemoer, London 3910')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Terms' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy' })).toBeInTheDocument()
  })

  it('credits Component Dock as the only external link', () => {
    const { container } = render(<Footer />)

    const external = [...container.querySelectorAll('a')].filter((link) =>
      link.getAttribute('href')?.startsWith('http'),
    )
    expect(external).toHaveLength(1)
    expect(external[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(external[0]).toHaveTextContent('Component Dock')
    expect(external[0]).toHaveAttribute('rel', 'noopener noreferrer')

    expect(container.textContent).toContain('made with')
  })
})
