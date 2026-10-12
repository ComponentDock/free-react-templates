import { render, screen } from '@testing-library/react'
import { DOCK_URL, SITE_NAME } from '../lib/site'
import { Footer } from './Footer'

describe('Footer', () => {
  it('closes the page with a hairline-topped dark strip and the one Component Dock credit', () => {
    const { container } = render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveClass('border-t', 'border-white/10', 'bg-shell')
    expect(screen.getByText(new RegExp(SITE_NAME))).toBeInTheDocument()

    const outbound = container.querySelectorAll('a[href^="http"]')

    expect(outbound).toHaveLength(1)
    expect(outbound[0]).toHaveAttribute('href', DOCK_URL)
    expect(outbound[0]).toHaveTextContent('Component Dock')
    expect(outbound[0]).toHaveAttribute('target', '_blank')
    expect(outbound[0]).toHaveAttribute('rel', 'noreferrer')

    const year = new Date().getFullYear()

    expect(screen.getByText(/More templates at/)).toHaveTextContent(String(year))
  })
})
