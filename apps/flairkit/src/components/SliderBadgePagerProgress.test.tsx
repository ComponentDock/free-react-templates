import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SliderBadgePagerProgress } from './SliderBadgePagerProgress'

describe('SliderBadgePagerProgress', () => {
  it('renders the six band headings in reference order', () => {
    render(<SliderBadgePagerProgress />)

    expect(
      screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent),
    ).toEqual([
      'Sliders',
      'Default Badges',
      'Pill Badges',
      'Pagination',
      'Progress Bars',
      'Progress Bars with percent',
    ])
  })

  it('renders the range slider and the styled dual-handle track', () => {
    render(<SliderBadgePagerProgress />)

    const slider = screen.getByRole('slider', { name: 'Slider' })

    expect(slider).toHaveAttribute('type', 'range')
    expect(slider).toHaveAttribute('max', '100')
  })

  it('renders eight solid badges and eight pill badges', () => {
    const { container } = render(<SliderBadgePagerProgress />)

    const [solid, pill] = screen.getAllByText('Primary')

    expect(screen.getAllByText('Dark')).toHaveLength(2)
    expect(solid?.className).toContain('bg-flair-primary')
    expect(solid?.className).not.toContain('rounded-full')
    expect(pill?.className).toContain('rounded-full')
    expect(container.querySelectorAll('nav')).toHaveLength(3)
  })

  it('renders the pagination rows in reference order with a filled active page', () => {
    render(<SliderBadgePagerProgress />)

    const navs = screen.getAllByRole('navigation')

    expect(navs.map((nav) => nav.getAttribute('aria-label'))).toEqual([
      'info pagination',
      'primary pagination',
      'secondary pagination',
    ])
    expect(within(navs[0] as HTMLElement).getByRole('button', { name: '1' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(navs[2] as HTMLElement).getByRole('button', { name: '5' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(navs[2] as HTMLElement).getAllByText('...')).toHaveLength(2)
  })

  it('moves the active page with page, previous and next clicks', async () => {
    const user = userEvent.setup()
    render(<SliderBadgePagerProgress />)

    const info = screen.getByRole('navigation', { name: 'info pagination' }) as HTMLElement
    const page = (label: string) => within(info).getByRole('button', { name: label })

    await user.click(page('3'))
    expect(page('3')).toHaveAttribute('aria-current', 'page')

    await user.click(page('Next'))
    expect(page('3')).toHaveAttribute('aria-current', 'page')

    await user.click(page('Previous'))
    await user.click(page('Previous'))
    await user.click(page('Previous'))
    expect(page('1')).toHaveAttribute('aria-current', 'page')

    const secondary = screen.getByRole('navigation', {
      name: 'secondary pagination',
    }) as HTMLElement

    await user.click(within(secondary).getByRole('button', { name: 'Next' }))
    expect(within(secondary).getByRole('button', { name: '6' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await user.click(within(secondary).getByRole('button', { name: 'Previous' }))
    expect(within(secondary).getByRole('button', { name: '5' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('renders the four contextual progress bars plus the labeled percent row', () => {
    render(<SliderBadgePagerProgress />)

    const bars = screen.getAllByRole('progressbar')

    expect(bars.map((bar) => bar.getAttribute('aria-valuenow'))).toEqual([
      '25',
      '50',
      '75',
      '100',
      '94',
    ])
    expect(bars[0]).toHaveClass('bg-flair-success')
    expect(bars[1]).toHaveClass('bg-flair-info')
    expect(bars[2]).toHaveClass('bg-flair-warning')
    expect(bars[3]).toHaveClass('bg-flair-danger')
    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('94%')).toBeInTheDocument()
  })
})
