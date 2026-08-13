import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SplitBlock } from './SplitBlock'
import { splitBlock } from '../data'

describe('SplitBlock', () => {
  it('renders the heading, both paragraphs, the Read More link, and the image', () => {
    const { container } = render(<SplitBlock />)

    expect(screen.getByRole('heading', { name: splitBlock.title })).toBeInTheDocument()
    for (const paragraph of splitBlock.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /Read More/i })).toHaveAttribute('href', '#about')

    // Photo (decorative -> no img role).
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })

  it('navigates to the about anchor from the Read More link', async () => {
    const user = userEvent.setup()
    render(<SplitBlock />)

    const link = screen.getByRole('link', { name: /Read More/i })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(link).toHaveAttribute('href', '#about')
  })
})
