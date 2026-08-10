import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SiteButton } from './SiteButton'

describe('SiteButton', () => {
  it('renders a link with the magenta offset shadow and an arrow', () => {
    const { container } = render(
      <SiteButton as="link" href="#news">
        Read More
      </SiteButton>,
    )
    const link = screen.getByRole('link', { name: /Read More/ })
    expect(link).toHaveAttribute('href', '#news')
    expect(link).toHaveClass('site-btn')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders a submit button without an arrow when requested', () => {
    const { container } = render(
      <SiteButton type="submit" withArrow={false}>
        subscribe
      </SiteButton>,
    )
    const button = screen.getByRole('button', { name: 'subscribe' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('fires onClick on the button', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<SiteButton onClick={onClick}>click me</SiteButton>)
    await user.click(screen.getByRole('button', { name: /click me/ }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
