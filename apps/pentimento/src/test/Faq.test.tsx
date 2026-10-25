import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { installMedia } from './helpers'

describe('Faq', () => {
  it('lists the five questions under a sans heading', () => {
    installMedia({ reduce: false })
    render(<Faq />)

    expect(screen.getByText('Practical questions')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2, name: 'Before you write' })
    expect(heading).toHaveClass('font-sans', 'font-bold')
    expect(screen.getAllByRole('button')).toHaveLength(5)
    expect(screen.getByRole('button', { name: /Are prices negotiable/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens one answer at a time and closes it again', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    render(<Faq />)

    const first = screen.getByRole('button', { name: /Are prices negotiable/ })
    const second = screen.getByRole('button', { name: /Do works come framed/ })

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: /Are prices negotiable/ })).toHaveClass(
      'grid-rows-[1fr]',
    )
    expect(screen.getByText(/Studio prices are not\./)).toBeInTheDocument()

    await user.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('region', { name: /Do works come framed/ })).toHaveClass(
      'grid-rows-[0fr]',
    )
  })

  it('keeps the refusal lines intact', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: /Do you sell prints/ }))
    expect(
      screen.getByText(/a print of one is a photograph of a texture rather than the thing itself/),
    ).toBeInTheDocument()
  })
})
