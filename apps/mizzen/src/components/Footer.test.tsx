import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'

describe('Footer — the closing band', () => {
  it('carries the page’s own line and the year it renders in', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')

    expect(footer).toHaveTextContent(SITE_NAME)
    expect(footer).toHaveTextContent(FOOTER_NOTE)
    expect(footer).toHaveTextContent(String(new Date().getFullYear()))
  })

  it('credits the dock, from the one link that leaves the page', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: DOCK_LABEL })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(credit).toHaveAttribute('rel', 'noreferrer')
    expect(credit).toHaveAttribute('target', '_blank')

    const anchors = screen.getByTestId('footer').querySelectorAll('a')

    expect(anchors).toHaveLength(1)
  })
})
