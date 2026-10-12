import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DOCK_LABEL, DOCK_URL, SITE_NAME } from '../lib/site'
import { Footer } from './Footer'

describe('Footer', () => {
  it('credits Component Dock through the only external link on the page', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveTextContent(`${SITE_NAME} —`)
    expect(footer).toHaveTextContent(`More templates at ${DOCK_LABEL}`)

    const dock = screen.getByRole('link', { name: DOCK_LABEL })
    expect(dock).toHaveAttribute('href', DOCK_URL)
    expect(dock).toHaveAttribute('target', '_blank')
    expect(dock).toHaveAttribute('rel', 'noreferrer')

    expect(footer.querySelectorAll('a')).toHaveLength(1)
    expect(footer.innerHTML.match(/href="http/g)).toHaveLength(1)

    await user.click(dock)
    expect(dock).toBeInTheDocument()
  })
})
