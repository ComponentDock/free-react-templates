import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavigationsShowcase } from './NavigationsShowcase'

describe('NavigationsShowcase', () => {
  it('renders the four labeled navbar demos', () => {
    const { container } = render(<NavigationsShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Navigations' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary Color navigation' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Info Color navigation' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Danger Color navigation' })).toBeInTheDocument()

    const transparent = screen.getByRole('navigation', { name: 'Transparent navigation' })
    expect(transparent.style.backgroundImage).toContain('picsum.photos/seed/sorbet-navbg')

    expect(screen.getAllByRole('link', { name: 'Discover (current)' })).toHaveLength(4)
    expect(screen.getAllByRole('button', { name: /Menu/ })).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Facebook navigation link' })).toBeInTheDocument()
    expect(container.querySelectorAll('nav[aria-current]')).toHaveLength(0)
  })

  it('opens the info dropdown with its social row and closes it again', async () => {
    render(<NavigationsShowcase />)

    const info = screen.getByRole('navigation', { name: 'Info Color navigation' })
    const trigger = within(info).getByRole('button', { name: /Menu/ })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(within(info).getByText('Dropdown header')).toBeInTheDocument()
    expect(within(info).getByRole('link', { name: 'Action' })).toBeInTheDocument()

    await userEvent.click(trigger)
    expect(within(info).queryByText('Dropdown header')).not.toBeInTheDocument()
  })

  it('opens the danger dropdown with its separated links', async () => {
    render(<NavigationsShowcase />)

    const danger = screen.getByRole('navigation', { name: 'Danger Color navigation' })
    await userEvent.click(within(danger).getByRole('button', { name: /Menu/ }))

    expect(within(danger).getByRole('link', { name: 'Separated link' })).toBeInTheDocument()
    expect(
      within(danger).getByRole('link', { name: 'One more separated link' }),
    ).toBeInTheDocument()
  })

  it('opens the transparent dropdown over its photo backdrop', async () => {
    render(<NavigationsShowcase />)

    const transparent = screen.getByRole('navigation', { name: 'Transparent navigation' })
    await userEvent.click(within(transparent).getByRole('button', { name: /Menu/ }))

    expect(within(transparent).getByText('Dropdown header')).toBeInTheDocument()
    expect(
      within(transparent).queryByRole('link', { name: 'Separated link' }),
    ).not.toBeInTheDocument()
  })
})
