import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DropdownButtons } from './DropdownButtons'

describe('DropdownButtons', () => {
  it('renders dropdown buttons and toggles menu on click', () => {
    render(<DropdownButtons />)
    expect(screen.getByText('3. Interactive Dropdown Buttons')).toBeInTheDocument()
    const dropdownBtn = screen.getByRole('button', { name: /Primary Dropdown/ })
    expect(dropdownBtn).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(dropdownBtn)
    expect(dropdownBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Another action')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Another action'))
    expect(dropdownBtn).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(/Another Action/)).toBeInTheDocument()
  })

  it('selects Action from primary dropdown', () => {
    render(<DropdownButtons />)
    const primaryBtn = screen.getByRole('button', { name: /Primary Dropdown/ })
    fireEvent.click(primaryBtn)
    fireEvent.click(screen.getByText('Action'))
    expect(screen.getByText(/Action 1/)).toBeInTheDocument()
  })

  it('selects Something else from primary dropdown', () => {
    render(<DropdownButtons />)
    const primaryBtn = screen.getByRole('button', { name: /Primary Dropdown/ })
    fireEvent.click(primaryBtn)
    fireEvent.click(screen.getByText('Something else here'))
    expect(screen.getByText(/Something Else/)).toBeInTheDocument()
  })

  it('opens secondary dropdown and selects items', () => {
    render(<DropdownButtons />)
    const secondaryBtn = screen.getByRole('button', { name: /Secondary Dropdown/ })
    fireEvent.click(secondaryBtn)
    expect(secondaryBtn).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(screen.getByText('Settings'))
    expect(screen.getByText(/Settings/)).toBeInTheDocument()
    expect(secondaryBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens secondary dropdown and selects Profile', () => {
    render(<DropdownButtons />)
    const secondaryBtn = screen.getByRole('button', { name: /Secondary Dropdown/ })
    fireEvent.click(secondaryBtn)
    fireEvent.click(screen.getByText('Profile'))
    expect(screen.getByText(/Profile/)).toBeInTheDocument()
  })

  it('toggles primary dropdown closed by clicking the button again', () => {
    render(<DropdownButtons />)
    const primaryBtn = screen.getByRole('button', { name: /Primary Dropdown/ })
    fireEvent.click(primaryBtn)
    expect(primaryBtn).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(primaryBtn)
    expect(primaryBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles secondary dropdown closed by clicking the button again', () => {
    render(<DropdownButtons />)
    const secondaryBtn = screen.getByRole('button', { name: /Secondary Dropdown/ })
    fireEvent.click(secondaryBtn)
    expect(secondaryBtn).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(secondaryBtn)
    expect(secondaryBtn).toHaveAttribute('aria-expanded', 'false')
  })
})
