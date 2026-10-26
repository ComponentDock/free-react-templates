import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SaveButton } from './SaveButton'

describe('SaveButton', () => {
  it('offers to save an unsaved job', () => {
    render(
      <SaveButton saved={false} title="Senior Product Designer" company="Tideline" onToggle={() => {}} />,
    )

    const button = screen.getByRole('button', { name: 'Save Senior Product Designer at Tideline' })
    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(button.className).toContain('border-line')
    expect(button.className).toContain('bg-white')
    expect(button.className).toContain('size-10')
    expect(button.querySelector('svg')?.getAttribute('class')).toContain('fill-none')
  })

  it('offers to remove a saved job and paints the pressed treatment', () => {
    render(
      <SaveButton saved title="Senior Product Designer" company="Tideline" onToggle={() => {}} />,
    )

    const button = screen.getByRole('button', {
      name: 'Remove Senior Product Designer from saved jobs',
    })
    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(button.className).toContain('bg-ink')
    expect(button.className).toContain('text-lime')
    expect(button.querySelector('svg')?.getAttribute('class')).toContain('fill-current')
  })

  it('reports a click through its toggle handler', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<SaveButton saved={false} title="Junior UI Designer" company="Greenpath Energy" onToggle={onToggle} />)

    await user.click(screen.getByRole('button', { name: /Junior UI Designer/ }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
