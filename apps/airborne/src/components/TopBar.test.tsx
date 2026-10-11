import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('spreads the wordmark and the social row across one wrapping line', () => {
    const { container } = render(<TopBar />)

    const header = container.firstElementChild

    expect(header?.tagName).toBe('HEADER')
    expect(header).toHaveClass(
      'relative',
      'flex',
      'flex-wrap',
      'items-center',
      'justify-between',
      'pl-[80px]',
      'pr-[74px]',
      'pb-[175px]',
      'max-[576px]:pl-[20px]',
      'max-[576px]:pr-[14px]',
      'max-[576px]:pb-[50px]',
    )

    expect(screen.getByRole('link', { name: 'Airborne' })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(4)
    expect(header?.children).toHaveLength(2)
  })

  it('accepts a className override on the bar', () => {
    const { container } = render(<TopBar className="z-[2]" />)

    expect(container.firstElementChild).toHaveClass('z-[2]')
  })
})
