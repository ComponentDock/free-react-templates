import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME, TOP_TARGET } from '../lib/site'
import { footerClass, footerLinkClass, footerRowClass, footerTextClass } from '../lib/styles'

describe('Footer — the strip at the foot of the page', () => {
  it('credits the dock and walks back to the top', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')

    expect(footer.tagName).toBe('FOOTER')
    expect(footer.className).toBe(footerClass)

    const row = footer.firstElementChild

    expect(row?.className).toBe(footerRowClass)
    expect(row?.className).toContain('justify-between')

    const credit = screen.getByRole('link', { name: DOCK_LABEL })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(credit).toHaveAttribute('rel', 'noreferrer')
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit.className).toBe(footerLinkClass)

    const top = screen.getByRole('link', { name: 'Back to the top' })

    expect(top).toHaveAttribute('href', TOP_TARGET)
    expect(top.className).toBe(footerLinkClass)

    expect(footer).toHaveTextContent(FOOTER_NOTE)
    expect(footer).toHaveTextContent(SITE_NAME)
    expect(footer).toHaveTextContent(String(new Date().getFullYear()))
    expect(Array.from(footer.querySelectorAll('p')).map((line) => line.className)).toEqual([
      footerTextClass,
      footerTextClass,
    ])

    expect(footer.querySelectorAll('a')).toHaveLength(2)
  })
})
