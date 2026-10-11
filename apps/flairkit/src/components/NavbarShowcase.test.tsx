import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavbarShowcase } from './NavbarShowcase'

function bar(theme: string) {
  return screen.getByRole('navigation', { name: `${theme} navbar example` }) as HTMLElement
}

describe('NavbarShowcase', () => {
  it('renders the six demo bars in reference order', () => {
    render(<NavbarShowcase />)

    expect(screen.getAllByRole('navigation').map((nav) => nav.getAttribute('aria-label'))).toEqual([
      'primary navbar example',
      'success navbar example',
      'info navbar example',
      'danger navbar example',
      'secondary navbar example',
      'transparent navbar example',
    ])
  })

  it('renders the plain bars with brand, links and a dropdown link', () => {
    render(<NavbarShowcase />)

    const primary = bar('primary')

    expect(within(primary).getByRole('link', { name: 'Brand' })).toBeInTheDocument()
    expect(within(primary).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(primary).getByRole('button', { name: 'Dropdown link' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens and closes a dropdown with React state', async () => {
    const user = userEvent.setup()
    render(<NavbarShowcase />)

    const toggle = within(bar('primary')).getByRole('button', { name: 'Dropdown link' })

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Action' })).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Another action' })).toBeInTheDocument()

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Action' })).not.toBeInTheDocument()
  })

  it('renders the expanded bar with a current item, divider and disabled link', () => {
    render(<NavbarShowcase />)

    const success = bar('success')

    expect(within(success).getByRole('link', { name: /Home/ })).toHaveClass('bg-white/20')
    expect(within(success).getByRole('link', { name: 'Disabled' })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
    expect(within(success).getByLabelText('Search')).toHaveAttribute('type', 'search')
  })

  it('opens the expanded bar dropdown with its divider', async () => {
    const user = userEvent.setup()
    const { container } = render(<NavbarShowcase />)

    await user.click(within(bar('success')).getByRole('button', { name: 'Dropdown' }))

    expect(screen.getByRole('link', { name: 'Something else here' })).toBeInTheDocument()
    expect(container.querySelector('span.my-1.bg-gray-200')).not.toBeNull()
  })

  it('submits the demo search form without navigating', async () => {
    const user = userEvent.setup()
    render(<NavbarShowcase />)

    await user.click(within(bar('success')).getByRole('button', { name: 'Submit search' }))

    expect(screen.getByLabelText('Search')).toHaveValue('')
  })

  it('renders the icon bars over a photo band with uppercase items', () => {
    const { container } = render(<NavbarShowcase />)

    const photoBand = container.querySelector('[style*="flairkit-navbar"]')

    expect(photoBand?.className).toContain('min-h-[80vh]')
    expect(
      within(bar('transparent')).getByRole('link', { name: 'Transparent' }),
    ).toBeInTheDocument()
    expect(within(bar('info')).getByRole('link', { name: 'Features' }).className).toContain(
      'uppercase',
    )
    expect(photoBand?.querySelectorAll('nav')).toHaveLength(2)
  })
})
