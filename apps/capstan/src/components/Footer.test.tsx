import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { DOCK_LABEL, DOCK_URL, SITE_NAME } from '../lib/site'

describe('Footer — the closing strip crediting Component Dock', () => {
  it('links Component Dock once, in a new tab, beside a computed year', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')
    const credits = screen.getAllByRole('link')

    expect(credits).toHaveLength(1)

    const credit = credits[0]!

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit).toHaveAttribute('rel', 'noreferrer')
    expect(credit).toHaveTextContent(DOCK_LABEL)
    expect(footer).toHaveTextContent(SITE_NAME)
    expect(footer).toHaveTextContent(String(new Date().getFullYear()))
  })
})
