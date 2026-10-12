import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'

describe('Footer — the closing strip', () => {
  it('carries the page’s own line and a year computed as it renders', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')

    expect(footer.tagName).toBe('FOOTER')
    expect(footer).toHaveTextContent(SITE_NAME)
    expect(footer).toHaveTextContent(FOOTER_NOTE)
    expect(footer).toHaveTextContent(String(new Date().getFullYear()))
  })

  it('credits the dock with the one link that leaves the page', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: DOCK_LABEL })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit).toHaveAttribute('rel', 'noreferrer')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })
})
