import { css } from '../../../styled-system/css';
import { useTheme } from '../../hooks/useTheme';

interface PropsTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export function PropsTable({ headers, rows }: PropsTableProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={css({
        overflowX: 'auto',
        rounded: 'lg',
        border: '1px solid',
        borderColor: isDark ? 'zinc.800' : 'zinc.200',
        mb: '6',
      })}
    >
      <table
        className={css({
          width: 'full',
          fontSize: 'sm',
          borderCollapse: 'collapse',
        })}
      >
        <thead>
          <tr
            className={css({
              bg: isDark ? 'zinc.800/50' : 'zinc.50',
              borderBottom: '1px solid',
              borderColor: isDark ? 'zinc.700' : 'zinc.200',
            })}
          >
            {headers.map((header) => (
              <th
                key={header}
                className={css({
                  px: '4',
                  py: '3',
                  textAlign: 'left',
                  fontWeight: 'semibold',
                  color: isDark ? 'zinc.300' : 'zinc.700',
                  fontSize: 'xs',
                  textTransform: 'uppercase',
                  letterSpacing: 'wider',
                })}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={css({
                borderBottom: '1px solid',
                borderColor: isDark ? 'zinc.800/50' : 'zinc.100',
                _hover: {
                  bg: isDark ? 'zinc.800/30' : 'zinc.50/50',
                },
                transition: 'background 0.15s',
              })}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={css({
                    px: '4',
                    py: '3',
                    color: isDark ? 'zinc.400' : 'zinc.600',
                    fontFamily: cellIndex === 0 ? 'mono' : 'sans',
                    fontSize: 'sm',
                  })}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
