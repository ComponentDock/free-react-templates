import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Blobs } from './Blobs'

describe('Blobs', () => {
  it('paints three decorations and keeps all of them out of the accessibility tree', () => {
    const { container } = render(<Blobs />)

    const blobs = [...container.querySelectorAll('div')]
    expect(blobs).toHaveLength(3)
    blobs.forEach((blob) => {
      expect(blob).toHaveAttribute('aria-hidden', 'true')
      expect(blob.className).toContain('absolute')
      expect(blob.className).toContain('rounded-full')
      expect(blob.className).toContain('[filter:blur(8px)]')
      expect(blob.className).toContain('opacity-[.35]')
      expect(blob.className).toContain('pointer-events-none')
    })
  })

  it('sizes and places the three discs as measured — 320, 380 and 220', () => {
    const { container } = render(<Blobs />)

    const blobs = [...container.querySelectorAll('div')]
    expect(blobs[0]!.className).toContain('size-80')
    expect(blobs[0]!.className).toContain('left-[6%]')
    expect(blobs[0]!.className).toContain('top-[8%]')
    expect(blobs[1]!.className).toContain('size-[380px]')
    expect(blobs[1]!.className).toContain('right-[4%]')
    expect(blobs[1]!.className).toContain('bottom-[6%]')
    expect(blobs[2]!.className).toContain('size-[220px]')
    expect(blobs[2]!.className).toContain('left-[44%]')
    expect(blobs[2]!.className).toContain('top-[36%]')
  })
})
