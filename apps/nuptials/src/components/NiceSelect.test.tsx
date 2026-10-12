import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { NiceSelect } from './NiceSelect'
import { MEAL_LABEL, MEAL_OPTIONS, type NiceOption } from '../lib/site'

function renderPicker(overrides: { value?: NiceOption; onChange?: (option: NiceOption) => void } = {}) {
  const onChange = overrides.onChange ?? vi.fn()

  render(
    <NiceSelect
      id="pick"
      label={MEAL_LABEL}
      options={MEAL_OPTIONS}
      value={overrides.value ?? MEAL_OPTIONS[0]}
      onChange={onChange}
    />,
  )

  return { onChange }
}

const trigger = (name: string) => screen.getByRole('button', { name })

describe('NiceSelect', () => {
  it('shows the current choice behind its own label and keeps the list shut', () => {
    renderPicker()

    const field = trigger(`${MEAL_LABEL} Meal 1`)

    expect(field).toHaveAttribute('aria-haspopup', 'listbox')
    expect(field).toHaveAttribute('aria-expanded', 'false')
    expect(field).toHaveAttribute('aria-controls', 'pick-list')
    expect(screen.getByText(MEAL_LABEL)).toBeInTheDocument()
    expect(screen.queryByRole('listbox')).toBeNull()
    expect(screen.queryByRole('option')).toBeNull()
  })

  it('opens into the design rows and hands the chosen one back, then shuts again', () => {
    const { onChange } = renderPicker()

    fireEvent.click(trigger(`${MEAL_LABEL} Meal 1`))

    const list = screen.getByRole('listbox', { name: MEAL_LABEL })
    const options = within(list).getAllByRole('option')

    expect(options.map((option) => option.textContent)).toEqual(['Meal 1', 'Meal 2', 'Meal 3'])
    expect(options.map((option) => option.getAttribute('aria-selected'))).toEqual([
      'true',
      'false',
      'false',
    ])
    expect((options[0] as HTMLElement).className).toContain('bg-brand')
    expect((options[1] as HTMLElement).className).toContain('text-white/85')

    fireEvent.click(options[1] as HTMLElement)

    expect(onChange).toHaveBeenCalledWith(MEAL_OPTIONS[1])
    expect(screen.queryByRole('listbox')).toBeNull()
    expect(trigger(`${MEAL_LABEL} Meal 1`)).toHaveAttribute('aria-expanded', 'false')
  })

  it('marks the row that is already chosen when it reopens on another value', () => {
    renderPicker({ value: MEAL_OPTIONS[2] })

    fireEvent.click(trigger(`${MEAL_LABEL} Meal 3`))

    expect(
      within(screen.getByRole('listbox')).getAllByRole('option').map((option) => option.getAttribute('aria-selected')),
    ).toEqual(['false', 'false', 'true'])
  })

  it('closes on Escape and ignores every other key while it is open', () => {
    renderPicker()

    fireEvent.click(trigger(`${MEAL_LABEL} Meal 1`))
    fireEvent.keyDown(document, { key: 'ArrowDown' })

    expect(screen.getByRole('listbox')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('closes again when the trigger is pressed a second time', () => {
    renderPicker()

    fireEvent.click(trigger(`${MEAL_LABEL} Meal 1`))
    fireEvent.click(trigger(`${MEAL_LABEL} Meal 1`))

    expect(screen.queryByRole('listbox')).toBeNull()
  })
})
