import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { FORM_LABEL } from '../content'
import { estimateFor } from '../pricing'
import { UsageControls } from './UsageControls'

const estimate = estimateFor(4, 4, false)

function renderControls(overrides: Partial<Parameters<typeof UsageControls>[0]> = {}) {
  return render(
    <UsageControls
      estimate={estimate}
      callsIndex={4}
      storageIndex={4}
      support={false}
      onCallsChange={() => {}}
      onStorageChange={() => {}}
      onSupportChange={() => {}}
      {...overrides}
    />,
  )
}

describe('UsageControls', () => {
  it('groups the three controls in one labelled form', () => {
    const { container } = renderControls()

    const form = screen.getByRole('form', { name: FORM_LABEL })
    expect(form).toHaveClass('rr-controls')
    expect(container.querySelectorAll('input')).toHaveLength(3)
    expect(container.querySelectorAll('input[type="range"]')).toHaveLength(2)
    expect(container.querySelectorAll('input[type="checkbox"]')).toHaveLength(1)
  })

  it('gives each slider its own label, hint and pill', () => {
    renderControls()

    expect(screen.getByRole('slider', { name: 'API calls per month' })).toHaveValue('4')
    expect(screen.getByRole('slider', { name: 'Database storage' })).toHaveValue('4')
    expect(screen.getByText('1M')).toHaveClass('rr-value')
    expect(screen.getByText('50 GB')).toHaveClass('rr-value')
  })

  it('routes each control to its own handler', () => {
    const onCallsChange = vi.fn()
    const onStorageChange = vi.fn()
    const onSupportChange = vi.fn()
    renderControls({ onCallsChange, onStorageChange, onSupportChange })

    fireEvent.change(screen.getByRole('slider', { name: 'API calls per month' }), {
      target: { value: '8' },
    })
    fireEvent.change(screen.getByRole('slider', { name: 'Database storage' }), {
      target: { value: '11' },
    })
    fireEvent.click(screen.getByRole('checkbox'))

    expect(onCallsChange).toHaveBeenCalledWith(8)
    expect(onStorageChange).toHaveBeenCalledWith(11)
    expect(onSupportChange).toHaveBeenCalledWith(true)
  })

  it('swallows the submit that Enter would otherwise fire', () => {
    const { container } = renderControls()
    const form = container.querySelector('form')!
    const event = new Event('submit', { bubbles: true, cancelable: true })

    act(() => {
      form.dispatchEvent(event)
    })

    expect(event.defaultPrevented).toBe(true)
  })
})
