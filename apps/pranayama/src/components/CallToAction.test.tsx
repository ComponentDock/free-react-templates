import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the heading', () => {
    render(<CallToAction />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Take a Free Class Now/ }),
    ).toBeInTheDocument()
  })

  it('renders the Join Now button', () => {
    render(<CallToAction />)

    expect(screen.getByRole('button', { name: /Join Now/ })).toBeInTheDocument()
  })

  it('allows clicking the Join Now button', async () => {
    const user = userEvent.setup()
    render(<CallToAction />)

    const button = screen.getByRole('button', { name: /Join Now/ })
    await user.click(button)

    expect(button).toBeInTheDocument()
  })

  it('has a dark parallax background', () => {
    const { container } = render(<CallToAction />)

    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos/seed/pranayama-cta')
  })

  it('has a dark overlay', () => {
    const { container } = render(<CallToAction />)

    const overlay = container.querySelector('.bg-brand\\/80')
    expect(overlay).toBeInTheDocument()
  })
})
