import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LicenceBar } from './LicenceBar'
import { LICENCE_ITEMS } from '../content'

describe('LicenceBar', () => {
  it('is a 36 px strip on the near-black ground above the header', () => {
    render(<LicenceBar />)
    const bar = document.querySelector('[data-licence-bar]') as HTMLElement
    expect(bar.className).toContain('bg-ink-800')
    expect(bar.className).toContain('border-b')
    expect((bar.firstElementChild as HTMLElement).className).toContain('h-9')
  })

  it('prints the three credential pairs', () => {
    render(<LicenceBar />)
    const items = document.querySelectorAll('[data-licence-item]')
    expect(items).toHaveLength(3)
    LICENCE_ITEMS.forEach((item) => {
      expect(screen.getByText(item.value)).toBeInTheDocument()
    })
  })

  it('keeps only the licence number below sm', () => {
    render(<LicenceBar />)
    const items = document.querySelectorAll('[data-licence-item]')
    expect(items[0]!.className).not.toContain('hidden')
    expect(items[1]!.className).toContain('hidden')
    expect(items[2]!.className).toContain('hidden')
  })
})
