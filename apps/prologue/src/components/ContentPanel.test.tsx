import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentPanel } from './ContentPanel'

describe('ContentPanel', () => {
  it('is a space-between white column with the mark, the hero and the socials on its edges', () => {
    render(<ContentPanel />)

    const panel = screen.getByTestId('content-panel')

    expect(panel).toHaveClass(
      'relative',
      'flex',
      'w-[37%]',
      'flex-col',
      'justify-between',
      'bg-panel',
      'pt-[37px]',
      'pr-[50px]',
      'pb-[52px]',
      'pl-[70px]',
      'max-[1200px]:w-[60%]',
      'max-[992px]:w-full',
      'max-[992px]:pr-[15px]',
      'max-[992px]:pl-[15px]',
    )

    expect(panel.children[0]).toBe(screen.getByTestId('brand-mark'))
    expect(panel.children[1]).toBe(screen.getByTestId('hero-block'))
    expect(panel.children[2]).toBe(screen.getByTestId('social-band'))
  })

  it('pins the credit line absolutely so the three-band geometry is untouched', () => {
    render(<ContentPanel />)

    const attribution = screen.getByTestId('attribution')

    expect(attribution).toHaveClass('absolute', 'inset-x-0', 'bottom-1', 'text-center')
    expect(attribution.parentElement).toBe(screen.getByTestId('content-panel'))
  })

  it('accepts layout overrides', () => {
    render(<ContentPanel className="w-1/2" />)

    expect(screen.getByTestId('content-panel')).toHaveClass('w-1/2')
  })
})
