import { render, screen } from '@testing-library/react'
import { DOCK_URL, FOOTER_NOTE } from '../lib/site'
import { Footer } from './Footer'

describe('Footer', () => {
  it('closes the page with the wordmark line and the Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toHaveTextContent(`Menuribbon — ${FOOTER_NOTE}`)

    const dock = screen.getByRole('link', { name: 'Component Dock' })

    expect(dock).toHaveAttribute('href', DOCK_URL)
    expect(dock).toHaveAttribute('target', '_blank')
    expect(dock).toHaveAttribute('rel', 'noreferrer')
    expect(dock).toHaveClass('text-accent', 'font-semibold', 'underline')
    expect(screen.getByRole('contentinfo')).toHaveTextContent('More templates at Component Dock')
  })
})
