import { css } from '../../../styled-system/css';
import { useTheme } from '../../hooks/useTheme';

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer
      className={css({
        mt: '16',
        pt: '8',
        pb: '4',
        borderTop: '1px solid',
        borderColor: isDark ? 'zinc.800' : 'zinc.200',
        textAlign: 'center',
        fontSize: 'sm',
        color: isDark ? 'zinc.400' : 'zinc.500',
      })}
    >
      <p className={css({ display: 'inline-flex', alignItems: 'center', gap: '1.5' })}>
        Developed with
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={css({ width: '4', height: '4', color: 'red.500' })}
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        by Ashutosh Viramgama
      </p>
    </footer>
  );
}
