import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { ButtonsShowcase } from './ButtonsShowcase'

function row(label: string) {
  return screen.getByRole('heading', { level: 3, name: label }).parentElement as HTMLElement
}

describe('ButtonsShowcase', () => {
  it('renders the band heading and label rows in reference order', () => {
    render(<ButtonsShowcase />)

    expect(
      screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent),
    ).toEqual(['Buttons', 'Style', 'Sizes', 'Colors', 'Outline', 'Outline Style 2'])
  })

  it('renders the style row with a pill button and a heart fab', () => {
    render(<ButtonsShowcase />)

    const styleRow = row('Style')
    const buttons = within(styleRow).getAllByRole('button')

    expect(buttons.map((button) => button.textContent)).toEqual(['Default', 'Rounded', ''])
    expect(buttons[0]?.className).toContain('bg-flair-primary')
    expect(buttons[1]?.className).toContain('rounded-full')
    expect(buttons[2]?.className).toContain('rounded-full')
    expect(within(styleRow).getByRole('button', { name: 'Favourite' })).toBeInTheDocument()
  })

  it('renders the three reference sizes', () => {
    render(<ButtonsShowcase />)

    const sizes = within(row('Sizes')).getAllByRole('button')

    expect(sizes.map((button) => button.textContent)).toEqual(['Small', 'Regular', 'Large'])
    expect(sizes[0]?.className).toContain('text-[12px]')
    expect(sizes[1]?.className).toContain('text-[14px]')
    expect(sizes[2]?.className).toContain('text-[16px]')
  })

  it('renders nine solid colors including the link variant', () => {
    render(<ButtonsShowcase />)

    const colors = within(row('Colors')).getAllByRole('button')

    expect(colors.map((button) => button.textContent)).toEqual([
      'Primary',
      'Secondary',
      'Success',
      'Danger',
      'Warning',
      'Info',
      'Light',
      'Dark',
      'Link',
    ])
    expect(colors[0]?.className).toContain('bg-flair-primary')
    expect(colors[8]?.className).toContain('bg-transparent')
  })

  it('renders eight outlines with only the primary one pilled', () => {
    render(<ButtonsShowcase />)

    const outlines = within(row('Outline')).getAllByRole('button')

    expect(outlines).toHaveLength(8)
    expect(outlines[0]?.className).toContain('rounded-full')
    expect(outlines[1]?.className).toContain('rounded')
    expect(outlines[1]?.className).not.toContain('rounded-full')
    expect(outlines[0]?.className).not.toContain('border-2')
  })

  it('renders the thick-outline row', () => {
    render(<ButtonsShowcase />)

    const outlines = within(row('Outline Style 2')).getAllByRole('button')

    expect(outlines).toHaveLength(8)
    expect(outlines.every((button) => button.className.includes('border-2'))).toBe(true)
    expect(outlines[0]?.className).toContain('rounded-full')
  })

  it('marks the band as the anchored light section', () => {
    const { container } = render(<ButtonsShowcase />)

    const section = container.querySelector('section')

    expect(section).toHaveAttribute('id', 'start')
    expect(section?.className).toContain('bg-band')
  })
})
