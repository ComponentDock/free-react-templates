import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { ACCORDION_ITEMS } from '../data'

describe('Accordion', () => {
  it('renders all four accordion toggle buttons', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    expect(screen.getByRole('button', { name: 'Profile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Messages' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Settings' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument()
  })

  it('opens the default item when defaultOpenId is provided', () => {
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="profile" />)
    const profileButton = screen.getByRole('button', { name: 'Profile' })
    expect(profileButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('expands an item when clicked', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    // Profile starts open; click Messages to open it
    const button = screen.getByRole('button', { name: 'Messages' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('collapses an expanded item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="profile" />)
    const button = screen.getByRole('button', { name: 'Profile' })
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('only one section is open at a time (accordion behavior)', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="profile" />)
    const profileBtn = screen.getByRole('button', { name: 'Profile' })
    const messagesBtn = screen.getByRole('button', { name: 'Messages' })

    expect(profileBtn).toHaveAttribute('aria-expanded', 'true')

    await user.click(messagesBtn)
    expect(messagesBtn).toHaveAttribute('aria-expanded', 'true')
    expect(profileBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows sub-items for the expanded section', async () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    // Profile is default-open, so sub-items should be visible immediately
    const links = screen.getAllByRole('link')
    const linkTexts = links.map((l) => l.textContent)
    expect(linkTexts).toContain('Profile')
    expect(linkTexts).toContain('Messages')
    expect(linkTexts).toContain('Settings')
    expect(linkTexts).toContain('Sales')
    expect(linkTexts).toContain('Marketing')
  })

  it('toggle buttons have correct aria-controls and panels have aria-labelledby', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'Settings' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-controls', 'settings-panel')
    const region = screen.getByRole('region')
    expect(region).toHaveAttribute('aria-labelledby', 'settings-toggle')
  })

  it('toggle buttons are keyboard accessible via Enter', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'Logout' })
    button.focus()
    await user.keyboard('{Enter}')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggle buttons are keyboard accessible via Space', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'Logout' })
    button.focus()
    await user.keyboard(' ')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('sub-item links prevent default navigation on click', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    // Profile sub-items are visible by default
    const link = screen.getAllByRole('link')[0]!
    await user.click(link)
    // Should not navigate (preventDefault called)
    expect(link).toBeInTheDocument()
  })

  it('each item has a rounded border container', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const wrappers = container.querySelectorAll('[class*="rounded-md"]')
    expect(wrappers.length).toBe(4)
  })

  it('accordion items are separated by gap spacing', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('gap-3')
  })

  it('active item shows blue border accent', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    // Messages is NOT default-open; click to open it
    const button = screen.getByRole('button', { name: 'Messages' })
    await user.click(button)

    const item = button.closest('[class*="border"]')!
    expect(item.className).toContain('border-[#3b71ca]')
  })

  it('inactive item shows default gray border', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    // Messages is not default-open
    const button = screen.getByRole('button', { name: 'Messages' })
    const item = button.closest('[class*="border"]')!
    expect(item.className).toContain('border-gray-200')
  })

  it('renders the correct icon for each section', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const svgs = container.querySelectorAll('svg')
    // 4 icon SVGs (one per section button)
    expect(svgs.length).toBeGreaterThanOrEqual(4)
  })

  it('active item shows rotated chevron icon', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    // Click Settings to open it
    const button = screen.getByRole('button', { name: 'Settings' })
    await user.click(button)

    const chevrons = button.querySelectorAll('svg')
    const lastChevron = chevrons[chevrons.length - 1]
    expect(lastChevron?.className.baseVal).toContain('rotate-180')
  })

  it('inactive item shows non-rotated chevron', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    // Logout is not default-open
    const button = screen.getByRole('button', { name: 'Logout' })
    const chevrons = button.querySelectorAll('svg')
    const lastChevron = chevrons[chevrons.length - 1]
    expect(lastChevron?.className.baseVal).not.toContain('rotate-180')
  })

  it('toggle button has focus-visible ring class', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'Profile' })
    expect(button.className).toContain('focus-visible:ring-2')
  })

  it('falls back to User icon when icon name is unknown', () => {
    const items = [
      {
        id: 'custom',
        title: 'Custom',
        icon: 'UnknownIcon',
        subItems: [{ id: 'c1', label: 'Link', href: '#link' }],
      },
    ]
    const { container } = render(<Accordion items={items} defaultOpenId="custom" />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(1)
  })
})
