import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the white heading, subtext, and outline-white download button', () => {
    render(<CtaBand />)

    expect(screen.getByRole('heading', { name: 'Create, Enhance and Sustain' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download This Template/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('links the download button to the contact anchor', async () => {
    const user = userEvent.setup()
    render(<CtaBand />)

    const link = screen.getByRole('link', { name: /Download This Template/i })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(link).toHaveAttribute('href', '#contact')
  })
})
