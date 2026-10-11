import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonsShowcase } from './ButtonsShowcase'

const SUB_GROUPS = [
  'Pick your style',
  'Pick your size',
  'Pick your color',
  'Links',
  'Disabled Buttons',
  'Buttons with Dropdown',
  'Block Level Buttons',
]

describe('ButtonsShowcase', () => {
  it('renders every button sub-group', () => {
    const { container } = render(<ButtonsShowcase />)

    expect(container.querySelector('section')!.id).toBe('buttons')
    expect(screen.getByRole('heading', { level: 2, name: 'Buttons' })).toBeInTheDocument()
    for (const group of SUB_GROUPS) {
      expect(screen.getByRole('heading', { name: group })).toBeInTheDocument()
    }
  })

  it('renders the style, size, color, link and block variants', () => {
    render(<ButtonsShowcase />)

    expect(screen.getByRole('button', { name: 'Default' }).className).toContain('bg-primary-600')
    expect(screen.getByRole('button', { name: 'Round' }).className).toContain('rounded-full')
    expect(screen.getByRole('button', { name: 'With Icon' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Simple' }).className).toContain('shadow-none')

    expect(screen.getAllByRole('button', { name: 'Small Size' })).toHaveLength(2)
    expect(screen.getAllByRole('button', { name: 'Large Size' })).toHaveLength(2)
    expect(screen.getAllByRole('button', { name: 'Primary' })).toHaveLength(2)
    expect(screen.getAllByRole('button', { name: 'Dark' })).toHaveLength(2)

    const linksGroup = screen.getByRole('heading', { name: 'Links' })
      .nextElementSibling as HTMLElement
    expect(within(linksGroup).getAllByRole('button')).toHaveLength(7)

    expect(screen.getByRole('button', { name: 'Block Level info' }).className).toContain('w-full')
    expect(screen.getByRole('button', { name: 'Link' })).toBeDisabled()
    const disabled = screen
      .getAllByRole('button')
      .filter((button) => button.hasAttribute('disabled'))
    expect(disabled).toHaveLength(2)
  })

  it('toggles the row dropdowns', async () => {
    render(<ButtonsShowcase />)

    const dropdowns = screen.getAllByRole('button', { name: /Dropdown button/ })
    expect(dropdowns).toHaveLength(3)
    expect(dropdowns[0]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Action' })).not.toBeInTheDocument()

    await userEvent.click(dropdowns[0]!)
    expect(dropdowns[0]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Action' })).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Something else here' })).toHaveAttribute(
      'href',
      '#buttons',
    )

    await userEvent.click(dropdowns[1]!)
    expect(dropdowns[0]).toHaveAttribute('aria-expanded', 'false')
    expect(dropdowns[1]).toHaveAttribute('aria-expanded', 'true')

    await userEvent.click(dropdowns[1]!)
    expect(screen.queryByRole('link', { name: 'Action' })).not.toBeInTheDocument()
  })
})
