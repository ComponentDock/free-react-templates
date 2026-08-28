import { cn } from '@free-react-templates/ui'
import { BevelButton } from './BevelButton'

interface ColorButtonsProps {
  className?: string
}

const BUTTON_COLORS: { name: string; bg: string; hoverBg: string; text: string }[] = [
  { name: 'Primary', bg: '#007bff', hoverBg: '#006adb', text: '#fff' },
  { name: 'Secondary', bg: '#6c757d', hoverBg: '#5b636a', text: '#fff' },
  { name: 'Success', bg: '#28a745', hoverBg: '#218a39', text: '#fff' },
  { name: 'Info', bg: '#17a2b8', hoverBg: '#138698', text: '#fff' },
  { name: 'Warning', bg: '#ffc107', hoverBg: '#e2aa00', text: '#212529' },
  { name: 'Danger', bg: '#dc3545', hoverBg: '#ca2333', text: '#fff' },
  { name: 'Light', bg: '#f8f9fa', hoverBg: '#f8f9fa', text: '#212529' },
  { name: 'Orange', bg: '#fd7e14', hoverBg: '#eb6c02', text: '#fff' },
  { name: 'Indigo', bg: '#6610f2', hoverBg: '#570bd3', text: '#fff' },
  { name: 'Pink', bg: '#e83e8c', hoverBg: '#e41e79', text: '#fff' },
  { name: 'Deep Orange', bg: '#ffac8e', hoverBg: '#ff926a', text: '#fff' },
  { name: 'Aqua', bg: '#3fc5f0', hoverBg: '#1ebbed', text: '#fff' },
  { name: 'Dark', bg: '#393e46', hoverBg: '#292d32', text: '#fff' },
  { name: 'Black', bg: '#000000', hoverBg: '#000000', text: '#fff' },
  { name: 'Purple', bg: '#6f42c1', hoverBg: '#5f37a8', text: '#fff' },
  { name: 'Blue', bg: '#007bff', hoverBg: '#006adb', text: '#fff' },
  { name: 'Brown', bg: '#a0855b', hoverBg: '#89724e', text: '#fff' },
  { name: 'Blue Gray', bg: '#3f4d71', hoverBg: '#323d5a', text: '#fff' },
]

export function ColorButtons({ className }: ColorButtonsProps) {
  return (
    <div className={cn('mb-12 flex flex-wrap gap-3', className)}>
      {BUTTON_COLORS.map(({ name, bg, hoverBg, text }) => (
        <BevelButton key={name} label={name} bg={bg} hoverBg={hoverBg} text={text} />
      ))}
    </div>
  )
}
