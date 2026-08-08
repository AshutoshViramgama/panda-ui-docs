import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

const AVATAR_COLORS = ['blue', 'red', 'green', 'purple', 'amber', 'teal'] as const;

export function AvatarPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Avatar</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          User avatars with initials, different sizes, and status indicators. Supports avatar groups.
        </p>
      </div>

      <DocSection title="Avatar with Initials" description="Circular avatars showing user initials.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '4', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {AVATAR_COLORS.map((color, i) => (
            <div
              key={color}
              className={css({ width: '12', height: '12', rounded: 'full', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: 'sm' })}
              style={{ backgroundColor: `var(--colors-${color}-500)` }}
            >
              {['JD', 'AS', 'MK', 'LP', 'RW', 'CN'][i]}
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Avatar Sizes" description="Small (8), medium (12), large (16), and extra large (20).">
        <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {[
            { size: '8', fontSize: 'xs', label: 'SM' },
            { size: '12', fontSize: 'sm', label: 'MD' },
            { size: '16', fontSize: 'lg', label: 'LG' },
            { size: '20', fontSize: 'xl', label: 'XL' },
          ].map((av) => (
            <div key={av.size} className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2' })}>
              <div
                className={css({ rounded: 'full', display: 'flex', alignItems: 'center', justifyContent: 'center', bg: 'blue.500', color: 'white', fontWeight: 'bold' })}
                style={{ width: `var(--spacing-${av.size})`, height: `var(--spacing-${av.size})`, fontSize: av.fontSize === 'xs' ? '0.65rem' : undefined }}
              >
                <span className={css({ fontSize: av.fontSize as 'xs' | 'sm' | 'lg' | 'xl' })}>{av.label}</span>
              </div>
              <span className={css({ fontSize: 'xs', fontFamily: 'mono', color: isDark ? 'zinc.500' : 'zinc.400' })}>w="{av.size}"</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Avatar with Status" description="Status badge overlay for online/offline state.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '6', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {[
            { initials: 'JD', color: 'blue', status: 'green', label: 'Online' },
            { initials: 'AS', color: 'red', status: 'amber', label: 'Away' },
            { initials: 'MK', color: 'purple', status: 'red', label: 'Busy' },
            { initials: 'LP', color: 'teal', status: 'zinc', label: 'Offline' },
          ].map((av) => (
            <div key={av.initials} className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2' })}>
              <div className={css({ position: 'relative', display: 'inline-flex' })}>
                <div
                  className={css({ width: '12', height: '12', rounded: 'full', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: 'sm' })}
                  style={{ backgroundColor: `var(--colors-${av.color}-500)` }}
                >
                  {av.initials}
                </div>
                <span
                  className={css({ position: 'absolute', bottom: '0', right: '0', width: '3.5', height: '3.5', rounded: 'full', border: '2px solid', borderColor: isDark ? 'zinc.800' : 'white' })}
                  style={{ backgroundColor: `var(--colors-${av.status}-500)` }}
                />
              </div>
              <span className={css({ fontSize: 'xs', color: isDark ? 'zinc.400' : 'zinc.500' })}>{av.label}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Avatar Group" description="Stacked avatars for showing multiple users.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ display: 'flex' })}>
            {AVATAR_COLORS.map((color, i) => (
              <div
                key={`group-${color}`}
                className={css({ width: '10', height: '10', rounded: 'full', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: 'xs', border: '2px solid', borderColor: isDark ? 'zinc.800' : 'white' })}
                style={{ backgroundColor: `var(--colors-${color}-500)`, marginLeft: i > 0 ? '-8px' : '0', zIndex: AVATAR_COLORS.length - i }}
              >
                {['JD', 'AS', 'MK', 'LP', 'RW', 'CN'][i]}
              </div>
            ))}
            <div className={css({ width: '10', height: '10', rounded: 'full', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 'xs', border: '2px solid', borderColor: isDark ? 'zinc.800' : 'white', bg: isDark ? 'zinc.600' : 'zinc.300', color: isDark ? 'zinc.200' : 'zinc.700' })} style={{ marginLeft: '-8px' }}>
              +5
            </div>
          </div>
        </div>
        <CodeBlock
          code={`// Avatar Group
<div className={css({ display: 'flex' })}>
  {users.map((user, i) => (
    <div
      key={user.id}
      className={css({
        w: '10', h: '10', rounded: 'full',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'white', fontWeight: 'bold', fontSize: 'xs',
        border: '2px solid', borderColor: 'white',
        bg: 'blue.500',
      })}
      style={{ marginLeft: i > 0 ? '-8px' : '0' }}
    >
      {user.initials}
    </div>
  ))}
</div>`}
        />
      </DocSection>
    </div>
  );
}
