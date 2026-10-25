import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Availability, StickyCall } from '../components/Closing'
import { Footer } from '../components/Footer'
import { availability, contact, footer } from '../content'

describe('Availability', () => {
  it('closes the page with the pulsing dot and the white pill CTA', () => {
    const { container } = render(<Availability />)

    const band = container.querySelector('#availability')
    expect(band).toHaveClass('bg-primary-600', 'text-white')

    expect(screen.getByText(availability.label)).toHaveClass('uppercase', 'opacity-90')
    expect(screen.getByText(availability.line)).toHaveClass('text-lg', 'font-bold')
    expect(screen.getByRole('link', { name: contact.phone })).toHaveClass(
      'rounded-full',
      'bg-white',
      'text-primary-700',
    )
    expect(container.querySelector('.animate-ping')).not.toBeNull()
  })
})

describe('StickyCall', () => {
  it('is a fixed mobile bar, hidden from 1024 up', () => {
    render(<StickyCall />)

    const bar = screen.getByText(availability.sticky).closest('div')
    expect(bar).toHaveClass('fixed', 'inset-x-0', 'bottom-0', 'lg:hidden')
    expect(screen.getByRole('link', { name: availability.sticky })).toHaveClass(
      'rounded-full',
      'bg-primary-600',
    )
  })
})

describe('Footer', () => {
  it('ends the document with the phone, the legal links and Component Dock', () => {
    render(<Footer />)

    const footerElement = screen.getByRole('contentinfo')
    expect(footerElement).toHaveClass('border-t', 'py-10')

    expect(screen.getByText(footer.copyright).parentElement).toHaveClass(
      'text-sm',
      'text-ink-400',
    )
    expect(screen.getByText(footer.notice)).toHaveClass('text-xs', 'text-ink-300')

    const dock = screen.getByRole('link', { name: footer.more })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('rel', 'noreferrer noopener')

    expect(screen.getByRole('link', { name: footer.privacy })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.terms })).toBeInTheDocument()
  })
})
