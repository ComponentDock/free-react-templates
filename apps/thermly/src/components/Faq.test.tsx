import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'
import { faqs } from '../data'

describe('Faq', () => {
  it('renders five collapsed questions', () => {
    render(<Faq />)

    expect(screen.getAllByRole('button')).toHaveLength(5)
    for (const faq of faqs) {
      expect(screen.getByRole('button', { name: faq.question })).toHaveAttribute(
        'aria-expanded',
        'false',
      )
    }
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('expands one answer and swaps the glyph', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: faqs[0].question })
    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first.querySelector('[data-icon="minus"]')).toBeInTheDocument()
    expect(screen.getByRole('region')).toHaveTextContent(faqs[0].answer)
  })

  it('keeps several answers open at once and closes them independently', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: faqs[0].question }))
    await user.click(screen.getByRole('button', { name: faqs[1].question }))

    expect(screen.getAllByRole('region')).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: faqs[0].question }))

    expect(screen.getAllByRole('region')).toHaveLength(1)
    expect(screen.getByRole('button', { name: faqs[0].question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(
      screen.getByRole('button', { name: faqs[0].question }).querySelector('[data-icon="plus"]'),
    ).toBeInTheDocument()
  })
})
