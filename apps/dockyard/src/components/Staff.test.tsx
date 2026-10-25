import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Staff } from './Staff'
import { staff } from '../data'

describe('Staff', () => {
  it('renders three bordered cards with circular portraits', () => {
    render(<Staff />)

    for (const member of staff) {
      const heading = screen.getByRole('heading', { level: 3, name: member.name })
      const card = heading.closest('li') as HTMLElement

      expect(card).toHaveClass('border-line', 'rounded-[4px]', 'p-[30px]')
      expect(card).toHaveTextContent(member.role)
      expect(card).toHaveTextContent(member.blurb)

      const portrait = within(card).getByRole('img', { name: member.name })
      expect(portrait).toHaveAttribute('src', member.avatar)
      expect(portrait).toHaveClass('size-[130px]', 'rounded-full')
      expect(heading).toHaveClass('text-[20px]')
    }
  })

  it('gives every member three square blue social links with accessible names', () => {
    render(<Staff />)

    for (const member of staff) {
      const card = screen.getByRole('heading', { level: 3, name: member.name })
        .closest('li') as HTMLElement
      const links = within(card).getAllByRole('link')

      expect(links).toHaveLength(3)
      for (const network of ['Twitter', 'Facebook', 'Instagram']) {
        const link = screen.getByRole('link', { name: `${member.name} on ${network}` })
        expect(link).toHaveClass('size-[30px]', 'bg-brand', 'rounded-[4px]')
      }
    }
  })

  it('steps the roles down to 12px uppercase muted type', () => {
    render(<Staff />)

    expect(screen.getByText(staff[0]!.role)).toHaveClass('text-[12px]', 'uppercase', 'text-muted')
  })
})
