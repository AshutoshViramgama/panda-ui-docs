import { NavLink } from 'react-router-dom';
import { css } from '../../../styled-system/css';
import { useTheme } from '../../hooks/useTheme';
import { NAV_SECTIONS } from '../../constants/tokens';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className={css({
            display: { base: 'block', lg: 'none' },
            position: 'fixed',
            inset: '0',
            top: '16',
            bg: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(2px)',
            zIndex: 35,
          })}
        />
      )}
      <aside
        className={css({
          position: 'fixed',
          top: '16',
          left: '0',
          bottom: '0',
          width: '64',
          bg: isDark ? 'zinc.950' : 'white',
          borderRight: '1px solid',
          borderColor: isDark ? 'zinc.800' : 'zinc.200',
          overflowY: 'auto',
          py: '6',
          px: '4',
          zIndex: 40,
          transform: { base: isOpen ? 'translateX(0)' : 'translateX(-100%)', lg: 'translateX(0)' },
          transition: 'transform 0.3s ease',
        })}
      >
      <nav>
        {NAV_SECTIONS.map((section) => (
          <div key={section.title} className={css({ mb: '6' })}>
            <h3
              className={css({
                fontSize: 'xs',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: 'widest',
                color: isDark ? 'zinc.500' : 'zinc.400',
                mb: '2',
                px: '3',
              })}
            >
              {section.title}
            </h3>
            <ul className={css({ listStyle: 'none', padding: '0', margin: '0' })}>
              {section.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      css({
                        display: 'block',
                        px: '3',
                        py: '1.5',
                        rounded: 'md',
                        fontSize: 'sm',
                        fontWeight: isActive ? 'semibold' : 'normal',
                        color: isActive
                          ? 'blue.500'
                          : isDark
                            ? 'zinc.400'
                            : 'zinc.600',
                        bg: isActive
                          ? isDark
                            ? 'blue.500/10'
                            : 'blue.50'
                          : 'transparent',
                        textDecoration: 'none',
                        transition: 'all 0.15s',
                        _hover: {
                          color: isActive ? 'blue.500' : isDark ? 'zinc.200' : 'zinc.900',
                          bg: isActive
                            ? isDark
                              ? 'blue.500/10'
                              : 'blue.50'
                            : isDark
                              ? 'zinc.800/50'
                              : 'zinc.100',
                        },
                      })
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      </aside>
    </>
  );
}
