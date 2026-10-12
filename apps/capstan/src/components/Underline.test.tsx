import { render } from '@testing-library/react'
import { Underline } from './Underline'

describe('Underline — the decor that carries the open row and the hover wipe', () => {
  it('hides itself behind the label and wipes in from the left', () => {
    render(<Underline current={false} />)

    const underline = document.querySelector('span[aria-hidden="true"]') as HTMLElement

    expect(underline.className).toContain('bg-accent')
    expect(underline.className).toContain('h-px')
    expect(underline.className).toContain('bottom-[-1px]')
    expect(underline.className).toContain('-z-10')
    expect(underline.className).toContain('scale-x-0')
    expect(underline.className).toContain('group-hover:scale-x-100')
    expect(underline.className).toContain('duration-500')
  })

  it('stays out on the row the page is already on, with no hover left to wipe', () => {
    render(<Underline current />)

    const underline = document.querySelector('span[aria-hidden="true"]') as HTMLElement

    expect(underline.className).toContain('scale-x-100')
    expect(underline.className).not.toContain('scale-x-0')
  })
})
