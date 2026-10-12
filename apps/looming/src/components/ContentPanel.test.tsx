import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentPanel } from './ContentPanel'

describe('ContentPanel', () => {
  it('lays the mark, the hero block and the bottom band out in a space-between column', () => {
    render(<ContentPanel />)

    const panel = screen.getByTestId('content-panel')

    expect(panel).toHaveClass(
      'flex',
      'w-1/2',
      'flex-col',
      'justify-between',
      'bg-panel',
      'pt-[37px]',
      'pr-[80px]',
      'pb-[50px]',
      'pl-[65px]',
      'max-[1200px]:w-3/5',
      'max-[992px]:w-full',
      'max-[992px]:pr-[15px]',
      'max-[992px]:pl-[15px]',
    )

    expect(panel.children[0]).toBe(screen.getByTestId('brand-mark'))
    expect(panel.children[1]).toBe(screen.getByTestId('hero'))
    expect(panel.children[2]).toBe(screen.getByTestId('panel-bottom'))
    expect(screen.getByTestId('panel-bottom')).toContainElement(screen.getByTestId('social-row'))
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('accepts layout overrides', () => {
    render(<ContentPanel className="w-full" />)

    expect(screen.getByTestId('content-panel')).toHaveClass('w-full')
  })
})
