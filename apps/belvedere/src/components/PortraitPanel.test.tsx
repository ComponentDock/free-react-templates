import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PORTRAIT, STATUS } from '../data/site'
import { PortraitPanel } from './PortraitPanel'

describe('PortraitPanel', () => {
  it('crops the photograph inside the arch frame', () => {
    const { container } = render(<PortraitPanel />)

    const image = screen.getByRole('img', { name: PORTRAIT.alt })
    expect(image).toHaveAttribute('src', PORTRAIT.src)
    expect(image).toHaveAttribute('width', String(PORTRAIT.width))
    expect(image).toHaveAttribute('height', String(PORTRAIT.height))

    const frame = container.querySelector('.bv-frame')
    expect(frame).not.toBeNull()
    expect(frame).toContainElement(image)
  })

  it('straddles the frame foot with the status pill', () => {
    const { container } = render(<PortraitPanel />)

    const pill = container.querySelector('.bv-status')
    expect(pill).toHaveTextContent(STATUS)
    expect(screen.getAllByText(STATUS)).toHaveLength(1)

    const pulse = container.querySelector('.bv-status .bv-pulse')
    expect(pulse).not.toBeNull()
    expect(pulse).toHaveAttribute('aria-hidden', 'true')
  })

  it('hides the turning sticker from assistive technology', () => {
    const { container } = render(<PortraitPanel />)

    const sticker = container.querySelector('.bv-sticker')
    expect(sticker).not.toBeNull()
    expect(sticker).toHaveAttribute('aria-hidden', 'true')
    expect(sticker?.querySelectorAll('svg')).toHaveLength(1)
  })
})
