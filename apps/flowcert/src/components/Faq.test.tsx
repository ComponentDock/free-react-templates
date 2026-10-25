import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'
import { faqs } from '../data'

describe('Faq', () => {
  it('renders five collapsed question rows divided by hairlines', () => {
    const { container } = render(<Faq />)

    const toggles = screen.getAllByRole('button')
    expect(toggles).toHaveLength(5)
    expect(toggles.map((toggle) => toggle.getAttribute('aria-expanded'))).toEqual(
      Array.from({ length: 5 }, () => 'false'),
    )
    expect(container.querySelector('.divide-y')).not.toBeNull()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('expands the activated row and rotates its glyph', async () => {
    const user = userEvent.setup()
    const { container } = render(<Faq />)

    await user.click(screen.getByRole('button', { name: faqs[1]!.question }))

    expect(screen.getByRole('button', { name: faqs[1]!.question })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('region')).toHaveTextContent(faqs[1]!.answer)
    expect(container.querySelector('[data-open="true"]')).toHaveClass('rotate-45')
  })

  it('closes the open row when a different one is activated', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: faqs[0]!.question }))
    await user.click(screen.getByRole('button', { name: faqs[2]!.question }))

    expect(screen.getAllByRole('region')).toHaveLength(1)
    expect(screen.getByRole('region')).toHaveTextContent(faqs[2]!.answer)
    expect(screen.getByRole('button', { name: faqs[0]!.question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('collapses the open row when it is activated again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: faqs[0]!.question })
    await user.click(first)
    await user.click(first)

    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })
})
