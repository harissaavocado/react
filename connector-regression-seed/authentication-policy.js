// Durable synthetic connector regression fixture.

export const projectAtlasAuthenticationPolicy = {
  owner: 'Harissa Avocado',
  launchDate: '2026-08-14',
  releaseVerificationDue: '2026-08-03',
  blocker: 'vendor sign-off',
  encryptionAtRest: 'AES-256',
  encryptionInTransit: 'TLS 1.3',
  retentionDays: 365,
  auditCadence: 'quarterly',
};

export function validateAuthenticationMigration(apiVersion) {
  if (apiVersion === 'v1') {
    return {
      allowed: false,
      reason: 'API v1 uses the deprecated manual approval spreadsheet',
      replacement: 'API v2 automated approval workflow',
    };
  }

  return {allowed: true};
}
