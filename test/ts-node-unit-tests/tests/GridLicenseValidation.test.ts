import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';

import LicenseValidation, {
    LicenseStatus
} from '../../../ts/Grid/Pro/License/LicenseValidation.js';

const REF = new Date(Date.UTC(2026, 3, 13));

const KEY_ANNUAL_VALID = 'NMD7-4JNR-GU9L-A223-06PP-0000';
const KEY_ANNUAL_EXPIRED = 'C2TR-Z9ZC-OL4D-A1HT-07CF-0000';
const KEY_PERPETUAL_SUPPORT_ENDED = '5DR9-W35I-TMXI-P1MW-07PU-0000';

describe('Grid Pro license validation', () => {
    it('Valid key', () => {
        strictEqual(
            LicenseValidation.getStatus(KEY_ANNUAL_VALID, REF),
            LicenseStatus.VALID
        );
    });

    it('Annual expired key', () => {
        strictEqual(
            LicenseValidation.getStatus(KEY_ANNUAL_EXPIRED, REF),
            LicenseStatus.EXPIRED
        );
    });

    it('Perpetual license past support end', () => {
        strictEqual(
            LicenseValidation.getStatus(KEY_PERPETUAL_SUPPORT_ENDED, REF),
            LicenseStatus.EXPIRED
        );
    });

    it('Missing key', () => {
        strictEqual(
            LicenseValidation.getStatus(void 0, REF),
            LicenseStatus.MISSING
        );
    });

    it('Invalid key (malformed)', () => {
        strictEqual(
            LicenseValidation.getStatus('not-a-grid-key', REF),
            LicenseStatus.INVALID
        );
    });
});
