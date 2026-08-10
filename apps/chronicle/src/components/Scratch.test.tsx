import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavMenu } from './NavMenu'

describe('scratch debug', () => {
  it('dumps the mobile aside DOM', () => {
    render(<NavMenu menuOpen onClose={vi.fn()} />)
    const aside = screen.getByRole('complementary', { name: 'Menu' })
    const links = aside.querySelectorAll('a')
    const labels: string[] = []
    links.forEach((l) => labels.push(l.textContent ?? ''))
    // eslint-disable-next-line no-console
    console.log('ASIDE_LINKS=' + JSON.stringify(labels))
    expect(aside).toBeInTheDocument()
  })
})
