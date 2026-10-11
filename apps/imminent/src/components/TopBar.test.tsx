import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the wordmark and the social row on one space-between line', () => {
    const { container } = render(<TopBar />)

    const header = container.firstElementChild

    expect(header?.tagName).toBe('HEADER')
    expect(header).toHaveClass(
      'flex',
      'flex-wrap',
      'items-center',
      'justify-between',
      'pl-[75px]',
      'pr-[60px]',
      'pb-[165px]',
      'max-[576px]:pr-0',
      'max-[576px]:pl-[5px]',
      'max-[576px]:pb-[65px]',
    )
    expect(header?.children).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Imminent' })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(4)
  })

  it('accepts a className override', () => {
    const { container } = render(<TopBar className="gap-3" />)

    expect(container.firstElementChild).toHaveClass('gap-3')
  })
})
