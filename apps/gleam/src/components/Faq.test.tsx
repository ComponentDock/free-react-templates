import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all five questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /How long does a typical cleaning take/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /What cleaning products do you use/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /What is included in a standard cleaning/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Are your cleaners insured and bonded/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Can I reschedule or cancel a cleaning/ }),
    ).toBeInTheDocument()
  })

  it('opens the first question by default', () => {
    render(<Faq />)

    const first = screen.getByRole('button', { name: /How long does a typical cleaning take/ })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/typically takes 2-3 hours/)).toBeInTheDocument()
  })

  it('expands and collapses questions on click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: /How long does a typical cleaning take/ })
    const second = screen.getByRole('button', { name: /What cleaning products do you use/ })

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('faq-panel-1')).not.toHaveClass('hidden')
    expect(document.getElementById('faq-panel-0')).toHaveClass('hidden')
    expect(screen.getByText(/EPA-certified, eco-friendly/)).toBeInTheDocument()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('faq-panel-1')).toHaveClass('hidden')
  })
})
