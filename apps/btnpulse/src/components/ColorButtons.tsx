import { cn } from '@free-react-templates/ui'

interface ColorButtonsProps {
  className?: string
}

const BUTTON_COLORS: { name: string; bg: string; text: string }[] = [
  { name: 'Primary', bg: '#007bff', text: '#fff' },
  { name: 'Secondary', bg: '#6c757d', text: '#fff' },
  { name: 'Success', bg: '#28a745', text: '#fff' },
  { name: 'Info', bg: '#17a2b8', text: '#fff' },
  { name: 'Warning', bg: '#ffc107', text: '#000' },
  { name: 'Danger', bg: '#dc3545', text: '#fff' },
  { name: 'Light', bg: '#f8f9fa', text: '#212529' },
  { name: 'Orange', bg: '#fd7e14', text: '#fff' },
  { name: 'Indigo', bg: '#6610f2', text: '#fff' },
  { name: 'Pink', bg: '#e83e8c', text: '#fff' },
  { name: 'Deep Orange', bg: '#ffac8e', text: '#fff' },
  { name: 'Aqua', bg: '#3fc5f0', text: '#fff' },
  { name: 'Dark', bg: '#393e46', text: '#fff' },
  { name: 'Black', bg: '#000000', text: '#fff' },
  { name: 'Purple', bg: '#6f42c1', text: '#fff' },
  { name: 'Blue', bg: '#007bff', text: '#fff' },
  { name: 'Brown', bg: '#a0855b', text: '#fff' },
  { name: 'Blue Gray', bg: '#3f4d71', text: '#fff' },
]

export function ColorButtons({ className }: ColorButtonsProps) {
  return (
    <div className={cn('mb-12 flex flex-wrap gap-3', className)}>
      {BUTTON_COLORS.map(({ name, bg, text }) => (
        <button
          key={name}
          style={{ backgroundColor: bg, color: text }}
          className={cn(
            'rounded px-[25px] py-2 text-[12px] font-normal uppercase tracking-[0.03rem] shadow-[0_2px_5px_-1px_rgba(0,0,0,0.2)] transition-all duration-200',
          )}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
