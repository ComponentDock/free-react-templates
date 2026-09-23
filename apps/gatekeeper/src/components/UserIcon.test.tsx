import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserIcon } from './UserIcon'

describe('UserIcon', () => {
  it('renders a circular purple icon container', () => {
    render(<UserIcon />)
    const container = screen.getByRole('img', { name: /user icon/i })
    expect(container).toHaveClass('rounded-full')
    expect(container).toHaveClass('bg-brand')
  })

  it('displays the correct dimensions', () => {
    render(<UserIcon />)
    const container = screen.getByRole('img', { name: /user icon/i })
    expect(container).toHaveClass('h-[80px]')
    expect(container).toHaveClass('w-[80px]')
  })

  it('contains a white user icon', () => {
    render(<UserIcon />)
    const icon = screen.getByRole('img', { name: /user icon/i })
    expect(icon.querySelector('svg')).toBeInTheDocument()
  })
})
