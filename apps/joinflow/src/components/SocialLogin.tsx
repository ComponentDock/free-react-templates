export function SocialLogin() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="mb-2 text-center text-sm text-[var(--color-muted)]">Or register with</span>
      <a
        href="#"
        aria-label="Sign in with Facebook"
        className="flex h-12 w-full items-center justify-center rounded text-white transition-colors duration-300"
        style={{ backgroundColor: 'var(--color-facebook)' }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = 'var(--color-facebook-hover)')
        }
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-facebook)')}
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 602 1024" aria-hidden="true">
          <g transform="translate(0,960) scale(1,-1)">
            <path d="M548 944V793H458Q406 793 390.5 770.0Q375 747 375 711V603H542L520 434H375V0H200V434H54V603H200V727Q200 782 216 823Q232 865 260.5 893.5Q289 922 329 936Q369 951 418 951Q464 951 500.0 948.5Q536 946 548 944Z" />
          </g>
        </svg>
      </a>
      <a
        href="#"
        aria-label="Sign in with Twitter"
        className="flex h-12 w-full items-center justify-center rounded text-white transition-colors duration-300"
        style={{ backgroundColor: 'var(--color-twitter)' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-twitter-hover)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-twitter)')}
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 951 1024" aria-hidden="true">
          <g transform="translate(0,960) scale(1,-1)">
            <path d="M926 718Q907 690 883.5 666.0Q860 642 833 622Q834 616 834.0 610.0Q834 604 834 598Q834 507 799 413Q765 320 698.5 244.5Q632 169 534 121Q436 73 309 73Q230 73 158.0 95.0Q86 117 25 156Q36 155 47.0 154.5Q58 154 70 154Q134 154 192.5 174.5Q251 195 299 233Q238 234 191.0 270.0Q144 306 126 361Q135 359 143.5 358.5Q152 358 161 358Q174 358 186.0 359.5Q198 361 210 364Q146 377 104.0 427.5Q62 478 62 545V547Q80 537 101.0 531.0Q122 525 145 524Q108 549 85.5 589.5Q63 630 63 678Q63 703 69.5 726.5Q76 750 88 771Q122 729 164 695Q206 660 254.5 635.0Q303 610 357 596Q411 581 469 578Q466 588 465.0 598.5Q464 609 464 620Q464 696 518.0 750.5Q572 805 649 805Q688 805 723.0 789.0Q758 773 783 746Q815 752 844.5 763.5Q874 775 901 791Q890 759 869.0 732.5Q848 706 819 689Q847 692 874.0 699.5Q901 707 926 718Z" />
          </g>
        </svg>
      </a>
      <a
        href="#"
        aria-label="Sign in with Google"
        className="flex h-12 w-full items-center justify-center rounded text-white transition-colors duration-300"
        style={{ backgroundColor: 'var(--color-google)' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-google-hover)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-google)')}
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 860 1024" aria-hidden="true">
          <g transform="translate(0,960) scale(1,-1)">
            <path d="M439 502H853Q856 485 858.0 467.5Q860 450 860 429Q860 335 830 256Q800 177 744.5 120.5Q689 64 611 32Q534 0 439 0Q348 0 268 34Q188 69 128.5 128.5Q69 188 34 268Q0 348 0 439Q0 530 34 610Q69 690 128.5 749.5Q188 809 268 843Q348 878 439 878Q483 878 524 870Q565 862 602.0 847.0Q639 832 671 811Q704 790 733 763L614 648Q589 672 546.0 694.0Q503 716 439 716Q383 716 333 694Q284 672 247.0 634.5Q210 597 188 547Q167 496 167 439Q167 381 188 331Q210 280 247.0 242.5Q284 205 333 183Q383 162 439 162Q504 162 550 182Q595 203 624.5 232.0Q654 261 669 294Q684 327 688 351H439V502Z" />
          </g>
        </svg>
      </a>
    </div>
  )
}
