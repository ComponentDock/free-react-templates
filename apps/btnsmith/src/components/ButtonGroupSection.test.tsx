import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ButtonGroupSection } from './ButtonGroupSection'

describe('ButtonGroupSection', () => {
  it('renders button groups and toggles radios and checkboxes', () => {
    render(<ButtonGroupSection />)
    expect(screen.getByText('4. Button Groups & Toggles')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Left' }).length).toBeGreaterThanOrEqual(1)

    const middleRadio = screen.getAllByRole('button', { name: 'Middle' })[1]!
    fireEvent.click(middleRadio)
    expect(screen.getByText(/Selected radio:/)).toHaveTextContent('Middle')

    const checkbox1 = screen.getByRole('button', { name: /Checkbox Option 1/ })
    fireEvent.click(checkbox1)
    expect(
      screen.getByRole('button', { name: /Checkbox Option 1 \(Unchecked\)/ }),
    ).toBeInTheDocument()
  })
})
