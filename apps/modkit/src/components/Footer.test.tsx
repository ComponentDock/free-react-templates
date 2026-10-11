import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links Component Dock in a light centered band with the heart glyph', () => {
    const { container } = render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-band')
    expect(footer.className).toContain('py-28')

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')

    expect(footer.textContent).toContain(
      `Copyright © ${new Date().getFullYear()} All rights reserved | Made with`,
    )
    expect(container.querySelector('.lucide-heart')).not.toBeNull()
  })
})
