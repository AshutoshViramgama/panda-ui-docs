import { useState } from 'react';
import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

const ALERT_VARIANTS = [
  { type: 'info', icon: 'ℹ️', title: 'Information', message: 'This is an informational alert — check it out!', color: 'blue' },
  { type: 'success', icon: '✅', title: 'Success', message: 'Your action has been completed successfully.', color: 'green' },
  { type: 'warning', icon: '⚠️', title: 'Warning', message: 'Please review the changes before proceeding.', color: 'amber' },
  { type: 'error', icon: '❌', title: 'Error', message: 'Something went wrong. Please try again later.', color: 'red' },
] as const;

export function AlertsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [dismissed, setDismissed] = useState<string[]>([]);

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Alerts</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Alert banners for displaying important messages. Available in info, success, warning, and error variants.
        </p>
      </div>

      <DocSection title="Standard Alerts" description="Colored alerts with icons for different message types.">
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '4', mb: '6' })}>
          {ALERT_VARIANTS.map((alert) => (
            <div
              key={alert.type}
              className={css({ p: '4', rounded: 'lg', display: 'flex', alignItems: 'flex-start', gap: '3', borderLeft: '4px solid' })}
              style={{
                backgroundColor: `var(--colors-${alert.color}-${isDark ? '950' : '50'})`,
                borderLeftColor: `var(--colors-${alert.color}-500)`,
              }}
            >
              <span className={css({ fontSize: 'lg', flexShrink: '0', mt: '0.5' })}>{alert.icon}</span>
              <div>
                <h4
                  className={css({ fontWeight: 'semibold', mb: '0.5' })}
                  style={{ color: `var(--colors-${alert.color}-${isDark ? '300' : '800'})` }}
                >
                  {alert.title}
                </h4>
                <p
                  className={css({ fontSize: 'sm' })}
                  style={{ color: `var(--colors-${alert.color}-${isDark ? '400' : '700'})` }}
                >
                  {alert.message}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`<div className={css({ p: '4', rounded: 'lg', display: 'flex', alignItems: 'flex-start', gap: '3', bg: 'blue.50', borderLeft: '4px solid', borderColor: 'blue.500' })}>\n  <span>ℹ️</span>\n  <div>\n    <h4 className={css({ fontWeight: 'semibold', color: 'blue.800', mb: '0.5' })}>Info</h4>\n    <p className={css({ fontSize: 'sm', color: 'blue.700' })}>Message text</p>\n  </div>\n</div>`}
        />
      </DocSection>

      <DocSection title="Dismissible Alerts" description="Alerts that can be closed by the user.">
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '4', mb: '6' })}>
          {ALERT_VARIANTS.filter((a) => !dismissed.includes(a.type)).map((alert) => (
            <div
              key={`dismiss-${alert.type}`}
              className={css({ p: '4', rounded: 'lg', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3' })}
              style={{ backgroundColor: `var(--colors-${alert.color}-${isDark ? '950' : '50'})` }}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '3' })}>
                <span className={css({ fontSize: 'lg' })}>{alert.icon}</span>
                <p
                  className={css({ fontSize: 'sm', fontWeight: 'medium' })}
                  style={{ color: `var(--colors-${alert.color}-${isDark ? '300' : '700'})` }}
                >
                  {alert.message}
                </p>
              </div>
              <button
                onClick={() => setDismissed((prev) => [...prev, alert.type])}
                className={css({ bg: 'transparent', border: 'none', cursor: 'pointer', fontSize: 'lg', opacity: '0.6', _hover: { opacity: '1' }, transition: 'opacity 0.15s', flexShrink: '0' })}
                style={{ color: `var(--colors-${alert.color}-${isDark ? '400' : '600'})` }}
              >
                ×
              </button>
            </div>
          ))}
          {dismissed.length > 0 && (
            <button
              onClick={() => setDismissed([])}
              className={css({ fontSize: 'sm', color: 'blue.500', bg: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline', _hover: { color: 'blue.600' } })}
            >
              Reset all dismissed alerts
            </button>
          )}
        </div>
      </DocSection>

      <DocSection title="Bordered Alerts" description="Alerts with full border instead of left accent.">
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '4', mb: '6' })}>
          {ALERT_VARIANTS.map((alert) => (
            <div
              key={`bordered-${alert.type}`}
              className={css({ p: '4', rounded: 'lg', display: 'flex', alignItems: 'center', gap: '3', borderWidth: '1', borderStyle: 'solid' })}
              style={{
                backgroundColor: `var(--colors-${alert.color}-${isDark ? '950' : '50'})`,
                borderColor: `var(--colors-${alert.color}-${isDark ? '800' : '200'})`,
              }}
            >
              <span className={css({ fontSize: 'lg' })}>{alert.icon}</span>
              <p
                className={css({ fontSize: 'sm', fontWeight: 'medium' })}
                style={{ color: `var(--colors-${alert.color}-${isDark ? '300' : '700'})` }}
              >
                {alert.message}
              </p>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
