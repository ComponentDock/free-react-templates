import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'

describe('Footer — the closing strip', () => {
  it('credits the yard’s own site, once, in a new tab', () => {
    const { container } = render(<Footer />)

    const outgoing = Array.from(container.querySelectorAll('a'))

    expect(outgoing).toHaveLength(1)
    expect(outgoing[0]).toHaveAttribute('href', DOCK_URL)
    expect(outgoing[0]).toHaveAttribute('target', '_blank')
    expect(outgoing[0]).toHaveAttribute('rel', 'noreferrer')
    expect(screen.getByRole('link', { name: DOCK_LABEL })).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toHaveTextContent(`${SITE_NAME} — ${FOOTER_NOTE}`)
  })

  it('writes the year as it renders', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer')).toHaveTextContent(String(new Date().getFullYear()))
  })
})
