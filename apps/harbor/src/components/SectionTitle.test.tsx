import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders a centered ink title with the zig-zag accent', () => {
    render(<SectionTitle>Choose the right hosting solution</SectionTitle>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Choose the right hosting solution')
    expect(heading.className).toContain('text-[#111]')
    const wrapper = heading.parentElement as HTMLElement
    expect(wrapper.className).toContain('text-center')
    expect(wrapper.querySelector('svg')).toHaveClass('mx-auto')
  })

  it('supports a left aligned title for the pricing band', () => {
    render(<SectionTitle align="left">Choose your plan</SectionTitle>)
    const wrapper = screen.getByRole('heading', { level: 2 }).parentElement as HTMLElement
    expect(wrapper.className).toContain('text-left')
    expect(wrapper.querySelector('svg')).not.toHaveClass('mx-auto')
  })

  it('renders white type on the dark bands and accepts extra classes', () => {
    render(
      <SectionTitle tone="light" className="mb-0">
        How to build your website online today?
      </SectionTitle>,
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.className).toContain('text-white')
    const wrapper = heading.parentElement as HTMLElement
    expect(wrapper.className).toContain('mb-0')
  })
})
