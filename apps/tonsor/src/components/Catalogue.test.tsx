import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Catalogue } from './Catalogue'

describe('Catalogue', () => {
  it('shows the card heading, gold label, style tabs, and gallery link', () => {
    render(<Catalogue />)

    expect(screen.getByText('Shaveing')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Select Your Style' })).toBeInTheDocument()
    for (const tab of ['Hair Cut', 'Shave', 'Beard', 'Wash']) {
      expect(screen.getByRole('button', { name: new RegExp(tab) })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /View Gallery/i })).toBeInTheDocument()
  })

  it('shows the first style description by default', () => {
    render(<Catalogue />)

    expect(screen.getByText(/tailored cut built around your face shape/i)).toBeInTheDocument()
  })

  it('switches the active tab and updates the description', async () => {
    const user = userEvent.setup()
    render(<Catalogue />)

    const shaveTab = screen.getByRole('button', { name: /Shave/ })
    await user.click(shaveTab)

    expect(shaveTab).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText(/hot-towel shave/i)).toBeInTheDocument()
    expect(screen.queryByText(/tailored cut built around your face shape/i)).not.toBeInTheDocument()
  })
})
