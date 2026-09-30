import { cn } from '@free-react-templates/ui'

interface SocialButtonProps {
  provider: 'facebook' | 'twitter'
  label: string
  icon: React.ReactNode
}

function SocialButton({ provider, label, icon }: SocialButtonProps) {
  return (
    <a
      href="#"
      className={cn(
        'flex h-[50px] w-[120px] items-center justify-center rounded-[2px] text-sm text-white transition-all duration-300 hover:bg-brand',
        provider === 'facebook' && 'bg-facebook',
        provider === 'twitter' && 'bg-twitter',
      )}
    >
      <span className="mr-2.5">{icon}</span>
      {label}
    </a>
  )
}

const FacebookIcon = () => (
  <svg className="h-[1em] w-auto fill-current" viewBox="0 0 1024 1792" aria-hidden="true">
    <path d="M959 1524V1260H802Q716 1260 686 1224Q656 1188 656 1116V927H949L910 631H656V-128H350V631H95V927H350V1145Q350 1331 454 1433.5Q558 1536 731 1536Q878 1536 959 1524Z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="h-[1em] w-auto fill-current" viewBox="0 0 1664 1792" aria-hidden="true">
    <path d="M1620 1128Q1553 1030 1458 961Q1459 947 1459 919Q1459 789 1421 659.5Q1383 530 1305.5 411Q1228 292 1121 200.5Q1014 109 863 54.5Q712 0 540 0Q269 0 44 145Q79 141 122 141Q347 141 523 279Q418 281 335 343.5Q252 406 221 503Q254 498 282 498Q325 498 367 509Q255 532 181.5 620.5Q108 709 108 826V830Q176 792 254 789Q188 833 149 904Q110 975 110 1058Q110 1146 154 1221Q275 1072 448.5 982.5Q622 893 820 883Q812 921 812 957Q812 1091 906.5 1185.5Q1001 1280 1135 1280Q1275 1280 1371 1178Q1480 1199 1576 1256Q1539 1141 1434 1078Q1527 1088 1620 1128Z" />
  </svg>
)

export function SocialLogin() {
  return (
    <div className="mt-6 text-center">
      <p className="mb-4 text-sm text-gray-500">or Signup with this services below</p>
      <div className="flex justify-center gap-4">
        <SocialButton provider="facebook" label="Facebook" icon={<FacebookIcon />} />
        <SocialButton provider="twitter" label="Twitter" icon={<TwitterIcon />} />
      </div>
      <p className="mt-6 text-sm text-gray-500">
        I&apos;m already a member!{' '}
        <a href="#signin" className="text-brand hover:underline">
          Sign In
        </a>
      </p>
    </div>
  )
}
