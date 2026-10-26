import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { NotificationAvatar } from './NotificationAvatar'

describe('NotificationAvatar', () => {
  it('puts initials on a 42 px circle in the card colour', () => {
    const { container } = render(
      <NotificationAvatar avatar={{ kind: 'initials', text: 'MK', color: '#6d28d9' }} />,
    )

    const avatar = container.firstElementChild as HTMLElement
    expect(avatar).toHaveTextContent('MK')
    expect(avatar.getAttribute('class')).toContain('rounded-full')
    expect(avatar.getAttribute('class')).toContain('h-[42px]')
    expect(avatar.getAttribute('class')).toContain('w-[42px]')
    expect(avatar.getAttribute('class')).toContain('text-[14px]')
    expect(avatar.getAttribute('class')).toContain('font-bold')
    expect(avatar.style.backgroundColor).toBe('rgb(109, 40, 217)')
    expect(avatar.getAttribute('aria-hidden')).toBe('true')
  })

  it('puts a 20 px check glyph on a 12 px-radius square', () => {
    const { container } = render(
      <NotificationAvatar avatar={{ kind: 'icon', icon: 'check', color: '#15803d' }} />,
    )

    const avatar = container.firstElementChild as HTMLElement
    const glyph = avatar.querySelector('svg') as SVGElement
    expect(avatar.getAttribute('class')).toContain('rounded-[12px]')
    expect(avatar.style.backgroundColor).toBe('rgb(21, 128, 61)')
    expect(avatar.textContent).toBe('')
    expect(glyph.getAttribute('class')).toContain('h-5')
    expect(glyph.getAttribute('stroke-width')).toBe('2.4')
    expect(glyph.querySelectorAll('path')).toHaveLength(1)
  })

  it('puts a warning triangle on the rose square', () => {
    const { container } = render(
      <NotificationAvatar avatar={{ kind: 'icon', icon: 'warning', color: '#be123c' }} />,
    )

    const avatar = container.firstElementChild as HTMLElement
    const glyph = avatar.querySelector('svg') as SVGElement
    expect(avatar.getAttribute('class')).toContain('rounded-[12px]')
    expect(avatar.style.backgroundColor).toBe('rgb(190, 18, 60)')
    expect(glyph.querySelectorAll('path')).toHaveLength(2)
    expect(glyph.getAttribute('aria-hidden')).toBe('true')
  })

  it('never ships an image', () => {
    const { container } = render(
      <NotificationAvatar avatar={{ kind: 'initials', text: 'DA', color: '#b45309' }} />,
    )

    expect(container.querySelector('img')).toBeNull()
  })
})
