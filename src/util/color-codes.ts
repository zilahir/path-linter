/**
 * Special regular expression that matches ANSI escape
 * sequences.
 */
const ANSI_REGEX = [
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
].join('|');

/**
 * Colors (ANSI escape sequences) used
 * by path-linter.
 */
export const COLORS = {
    GREEN: '\x1b[32m',
    BLUE: '\x1b[94m',
    CYAN: '\x1b[36m',
    RED: '\x1b[31m',
    RESET: '\x1b[0m'
};

export function green(text: string): string {
    return `${COLORS.GREEN}${text}${COLORS.RESET}`;
}

export function red(text: string): string {
    return `${COLORS.RED}${text}${COLORS.RESET}`;
}

export function blue(text: string): string {
    return `${COLORS.BLUE}${text}${COLORS.RESET}`;
}

export function cyan(text: string): string {
    return `${COLORS.CYAN}${text}${COLORS.RESET}`;
}

export function deColorize(message: string): string {
    return message.replace(new RegExp(ANSI_REGEX, 'g'), '');
}
